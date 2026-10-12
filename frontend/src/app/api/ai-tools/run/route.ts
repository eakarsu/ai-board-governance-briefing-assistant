import { requestWorkbenchAI, persistWorkbenchResult, workbenchError } from '@/lib/WorkbenchAIRuntime';
import { NextRequest, NextResponse } from 'next/server';
import { aiTools, getAITool } from '@/lib/aiTools';
import { appendAuditEntry } from '@/lib/auditStore';
import { requireSession } from '@/lib/requestAuth';
import { governedQuery, governedTransaction } from '@/lib/governedPostgres';

async function callConfiguredAI(system: string, prompt: string, signal: AbortSignal) { return requestWorkbenchAI(system, prompt, signal); }

export async function GET(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;
  return NextResponse.json({ tools: aiTools });
}

export async function POST(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;

  const body = await request.json().catch(() => null) as { toolId?: string; input?: string } | null;
  const tool = getAITool(body?.toolId || 'suite-assistant');
  const input = body?.input?.trim() || tool.defaultPrompt;
  const system = 'You are ' + tool.title + '. Stay inside this suite workflow. Return concise operational guidance with risks, next actions, and audit notes.';

  try {
    const aiResponse = await callConfiguredAI(system, input, request.signal);
    const stored = await governedTransaction(async query => { request.signal.throwIfAborted(); const stored = await query<{ id: string }>(`INSERT INTO runtime_ai_results(user_identifier, tool_id, prompt, content, provider, model)
       VALUES($1, $2, $3, $4, 'openrouter', $5) RETURNING id::text`, [session.email, tool.id, input, aiResponse.content, aiResponse.model]); request.signal.throwIfAborted(); return stored; });
    request.signal.throwIfAborted();
    await appendAuditEntry('AI Tools', ((session.firstName + ' ' + session.lastName).trim() || session.email) + ' ran ' + tool.title);
    return NextResponse.json({
      tool,
      input,
      response: aiResponse.content,
      provider: 'openrouter',
      model: aiResponse.model,
      persistedId: stored.rows[0].id,
      createdAt: new Date().toISOString(),
    });
  } catch (error) { const failure = workbenchError(error, request.signal); return NextResponse.json({error: failure.error}, {status: failure.status}); }
}
