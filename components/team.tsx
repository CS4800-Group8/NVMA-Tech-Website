import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg mb-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Our Team
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Meet the people behind NVMA Tech
      </p>

      <div className="space-y-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200"
          >
            {/* Profile Picture */}
            <div className="md:w-1/3 flex justify-center">
              <div
                className={`w-40 h-40 ${member.bgColor} rounded-full border-4 flex items-center justify-center text-2xl font-bold ${member.textColor}`}
              >
                {member.initials}
              </div>
            </div>

            {/* Info */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className={`${member.textColor} font-medium mb-4`}>
                {member.role}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  About
                </h4>
                <p className="text-gray-600">{member.about}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`${member.bgColor} ${member.textColor} px-3 py-1 rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
