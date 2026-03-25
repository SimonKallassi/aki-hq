"use client";

import { Task, TaskBoard } from "../types";

interface ColumnProps {
  title: string;
  tasks: Task[];
  color: string;
  dotColor: string;
  badge: string;
}

function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-3 hover:border-gray-600/70 hover:bg-gray-800/80 transition-all duration-200 group">
      <div className="flex items-start justify-between gap-2">
        <p className="text-gray-100 text-sm font-medium leading-snug group-hover:text-white transition-colors">
          {task.title}
        </p>
        <span className="text-lg flex-shrink-0 mt-0.5">{task.emoji}</span>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="text-xs text-gray-400 capitalize font-mono">{task.agent}</span>
      </div>
    </div>
  );
}

function Column({ title, tasks, color, dotColor, badge }: ColumnProps) {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-700/50">
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        <h3 className={`text-sm font-semibold uppercase tracking-widest ${color}`}>
          {title}
        </h3>
        <span className="ml-auto text-xs font-mono bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700">
          {badge}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.length === 0 ? (
          <div className="text-gray-600 text-xs text-center py-4 border border-dashed border-gray-700/50 rounded-lg">
            Empty
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default function MissionControl({ tasks }: { tasks: TaskBoard }) {
  return (
    <section className="flex-1 overflow-auto bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
            <h2 className="text-lg font-bold text-white tracking-tight">Mission Control</h2>
          </div>
          <span className="text-gray-500 text-xs font-mono">
            {tasks.inProgress.length + tasks.backlog.length + tasks.done.length} tasks total
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-500">LIVE</span>
          </div>
        </div>

        {/* Board */}
        <div className="grid grid-cols-3 gap-6">
          <Column
            title="Backlog"
            tasks={tasks.backlog}
            color="text-gray-400"
            dotColor="bg-gray-500"
            badge={`${tasks.backlog.length}`}
          />
          <Column
            title="In Progress"
            tasks={tasks.inProgress}
            color="text-blue-400"
            dotColor="bg-blue-400"
            badge={`${tasks.inProgress.length}`}
          />
          <Column
            title="Done"
            tasks={tasks.done}
            color="text-green-400"
            dotColor="bg-green-400"
            badge={`${tasks.done.length}`}
          />
        </div>
      </div>
    </section>
  );
}
