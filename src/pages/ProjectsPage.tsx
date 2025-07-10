import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  TrendingUp,
  Code,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Globe,
} from "lucide-react";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      category: "web",
      client: "RetailMaster Corp",
      description:
        "Complete redesign and development of a multi-vendor e-commerce platform with advanced analytics and inventory management.",
      image:
        "https://www.bigscal.com/wp-content/uploads/2023/04/Features-that-your-eCommerce-website-must-have-in-2023.png1_.webp",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      duration: "6 months",
      teamSize: "8 developers",
      results: [
        "300% increase in sales",
        "50% reduction in page load time",
        "98% customer satisfaction",
        "Mobile-first responsive design",
      ],
      metrics: {
        performance: "+300%",
        efficiency: "+50%",
        satisfaction: "98%",
      },
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "web",
      client: "MedCare Solutions",
      description:
        "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
      image:
        "https://api.next.otakoyi.software/uploads/1hospital_management_system_316x_fad683347b.png",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      duration: "8 months",
      teamSize: "12 developers",
      results: [
        "Reduced administrative work by 60%",
        "Improved patient satisfaction by 40%",
        "HIPAA compliant security",
        "Real-time appointment scheduling",
      ],
      metrics: {
        performance: "+60%",
        efficiency: "+40%",
        satisfaction: "95%",
      },
      links: {
        live: "#",
      },
    },
    {
      id: 3,
      title: "Financial Trading Mobile App",
      category: "mobile",
      client: "TradeFlow Inc",
      description:
        "Real-time trading application with advanced charting, portfolio management, and secure authentication.",
      image:
        "https://i0.wp.com/www.quytech.com/blog/wp-content/uploads/2024/01/stock-trading-app-development.png?fit=1437%2C871&ssl=1",
      technologies: ["React Native", "Node.js", "Redis", "WebSocket"],
      duration: "4 months",
      teamSize: "6 developers",
      results: [
        "500K+ downloads in first month",
        "Real-time data processing",
        "Bank-level security",
        "Cross-platform compatibility",
      ],
      metrics: {
        performance: "+500K",
        efficiency: "99.9%",
        satisfaction: "4.8/5",
      },
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 4,
      title: "Cloud Infrastructure Migration",
      category: "cloud",
      client: "Enterprise Global Ltd",
      description:
        "Complete migration from on-premises infrastructure to AWS cloud with microservices architecture.",
      image:
        "https://www.akamai.com/site/en/images/blog/2024/cloud-migration-strategy-one.png",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      duration: "5 months",
      teamSize: "10 engineers",
      results: [
        "70% reduction in infrastructure costs",
        "99.99% uptime achieved",
        "Auto-scaling capabilities",
        "Zero-downtime deployment",
      ],
      metrics: {
        performance: "+99.99%",
        efficiency: "+70%",
        satisfaction: "100%",
      },
      links: {
        live: "#",
      },
    },
    {
      id: 5,
      title: "AI-Powered Analytics Dashboard",
      category: "ai",
      client: "DataInsights Pro",
      description:
        "Machine learning powered analytics platform with predictive modeling and real-time data visualization.",
      image:
        "https://www.42signals.com/wp-content/uploads/2025/01/42S-Website-Banner-AI.png",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      duration: "7 months",
      teamSize: "9 developers",
      results: [
        "AI-driven insights improved accuracy by 85%",
        "Real-time data processing",
        "Predictive analytics capabilities",
        "Custom visualization components",
      ],
      metrics: {
        performance: "+85%",
        efficiency: "+60%",
        satisfaction: "97%",
      },
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 6,
      title: "Cybersecurity Monitoring System",
      category: "security",
      client: "SecureNet Industries",
      description:
        "Advanced threat detection and monitoring system with real-time alerts and automated response capabilities.",
      image:
        "https://www.aztechit.co.uk/hs-fs/hubfs/cybersecurity%20monitoring%20process.webp?width=1366&height=768&name=cybersecurity%20monitoring%20process.webp",
      technologies: ["Python", "Elasticsearch", "Kibana", "Docker"],
      duration: "6 months",
      teamSize: "7 security engineers",
      results: [
        "100% threat detection rate",
        "Automated incident response",
        "Compliance with SOC 2",
        "Real-time monitoring dashboard",
      ],
      metrics: {
        performance: "100%",
        efficiency: "+90%",
        satisfaction: "99%",
      },
      links: {
        live: "#",
      },
    },
  ];

  const categories = [
    { key: "all", label: "All Projects", icon: Globe },
    { key: "web", label: "Web Development", icon: Code },
    { key: "mobile", label: "Mobile Apps", icon: Smartphone },
    { key: "cloud", label: "Cloud Solutions", icon: Cloud },
    { key: "ai", label: "AI & Analytics", icon: Database },
    { key: "security", label: "Security", icon: Shield },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-gray-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Showcasing successful transformations and innovative solutions we've
            delivered
          </motion.p>
        </div>
      </section> */}

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-blue-600 font-medium mb-2">
                    {project.client}
                  </p>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.teamSize}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Results:
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        {project.metrics.performance}
                      </div>
                      <div className="text-xs text-gray-500">Performance</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        {project.metrics.efficiency}
                      </div>
                      <div className="text-xs text-gray-500">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        {project.metrics.satisfaction}
                      </div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Project Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures consistent, high-quality
              results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "Deep dive into requirements, goals, and technical specifications",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Design & Architecture",
                description:
                  "Create detailed designs and technical architecture",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Agile development with continuous testing and quality assurance",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "Seamless deployment with ongoing maintenance and support",
                icon: "🚀",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{process.icon}</span>
                </div>
                <div className="text-blue-600 font-bold text-lg mb-2">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can bring your vision to life with our proven
              expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                View More Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
