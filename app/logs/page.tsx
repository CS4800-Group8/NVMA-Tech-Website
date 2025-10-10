"use client";

import LogCard from "@/components/log-card";
import { useState } from "react"; 
import { logs } from "@/lib/data";

export default function LogsPage() {
  const [expanded, setExpanded] = useState(false);

  const displayedLogs = expanded ? logs : logs.slice(0, 3);

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Project Logs</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
        Tracking our progress, meetings, and milestones
      </p>

      <div className="space-y-4">
        {displayedLogs.map((log) => (
          <LogCard key={log.id} log={log} />
        ))}
      </div>

      {logs.length > 3 && (
        <div className="text-center mt-6">
          <button 
          onClick={() => setExpanded(!expanded)}
          className="border px-6 py-2 bg-white rounded-md shadow-sm cursor-pointer hover:bg-slate-50 transition"
          >
            {expanded ? "Show Less": "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
