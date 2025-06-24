import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  return (
    <footer
      className="text-center mt-12 mb-5"
      role="contentinfo"
      aria-label="Footer"
    >
      <RevealOnScroll>
        <p className="text-sm text-gray-400">
          Diseñado & Desarrollado por <strong>Tristan López</strong> — 2024
        </p>
        <nav
          className="my-2 flex items-center justify-center"
          aria-label="Social media"
        >
          <a
            href="https://github.com/TristanTico"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
            aria-label="Visit my GitHub profile"
            title="GitHub"
          >
            <FaGithub className="text-xl text-white hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/josue-lopez-63210a293/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
            aria-label="Visit my LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin className="text-xl text-white hover:text-blue-400 transition-colors" />
          </a>
        </nav>
      </RevealOnScroll>
    </footer>
  );
};
