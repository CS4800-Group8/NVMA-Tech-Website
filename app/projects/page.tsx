import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    name: "Food Recipe Web App",
    description:
      "A web application that allows users to browse, search, and share food recipes. Features include recipe categorization, ingredient-based search, and user-contributed content.",
    status: "Cooking..",
    team: ["Gia Minh Hua", "Thu Nguyen", "An Nguyen", "Nicholas Perez", "Viet Tran"],
    image: "/images/project_photo.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-1 flex justify-center py-10">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col md:flex-row shadow-lg">
              {/* Left side: Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:pr-0">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right side: Info */}
              <div className="flex-1 flex flex-col justify-center p-4 md:pl-0">
                <CardHeader className="p-0 pb-2">
                  <CardTitle className="text-xl md:text-2xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-3 text-sm md:text-base">{project.description}</p>
                  <p className="text-sm">
                    <span className="font-semibold">Status:</span> {project.status}
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Team:</span>{" "}
                    {project.team.join(", ")}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}