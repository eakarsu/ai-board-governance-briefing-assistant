export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  [
    "board-packet-builder",
    "Board Packet Builder Records",
    "Board Packet Builder priority queue",
    "Open",
    "Board Packet Builder exception list",
    "Briefing Lead",
    "$0"
  ],
  [
    "cyber-risk-brief",
    "Cyber Risk Brief Records",
    "Cyber Risk Brief priority queue",
    "Review",
    "Cyber Risk Brief exception list",
    "Cyber Lead",
    "$0"
  ],
  [
    "ai-risk-brief",
    "AI Risk Brief Records",
    "AI Risk Brief priority queue",
    "Action needed",
    "AI Risk Brief exception list",
    "AI Governance Lead",
    "$0"
  ],
  [
    "financial-exposure",
    "Financial Exposure Records",
    "Financial Exposure priority queue",
    "Open",
    "Financial Exposure exception list",
    "Finance Lead",
    "$0"
  ],
  [
    "regulatory-update",
    "Regulatory Update Records",
    "Regulatory Update priority queue",
    "Review",
    "Regulatory Update exception list",
    "Regulatory Lead",
    "$0"
  ],
  [
    "operations-kpi-story",
    "Operations KPI Story Records",
    "Operations KPI Story priority queue",
    "Action needed",
    "Operations KPI Story exception list",
    "Operations Lead",
    "$0"
  ],
  [
    "decision-log",
    "Decision Log Records",
    "Decision Log priority queue",
    "Open",
    "Decision Log exception list",
    "Governance Lead",
    "$0"
  ],
  [
    "director-qa-prep",
    "Director Q&A Prep Records",
    "Director Q&A Prep priority queue",
    "Review",
    "Director Q&A Prep exception list",
    "Briefing Lead",
    "$0"
  ],
  [
    "committee-workplans",
    "Committee Workplans Records",
    "Committee Workplans priority queue",
    "Action needed",
    "Committee Workplans exception list",
    "Committees Lead",
    "$0"
  ],
  [
    "post-meeting-actions",
    "Post-Meeting Actions Records",
    "Post-Meeting Actions priority queue",
    "Open",
    "Post-Meeting Actions exception list",
    "Execution Lead",
    "$0"
  ],
  [
    "documents",
    "Documents Records",
    "Documents priority queue",
    "Review",
    "Documents exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications priority queue",
    "Action needed",
    "Notifications exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations priority queue",
    "Open",
    "Integrations exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles priority queue",
    "Review",
    "Profiles exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "ai-assistant",
    "AI Assistant Records",
    "AI Assistant priority queue",
    "Action needed",
    "AI Assistant exception list",
    "Intelligence Layer Lead",
    "$0"
  ],
  [
    "ai-tools",
    "AI Tools Records",
    "AI Tools priority queue",
    "Open",
    "AI Tools exception list",
    "Intelligence Layer Lead",
    "$0"
  ]
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-06-06', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} audit queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-06-10', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
