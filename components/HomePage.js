
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1a1f2c] text-white font-sans">
      <header className="text-center py-12">
        <div className="flex justify-center mb-4">
          <div className="bg-white p-3 rounded-full shadow-xl">
            <Image
              src="/logo-ajpixelsolutions.png"
              alt="AJPixelSolutions Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          AJPixelSolutions
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mt-4">
          Professional software developers simplifying your life with cutting-edge, intuitive, and scalable digital solutions.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mb-20">
        {[
          {
            title: "Custom Development",
            content: "Robust, scalable, and clean solutions tailored to your business needs."
          },
          {
            title: "Modern UI/UX",
            content: "Engaging, accessible, and responsive interfaces for all platforms."
          },
          {
            title: "Cloud & Backend",
            content: "Secure, reliable, and optimized backend systems and cloud services."
          },
          {
            title: "Ongoing Support",
            content: "Dedicated support and maintenance for seamless user experience."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-6 rounded-2xl hover:scale-[1.03] transition-transform duration-300">
              <CardContent>
                <h2 className="text-xl font-semibold text-cyan-300 mb-2">{feature.title}</h2>
                <p className="text-gray-300 text-sm">{feature.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-white/20 mb-24">
        <h3 className="text-3xl font-bold text-center text-blue-300 mb-6">Why Choose Us</h3>
        <ul className="text-gray-200 space-y-3 px-4 list-disc">
          <li>Experienced team with a passion for excellence</li>
          <li>Agile methodology and transparent workflows</li>
          <li>Continuous delivery and scalable architecture</li>
          <li>Focus on security, performance, and user satisfaction</li>
        </ul>
      </section>

      <section className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/contact">
            <Button className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </section>

      <footer className="text-center text-sm text-gray-500 mb-10">
        © {new Date().getFullYear()} AJPixelSolutions — Futuristic Software with a Human Touch.
      </footer>
    </div>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] p-10 text-white">
      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-4">Contact AJPixelSolutions</h1>
      <p className="text-lg text-gray-300 text-center mb-8">
        We'd love to hear from you. Fill out the form below or reach us at:
        <br />
        <a href="mailto:AJpixelsolutions@gmail.com" className="text-cyan-400 underline">AJpixelsolutions@gmail.com</a>
      </p>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 rounded-xl">
            Send Message
          </Button>
        </form>
      ) : (
        <div className="text-center mt-10 text-green-400 text-xl">
          Thank you! Your message has been received. We’ll get back to you soon.
        </div>
      )}
    </div>
  );
}
