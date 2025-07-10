import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Users,
  Star,
  CheckCircle,
  Trophy,
} from "lucide-react";
import image from "../img/image.png";

declare module "*.png";

const HomePage = () => {

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-gray-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight"
          >
            Work It Solution – A team of intelligent & creative people
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            At Work It Solution, we believe that innovation comes from the blend
            of intelligence and creativity. Our team is made up of experts who
            are not only highly skilled but also passionate about pushing
            boundaries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              What Solutions We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Powerful digital marketing, SEO & backlinks, and design &
              development services to help your business grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group text-center"
            >
              <div className="bg-gray-50 rounded-2xl p-8 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <Code className="h-8 w-8 text-gray-700 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Digital Marketing
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We specialize in crafting powerful digital marketing strategies
                that drive results and boost your brand's online presence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group text-center"
            >
              <div className="bg-gray-50 rounded-2xl p-8 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <Star className="h-8 w-8 text-gray-700 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                SEO & Backlinks
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                On-Page SEO, optimizing your website’s content, structure, and
                keywords for better reach and higher rankings.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group text-center"
            >
              <div className="bg-gray-50 rounded-2xl p-8 mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-gray-700 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Design & Development
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Crafting beautiful, responsive, and modern web designs that
                engage your audience and deliver results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Trusted Digital Solution Provider – 6 Years of Excellence. We’ve
              been delivering innovative digital solutions for over 6 years. Our
              team is passionate about turning ideas into impactful
              results—whether it's website development, design, or digital
              strategy. We don’t just build solutions; we build long-term
              relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Trophy className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                6 Years Experience
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Delivering innovative digital solutions and building long-term
                relationships with our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Users className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                21 Team Members
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                A passionate team of experts dedicated to your success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                1226 Satisfied Clients
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We focus on quality, creativity, and customer satisfaction to
                help businesses grow in the digital space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
                Featured Project
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                RS-CIT Online Learning Platform
              </h3>
              <p className="text-lg mb-8 text-gray-300 font-light leading-relaxed">
                We developed a modern, user-friendly online learning platform
                for RS-CIT, enabling thousands of students to access digital
                literacy courses, track progress, and earn certifications
                online. The platform features interactive lessons, quizzes, and
                a robust admin dashboard for seamless management.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-light">
                  React
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-light">
                  Tailwind CSS
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-light">
                  Node.js
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-light">
                  MongoDB
                </span>
              </div>
              <Link
                to="https://sbc-dusky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Visit RS-CIT Website <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-3xl shadow-2xl"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-8 flex items-center justify-center">
                <img
                  src={image}
                  alt="RS-CIT Screenshot"
                  className="max-h-60 rounded-xl shadow-md object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-6 text-gray-900">
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600 font-light">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900">4.8/5</div>
                  <div className="text-sm text-gray-600 font-light">
                    User Rating
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
