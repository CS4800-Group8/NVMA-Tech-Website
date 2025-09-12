import LogCard from "@/components/log-card";
import { logs } from "@/lib/data";

export default function LogsPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Project Logs</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
        Tracking our progress, meetings, and milestones
      </p>

      <div className="space-y-4">
        {logs.map((log) => (
          <LogCard key={log.id} log={log} />
        ))}
      </div>
    </section>
  );
}
