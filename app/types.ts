export interface Task {
  id: number;
  title: string;
  agent: string;
  emoji: string;
}

export interface TaskBoard {
  inProgress: Task[];
  backlog: Task[];
  done: Task[];
}

export interface Agent {
  id: string;
  name: string;
  emoji: string;
  role: string;
  color: string;
  deskRow: number;
  deskCol: number;
}

export const AGENTS: Agent[] = [
  { id: "aki",     name: "Aki",     emoji: "🧞",  role: "CEO / Orchestrator", color: "#7C3AED", deskRow: 0, deskCol: 0 },
  { id: "ghabash", name: "Ghabash", emoji: "🛠️", role: "Engineering",         color: "#2563EB", deskRow: 0, deskCol: 1 },
  { id: "basma",   name: "Basma",   emoji: "📋",  role: "Operations",          color: "#059669", deskRow: 0, deskCol: 2 },
  { id: "nader",   name: "Nader",   emoji: "🔎",  role: "Research",            color: "#D97706", deskRow: 0, deskCol: 3 },
  { id: "layla",   name: "Layla",   emoji: "✍️",  role: "Growth & Content",    color: "#DB2777", deskRow: 0, deskCol: 4 },
  { id: "rami",    name: "Rami",    emoji: "🕸️", role: "Data & Scraping",     color: "#0891B2", deskRow: 1, deskCol: 0 },
  { id: "mira",    name: "Mira",    emoji: "🎬",  role: "Media & Creative",    color: "#9333EA", deskRow: 1, deskCol: 1 },
  { id: "omar",    name: "Omar",    emoji: "📈",  role: "Sales Systems",       color: "#16A34A", deskRow: 1, deskCol: 2 },
  { id: "dina",    name: "Dina",    emoji: "🧭",  role: "Process & SOPs",      color: "#EA580C", deskRow: 1, deskCol: 3 },
  { id: "sami",    name: "Sami",    emoji: "🛡️", role: "QA / Audit",          color: "#DC2626", deskRow: 1, deskCol: 4 },
  { id: "noor",    name: "Noor",    emoji: "⚙️",  role: "Automation",          color: "#6366F1", deskRow: 1, deskCol: 5 },
];
