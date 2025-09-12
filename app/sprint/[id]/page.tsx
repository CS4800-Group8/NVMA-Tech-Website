import { logs } from "@/lib/data";

export default function SprintPage({ params }: { params: { id: string } }) {
  const sprint = logs.find((log) => log.id === params.id);

  if (!sprint) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-600">Sprint not found</h1>
        <p className="text-gray-600 mt-2">
          The sprint you’re looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{sprint.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{sprint.date}</p>
      <p className="text-lg text-gray-700">{sprint.desc}</p>

      <div className="mt-10 p-6 bg-slate-50 rounded-lg border">
        <h2 className="text-2xl font-semibold mb-3">Meeting Notes</h2>
        <p className="text-gray-600">
          (You can expand this section later to include detailed sprint notes,
          decisions, or action items.)
        </p>
      </div>
    </section>
  );
}
