import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  Calendar,
} from "lucide-react";

const AboutPage = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started with a vision to transform businesses through technology",
    },
    {
      year: "2019",
      title: "First Major Contract",
      description:
        "Secured our first enterprise client and delivered exceptional results",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 25+ skilled professionals",
    },
    {
      year: "2021",
      title: "Cloud Certification",
      description: "Became certified AWS and Azure partners",
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Extended services to clients across 15 countries",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: 'Received "Best Tech Solutions Provider" award',
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: Globe,
      number: "15",
      label: "Countries Served",
    },
    {
      icon: TrendingUp,
      number: "1000+",
      label: "Projects Completed",
    },
    {
      icon: Award,
      number: "10+",
      label: "Industry Awards",
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Certified",
    "Google Cloud Platform Partner",
    "Salesforce Certified Partner",
    "ISO 27001 Security Certified",
    "PMI Project Management",
  ];

  return (
    <div className="pt-16 ">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-gray-100 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mt-[45px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow"
          >
            Empowering businesses worldwide with innovative technology solutions
            since 2018
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We help you grow, adapt, and succeed in the digital era.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 p-8 rounded-xl"
            >
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700">
                To transform businesses through innovative technology solutions
                that drive growth, efficiency, and success. We believe in
                creating lasting partnerships with our clients and delivering
                exceptional value through cutting-edge technology and
                unparalleled expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-purple-50 p-8 rounded-xl"
            >
              <Eye className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700">
                To be the global leader in technology consulting and solutions,
                known for our innovation, reliability, and commitment to client
                success. We envision a future where technology seamlessly
                integrates with business operations to create unprecedented
                opportunities for growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2018 by a team of passionate technologists, WorkIT
              Solutions emerged from a simple belief: that technology should
              empower businesses, not complicate them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <p className="text-lg text-gray-700 mb-6">
              What started as a small consulting firm has grown into a
              comprehensive technology solutions provider, serving clients
              across 15 countries. Our journey has been marked by continuous
              innovation, unwavering commitment to quality, and a relentless
              focus on client success.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Today, we're proud to be a trusted partner for businesses of all
              sizes, from startups to Fortune 500 companies. Our team of 50+
              experts brings together diverse backgrounds and deep expertise in
              cutting-edge technologies.
            </p>
            <p className="text-lg text-gray-700">
              As we look to the future, we remain committed to pushing the
              boundaries of what's possible with technology, always with our
              clients' success as our primary goal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-blue-600">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-200">
              Numbers that speak to our success and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <achievement.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-200">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Our expertise is validated by industry-leading certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
