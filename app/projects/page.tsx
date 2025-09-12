import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    name: "Food Recipe Web App",
    description:
      "A web application that allows users to browse, search, and share food recipes. Features include recipe categorization, ingredient-based search, and user-contributed content.",
    status: "In Progress",
    team: ["Gia Minh Hua", "Thu Nguyen", "An Nguyen", "Nicholas Perez", "Viet Tran"],
    image: "/images/food-recipe-demo.png", // make sure you place an image in public/images/
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col md:flex-row shadow-lg">
            {/* Left side: Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>

            {/* Right side: Info */}
            <div className="flex-1">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{project.description}</p>
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
    </div>
  );
}
