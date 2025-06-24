import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
export const Footer = () => {
  return (
    <footer className="text-center mt-12 mb-5">
      <RevealOnScroll>
        <p>Diseñado & Desarrollado por Tristan López - 2024</p>
        <div className="my-2 flex items-center justify-center">
          <a
            href="https://github.com/TristanTico"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/josue-lopez-63210a293/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaLinkedin />
          </a>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
