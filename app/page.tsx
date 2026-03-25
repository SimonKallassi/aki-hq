import { TaskBoard } from "./types";
import PixelOffice from "./components/PixelOffice";
import MissionControl from "./components/MissionControl";

async function getTasks(): Promise<TaskBoard> {
  // In production, this would be an API call
  // For now, read from static JSON
  const res = await fetch(
    process.env.NODE_ENV === "production"
      ? "https://aki-hq.vercel.app/tasks.json"
      : "http://localhost:3000/tasks.json",
    { cache: "no-store" }
  );
  if (!res.ok) {
    return { inProgress: [], backlog: [], done: [] };
  }
  return res.json();
}

export default async function HomePage() {
  let tasks: TaskBoard;
  try {
    tasks = await getTasks();
  } catch {
    tasks = { inProgress: [], backlog: [], done: [] };
  }

  return (
    <div className="flex flex-col h-screen bg-gray-950 overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center gap-3 px-6 py-3 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 flex-shrink-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧞</span>
          <span className="text-white font-bold tracking-tight">Aki Industries</span>
          <span className="text-gray-500 font-mono text-sm">HQ</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-xs text-gray-500 font-mono hidden sm:block">
            {tasks.inProgress.length} active · {tasks.backlog.length} queued · {tasks.done.length} shipped
          </span>
          <div className="flex items-center gap-1.5 bg-gray-800/60 rounded-full px-3 py-1.5 border border-gray-700/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-300 font-mono">SYSTEMS ONLINE</span>
          </div>
        </div>
      </header>

      {/* Pixel Office (top ~40%) */}
      <div className="flex-shrink-0 border-b border-gray-800">
        <PixelOffice inProgressTasks={tasks.inProgress} />
      </div>

      {/* Mission Control (bottom ~60%) */}
      <div className="flex-1 overflow-auto">
        <MissionControl tasks={tasks} />
      </div>
    </div>
  );
}
