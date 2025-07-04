import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import CV_ENGLISH from "../../assets/CV-TRISTAN-ENGLISH.pdf";
import CV_SPANISH from "../../assets/CV-TRISTAN-ESPAÑOL.pdf";
import { Element, Link } from "react-scroll";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen((prev) => !prev);
  const closeDropdown = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Element name="home">
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
        aria-labelledby="hero-heading"
      >
        <RevealOnScroll>
          <header className="text-center z-10 px-4" role="banner">
            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right"
            >
              Hi, I'm Tristan Tico
            </h1>

            <h2 className="sr-only">
              Portafolio profesional de Tristán Tico, desarrollador web
            </h2>

            <article>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a web developer with a strong passion for technology and
                functional design. I enjoy creating websites and applications
                that not only look great but also provide a smooth user
                experience. I take pleasure in every step of the process from
                the initial idea to seeing the finished project come to life. In
                this portfolio, you'll find some of the work I've done, where I
                combine creativity, logic, and attention to detail to build
                effective web solutions.
              </p>
            </article>

            <nav
              className="flex justify-center space-x-4"
              aria-label="Main actions"
            >
              <Link
                to="contact"
                title="Ir a la sección de contacto"
                smooth={true}
                duration={800}
                offset={-80}
                rel="noopener"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </Link>

              <Link
                to="projects"
                title="Ver mis proyectos"
                smooth={true}
                duration={800}
                offset={-80}
                rel="noopener"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={open}
                  aria-controls="cv-dropdown"
                  title="Descargar currículum"
                  className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                >
                  Download CV
                </button>

                {open && (
                  <div
                    id="cv-dropdown"
                    role="menu"
                    aria-label="Opciones de descarga de CV"
                    className="absolute mt-2 bg-white shadow-lg rounded border border-blue-200 z-50 w-full"
                  >
                    <a
                      href={CV_SPANISH}
                      download
                      onClick={closeDropdown}
                      title="Descargar CV en Español"
                      className="block px-4 py-2 text-blue-500 hover:bg-blue-50 text-sm"
                    >
                      Spanish
                    </a>
                    <a
                      href={CV_ENGLISH}
                      download
                      onClick={closeDropdown}
                      title="Download CV in English"
                      className="block px-4 py-2 text-blue-500 hover:bg-blue-50 text-sm"
                    >
                      English
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </header>
        </RevealOnScroll>
      </section>
    </Element>
  );
};
