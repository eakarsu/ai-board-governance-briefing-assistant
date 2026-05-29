export type FeatureSurfaceRow = { id: string; item: string; status: string; owner: string; nextStep: string };
export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  [
    "board-packet-builder",
    "Board Packet Builder",
    "Board Packet Builder operating queue",
    "Briefing Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "cyber-risk-brief",
    "Cyber Risk Brief",
    "Cyber Risk Brief operating queue",
    "Cyber Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "ai-risk-brief",
    "AI Risk Brief",
    "AI Risk Brief operating queue",
    "AI Governance Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "financial-exposure",
    "Financial Exposure",
    "Financial Exposure operating queue",
    "Finance Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "regulatory-update",
    "Regulatory Update",
    "Regulatory Update operating queue",
    "Regulatory Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "operations-kpi-story",
    "Operations KPI Story",
    "Operations KPI Story operating queue",
    "Operations Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "decision-log",
    "Decision Log",
    "Decision Log operating queue",
    "Governance Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "director-qa-prep",
    "Director Q&A Prep",
    "Director Q&A Prep operating queue",
    "Briefing Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "committee-workplans",
    "Committee Workplans",
    "Committee Workplans operating queue",
    "Committees Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "post-meeting-actions",
    "Post-Meeting Actions",
    "Post-Meeting Actions operating queue",
    "Execution Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "documents",
    "Documents",
    "Documents operating queue",
    "Core Platform Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "notifications",
    "Notifications",
    "Notifications operating queue",
    "Core Platform Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "integrations",
    "Integrations",
    "Integrations operating queue",
    "Core Platform Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "profiles",
    "Profiles",
    "Profiles operating queue",
    "Core Platform Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "ai-assistant",
    "AI Assistant",
    "AI Assistant operating queue",
    "Intelligence Layer Lead",
    "Review evidence, assign owner, and record next action"
  ],
  [
    "ai-tools",
    "AI Tools",
    "AI Tools operating queue",
    "Intelligence Layer Lead",
    "Review evidence, assign owner, and record next action"
  ]
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-29 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-29 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title, item, owner, nextStep]) => [slug, buildSurface(slug, title, item, owner, nextStep)]));
export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]));
