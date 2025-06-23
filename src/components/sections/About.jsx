import { Element } from "react-scroll";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Ionic",
    "Bootstrap",
    "Tailwind",
    "Material UI",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "NestJS",
    "Laravel",
    ".NET",
    "PHP",
    "MySQL",
    "Microsoft SQL Server",
    "MongoDB",
    "SQL",
    "Sequelize",
    "Prisma",
  ];

  return (
    <Element name="about">
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        aria-labelledby="about-heading"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            {/* Título principal de sección */}
            <h2
              id="about-heading"
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            >
              About Me
            </h2>

            {/* Descripción personal */}
            <article className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
              </p>

              {/* Habilidades técnicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section
                  aria-labelledby="frontend-skills"
                  className="rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h3
                    id="frontend-skills"
                    className="text-xl font-bold mb-4"
                  >
                    Frontend
                  </h3>
                  <ul className="flex flex-wrap gap-2" aria-label="Frontend Skills">
                    {frontendSkills.map((skill, key) => (
                      <li key={key}>
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section
                  aria-labelledby="backend-skills"
                  className="rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h3
                    id="backend-skills"
                    className="text-xl font-bold mb-4"
                  >
                    Backend
                  </h3>
                  <ul className="flex flex-wrap gap-2" aria-label="Backend Skills">
                    {backendSkills.map((skill, key) => (
                      <li key={key}>
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>

            {/* Educación y experiencia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Educación */}
              <section
                aria-labelledby="education-heading"
                className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
              >
                <h3 id="education-heading" className="text-xl font-bold mb-4">
                  🏫 Education
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Bachelor’s in Business Informatics</strong> – University of Costa Rica (2021–2025)
                  </li>
                  <li>
                    <strong>Scrum Fundamentals Certified</strong> – Scrum Study (2024)
                  </li>
                </ul>
              </section>

              {/* Experiencia laboral */}
              <section
                aria-labelledby="experience-heading"
                className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
              >
                <h3 id="experience-heading" className="text-xl font-bold mb-4">
                  💼 Work Experience
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-bold">
                      Intern at the Municipality of the Canton of Limón<br />
                      <span className="text-sm font-normal">(Nov 2024 – Feb 2025)</span>
                    </h4>
                    <p>
                      I developed a project to digitize procedures that were previously done on paper, creating a system that optimizes management and facilitates access to information.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </Element>
  );
};
