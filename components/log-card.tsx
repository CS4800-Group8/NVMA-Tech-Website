"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function LogCard({ log }: { log: any }) {
  const router = useRouter();

  return (
    <Card
      className="cursor-pointer hover:bg-slate-50 transition"
      onClick={() => router.push(`/sprint/${log.id}`)}
    >
      <CardHeader>
        <CardTitle>{log.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{log.desc}</p>
        <p className="text-sm text-gray-500 mt-2">{log.date}</p>
      </CardContent>
    </Card>
  );
}
