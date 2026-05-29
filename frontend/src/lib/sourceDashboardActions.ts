export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "board-packet-builder",
    "label": "Board Packet Builder",
    "description": "Board Packet Builder action group for Board Governance Briefing.",
    "href": "/board-packet-builder",
    "sourceProjects": [
      "Risk registers",
      "Financial KPIs"
    ],
    "examples": [
      "Open Board Packet Builder",
      "Review Briefing",
      "Run Board Packet Builder AI check"
    ],
    "count": 3
  },
  {
    "id": "cyber-risk-brief",
    "label": "Cyber Risk Brief",
    "description": "Cyber Risk Brief action group for Board Governance Briefing.",
    "href": "/cyber-risk-brief",
    "sourceProjects": [
      "Financial KPIs",
      "Cyber reports"
    ],
    "examples": [
      "Open Cyber Risk Brief",
      "Review Cyber",
      "Run Cyber Risk Brief AI check"
    ],
    "count": 3
  },
  {
    "id": "ai-risk-brief",
    "label": "AI Risk Brief",
    "description": "AI Risk Brief action group for Board Governance Briefing.",
    "href": "/ai-risk-brief",
    "sourceProjects": [
      "Cyber reports",
      "AI governance logs"
    ],
    "examples": [
      "Open AI Risk Brief",
      "Review AI Governance",
      "Run AI Risk Brief AI check"
    ],
    "count": 3
  },
  {
    "id": "financial-exposure",
    "label": "Financial Exposure",
    "description": "Financial Exposure action group for Board Governance Briefing.",
    "href": "/financial-exposure",
    "sourceProjects": [
      "AI governance logs"
    ],
    "examples": [
      "Open Financial Exposure",
      "Review Finance",
      "Run Financial Exposure AI check"
    ],
    "count": 3
  },
  {
    "id": "regulatory-update",
    "label": "Regulatory Update",
    "description": "Regulatory Update action group for Board Governance Briefing.",
    "href": "/regulatory-update",
    "sourceProjects": [
      "Risk registers",
      "Financial KPIs"
    ],
    "examples": [
      "Open Regulatory Update",
      "Review Regulatory",
      "Run Regulatory Update AI check"
    ],
    "count": 3
  },
  {
    "id": "operations-kpi-story",
    "label": "Operations KPI Story",
    "description": "Operations KPI Story action group for Board Governance Briefing.",
    "href": "/operations-kpi-story",
    "sourceProjects": [
      "Financial KPIs",
      "Cyber reports"
    ],
    "examples": [
      "Open Operations KPI Story",
      "Review Operations",
      "Run Operations KPI Story AI check"
    ],
    "count": 3
  },
  {
    "id": "decision-log",
    "label": "Decision Log",
    "description": "Decision Log action group for Board Governance Briefing.",
    "href": "/decision-log",
    "sourceProjects": [
      "Cyber reports",
      "AI governance logs"
    ],
    "examples": [
      "Open Decision Log",
      "Review Governance",
      "Run Decision Log AI check"
    ],
    "count": 3
  },
  {
    "id": "director-qa-prep",
    "label": "Director Q&A Prep",
    "description": "Director Q&A Prep action group for Board Governance Briefing.",
    "href": "/director-qa-prep",
    "sourceProjects": [
      "AI governance logs"
    ],
    "examples": [
      "Open Director Q&A Prep",
      "Review Briefing",
      "Run Director Q&A Prep AI check"
    ],
    "count": 3
  },
  {
    "id": "committee-workplans",
    "label": "Committee Workplans",
    "description": "Committee Workplans action group for Board Governance Briefing.",
    "href": "/committee-workplans",
    "sourceProjects": [
      "Risk registers",
      "Financial KPIs"
    ],
    "examples": [
      "Open Committee Workplans",
      "Review Committees",
      "Run Committee Workplans AI check"
    ],
    "count": 3
  },
  {
    "id": "post-meeting-actions",
    "label": "Post-Meeting Actions",
    "description": "Post-Meeting Actions action group for Board Governance Briefing.",
    "href": "/post-meeting-actions",
    "sourceProjects": [
      "Financial KPIs",
      "Cyber reports"
    ],
    "examples": [
      "Open Post-Meeting Actions",
      "Review Execution",
      "Run Post-Meeting Actions AI check"
    ],
    "count": 3
  }
];
