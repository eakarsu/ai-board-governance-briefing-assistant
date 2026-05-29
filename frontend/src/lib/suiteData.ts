export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "Risk registers",
    "ownership": "Risk registers contributes operating evidence, workflows, control signals, and reporting inputs to Board Governance Briefing.",
    "coverage": [
      "Board Packet Builder",
      "Cyber Risk Brief",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Financial KPIs",
    "ownership": "Financial KPIs contributes operating evidence, workflows, control signals, and reporting inputs to Board Governance Briefing.",
    "coverage": [
      "Cyber Risk Brief",
      "AI Risk Brief",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Cyber reports",
    "ownership": "Cyber reports contributes operating evidence, workflows, control signals, and reporting inputs to Board Governance Briefing.",
    "coverage": [
      "AI Risk Brief",
      "Financial Exposure",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "AI governance logs",
    "ownership": "AI governance logs contributes operating evidence, workflows, control signals, and reporting inputs to Board Governance Briefing.",
    "coverage": [
      "Financial Exposure",
      "Regulatory Update",
      "AI tools",
      "Audit evidence"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Workflow Areas', value: '10', note: 'Dedicated modules' },
  { label: 'Evidence Sources', value: '4', note: 'Mapped sources' },
  { label: 'AI Tools', value: '13', note: 'Suite copilots' },
  { label: 'Open Work', value: '64', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '22', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '346', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Board Packet Builder operating view",
  "Cyber Risk Brief operating view",
  "AI Risk Brief operating view",
  "Financial Exposure operating view",
  "Regulatory Update operating view",
  "Operations KPI Story operating view",
  "Decision Log operating view",
  "Director Q&A Prep operating view"
];
export const workflowHighlights = [
  "Board Packet Builder workflow with records, AI assist, approvals, audit, and reporting",
  "Cyber Risk Brief workflow with records, AI assist, approvals, audit, and reporting",
  "AI Risk Brief workflow with records, AI assist, approvals, audit, and reporting",
  "Financial Exposure workflow with records, AI assist, approvals, audit, and reporting",
  "Regulatory Update workflow with records, AI assist, approvals, audit, and reporting",
  "Operations KPI Story workflow with records, AI assist, approvals, audit, and reporting"
];
