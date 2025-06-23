import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <Element name="contact">
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
        aria-labelledby="contact-heading"
      >
        <RevealOnScroll>
          <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <h2
              id="contact-heading"
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            >
              Get In Touch
            </h2>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <fieldset className="space-y-6" aria-describedby="form-description">
                <legend className="sr-only">Contact Information</legend>

                <div className="relative">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Name..."
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    aria-label="Your name"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    aria-label="Your email"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    aria-label="Your message"
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                aria-label="Send your message"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>
    </Element>
  );
};
