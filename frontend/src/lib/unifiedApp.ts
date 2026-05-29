import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["Risk registers","Financial KPIs","Cyber reports","AI governance logs"];

const features = [
  {
    slug: "board-packet-builder",
    title: "Board Packet Builder",
    href: "/board-packet-builder",
    category: "Briefing",
    icon: Bot,
    summary: "Agenda, packet sections, source documents, approvals, and final delivery status.",
    bullets: ["Board Packet Builder queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Board Packet Builder", value: "24", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "cyber-risk-brief",
    title: "Cyber Risk Brief",
    href: "/cyber-risk-brief",
    category: "Cyber",
    icon: Workflow,
    summary: "Security posture, incidents, control gaps, material risks, and board-level decisions.",
    bullets: ["Cyber Risk Brief queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Cyber Risk Brief", value: "33", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "ai-risk-brief",
    title: "AI Risk Brief",
    href: "/ai-risk-brief",
    category: "AI Governance",
    icon: Users,
    summary: "AI systems, agent risk, model incidents, policies, and governance recommendations.",
    bullets: ["AI Risk Brief queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "AI Risk Brief", value: "42", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "financial-exposure",
    title: "Financial Exposure",
    href: "/financial-exposure",
    category: "Finance",
    icon: CalendarCheck,
    summary: "Revenue risk, spend pressure, forecasts, variance, and decision points.",
    bullets: ["Financial Exposure queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Financial Exposure", value: "51", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "regulatory-update",
    title: "Regulatory Update",
    href: "/regulatory-update",
    category: "Regulatory",
    icon: ClipboardList,
    summary: "New obligations, enforcement timelines, exposure, and executive actions.",
    bullets: ["Regulatory Update queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Regulatory Update", value: "60", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "operations-kpi-story",
    title: "Operations KPI Story",
    href: "/operations-kpi-story",
    category: "Operations",
    icon: FileText,
    summary: "KPI movement, root causes, hotspots, owners, and operating priorities.",
    bullets: ["Operations KPI Story queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Operations KPI Story", value: "69", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "decision-log",
    title: "Decision Log",
    href: "/decision-log",
    category: "Governance",
    icon: BarChart3,
    summary: "Board decisions, open questions, required follow-ups, owners, and due dates.",
    bullets: ["Decision Log queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Decision Log", value: "78", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "director-qa-prep",
    title: "Director Q&A Prep",
    href: "/director-qa-prep",
    category: "Briefing",
    icon: PackageCheck,
    summary: "Likely questions, supporting data, risk framing, and executive talking points.",
    bullets: ["Director Q&A Prep queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Director Q&A Prep", value: "87", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "committee-workplans",
    title: "Committee Workplans",
    href: "/committee-workplans",
    category: "Committees",
    icon: ShieldCheck,
    summary: "Audit, risk, compensation, cyber, and AI committee tasks and materials.",
    bullets: ["Committee Workplans queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Committee Workplans", value: "96", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "post-meeting-actions",
    title: "Post-Meeting Actions",
    href: "/post-meeting-actions",
    category: "Execution",
    icon: Activity,
    summary: "Action items, owners, deadlines, evidence, and completion tracking.",
    bullets: ["Post-Meeting Actions queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Post-Meeting Actions", value: "105", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "Board Governance Briefing documents, evidence, attachments, and exports.",
    bullets: ["Documents","Controls","Audit trail"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "Board Governance Briefing alerts, reminders, exceptions, and approvals.",
    bullets: ["Notifications","Controls","Audit trail"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "Board Governance Briefing connector health, sync status, and integration warnings.",
    bullets: ["Integrations","Controls","Audit trail"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "Board Governance Briefing users, roles, teams, permissions, and ownership settings.",
    bullets: ["Profiles","Controls","Audit trail"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "Board Governance Briefing assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Board Governance Briefing AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  {
    "name": "Briefing",
    "features": [
      "Board Packet Builder",
      "Director Q&A Prep"
    ]
  },
  {
    "name": "Cyber",
    "features": [
      "Cyber Risk Brief"
    ]
  },
  {
    "name": "AI Governance",
    "features": [
      "AI Risk Brief"
    ]
  },
  {
    "name": "Finance",
    "features": [
      "Financial Exposure"
    ]
  },
  {
    "name": "Regulatory",
    "features": [
      "Regulatory Update"
    ]
  },
  {
    "name": "Operations",
    "features": [
      "Operations KPI Story"
    ]
  },
  {
    "name": "Governance",
    "features": [
      "Decision Log"
    ]
  },
  {
    "name": "Committees",
    "features": [
      "Committee Workplans"
    ]
  },
  {
    "name": "Execution",
    "features": [
      "Post-Meeting Actions"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is implemented as a dedicated Board Governance Briefing workflow with records, AI assistance, approvals, audit, and reporting.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners,
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
