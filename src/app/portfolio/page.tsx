"use client"; // Required for useState

import Head from "next/Head";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>John Doe | Portfolio</title>
        <meta name="description" content="A professional portfolio showcasing my work and skills." />
      </Head>

      {/* Header */}
      <header className="sticky top-0 bg-gray-800 shadow-md z-10">
        <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <div className="space-x-6">
            <Link href="#about" className="hover:text-orange-500">About</Link>
            <Link href="#projects" className="hover:text-orange-500">Projects</Link>
            <Link href="#skills" className="hover:text-orange-500">Skills</Link>
            <Link href="#contact" className="hover:text-orange-500">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          A passionate <span className="text-orange-500">Web Developer</span> creating impactful solutions.
        </p>
        <Link
          href="#projects"
          className="bg-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          View My Work
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a web developer with over 5 years of experience, specializing in front-end development with React and Next.js.
          I love turning ideas into reality through clean, efficient code and beautiful design. When I’m not coding,
          you’ll find me exploring new tech trends or sipping coffee at my favorite café.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-400 mb-4">
                A fully responsive online store built with Next.js and Tailwind CSS.
              </p>
              <Link href="#" className="text-orange-500 hover:underline">View Project</Link>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Task Manager App</h3>
              <p className="text-gray-400 mb-4">
                A productivity tool with real-time updates using React and Firebase.
              </p>
              <Link href="#" className="text-orange-500 hover:underline">View Project</Link>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-red-500 to-orange-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Portfolio Generator</h3>
              <p className="text-gray-400 mb-4">
                A customizable portfolio builder created with PortfolioMaker.
              </p>
              <Link href="#" className="text-orange-500 hover:underline">View Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "Node.js", "MongoDB", "Git"].map((skill) => (
            <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-black px-6 py-3 rounded font-semibold hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center bg-gray-900 border-t border-gray-700">
        <p className="text-gray-400">
          © 2025 John Doe. Built with{" "}
          <Link href="/" className="text-orange-500 hover:underline">PortfolioMaker</Link>.
        </p>
      </footer>
    </div>
  );
}