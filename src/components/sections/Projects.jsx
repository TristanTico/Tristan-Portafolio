import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import SISTEMA_EXPERTO from "../../assets/images/sistemaExperto.png";
import SGT from "../../assets/images/SGT.PNG";
import SGI from "../../assets/images/SGI.PNG";
import PORTAFOLIO from "../../assets/images/portafolio.PNG";
import TIENDA from "../../assets/images/Tienda.PNG";
import { Element } from "react-scroll";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Procedure Management System",
      description:
        "The system digitizes processes, enabling creation, assignment to reviewers, and approval or rejection. It supports process re-entry for corrections, automatic assignment based on workload, and document uploads. It also provides visualizations of process data, response times, and user performance, with secure login for authorized access.",
      technologies: [
        "React",
        "Material UI",
        "Node.js",
        "Express",
        "MySQL",
        "Sequilize",
        "JWT",
      ],
      image: SGT,
    },
    {
      id: 2,
      title: "Incident Management System",
      description:
        "The system allows users to register, assign, and track incidents, enabling technicians to efficiently diagnose and resolve issues, with secure access for authorized personnel.",
      technologies: [
        "React",
        "Ionic",
        "Node.js",
        "Express",
        "MySQL",
        "Prisma",
        "JWT",
      ],
      image: SGI,
      repoLink: "https://github.com/TristanTico/GestionIncidentesFrontend",
    },
    {
      id: 3,
      title: "TicoTechnologys",
      description:
        "An online store was developed with a category and subcategory system to facilitate navigation. Users could register, browse products, add items to the cart, place orders, and track their purchases from their profile.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "Zustand",
        "TypeScript",
        "Node.js",
        "NestJS",
        "MySQL",
        "Sequilize",
        "JWT",
      ],
      image: TIENDA,
      repoLink: "https://github.com/TristanTico/TicoTechnology",
    },
    {
      id: 4,
      title: "Tourist Recommendation System",
      description:
        "A web app designed to help you discover top tourist destinations whether you're into paradise beaches, vibrant cities, or stunning mountains. It offers personalized travel recommendations based on detailed data and user reviews.",
      technologies: ["Laravel", "Bootstrap", "MySQL"],
      image: SISTEMA_EXPERTO,
      repoLink: "https://github.com/TristanTico/sistemaExpertoRecomendaciones",
    },
    {
      id: 5,
      title: "Web Portfolio",
      description:
        "Personal portfolio, an interactive and visual showcase of my skills, projects, and experience.",
      technologies: ["React", "Tailwind CSS", "EmailJS", "Framer Motion"],
      image: PORTAFOLIO,
      repoLink: "https://github.com/TristanTico/Tristan-Portafolio",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Element name="projects">
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
        aria-labelledby="projects-heading"
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="projects-heading"
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            >
              Projects
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              role="list"
              aria-label="List of projects"
            >
              {projects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  className="group backdrop-blur-lg bg-white/10 rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  role="listitem"
                  aria-labelledby={`project-${project.id}-title`}
                >
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <h3
                    id={`project-${project.id}-title`}
                    className="text-2xl font-bold text-white mb-3"
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      aria-label={`View source code for ${project.title}`}
                    >
                      View Code <FiExternalLink className="text-lg" />
                    </a>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </div>
        </RevealOnScroll>
      </section>
    </Element>
  );
};
