import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Users,
  Settings,
  BarChart3,
  Globe,
  Zap,
  Monitor,
  Headphones,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and technologies",
      features: [
        "React, Angular, Vue.js",
        "Node.js, Python, PHP",
        "Responsive Design",
        "E-commerce Solutions",
      ],
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native, Flutter",
        "Native iOS/Android",
        "UI/UX Design",
        "App Store Optimization",
      ],
      color: "purple",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "AWS, Azure, Google Cloud",
        "Cloud Migration",
        "DevOps & CI/CD",
        "Microservices Architecture",
      ],
      color: "green",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and consulting services",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
      ],
      color: "red",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Machine Learning",
        "Big Data Processing",
      ],
      color: "yellow",
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description:
        "Complete digital transformation consulting and implementation",
      features: [
        "Strategy Development",
        "Process Automation",
        "Change Management",
        "Technology Roadmap",
      ],
      color: "indigo",
    },
    {
      icon: Settings,
      title: "API Development",
      description: "Custom APIs and third-party integrations",
      features: [
        "RESTful APIs",
        "GraphQL",
        "Microservices",
        "Third-party Integrations",
      ],
      color: "teal",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting solutions",
      features: [
        "Custom Dashboards",
        "Real-time Analytics",
        "Performance Metrics",
        "Predictive Analytics",
      ],
      color: "orange",
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms and marketplace integrations",
      features: [
        "Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Multi-channel Selling",
      ],
      color: "pink",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your applications for speed and scalability",
      features: [
        "Code Optimization",
        "Database Tuning",
        "Caching Strategies",
        "Load Testing",
      ],
      color: "cyan",
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "User-centered design for exceptional digital experiences",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
      color: "violet",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "24/7 technical support and maintenance services",
      features: [
        "24/7 Support",
        "System Monitoring",
        "Regular Updates",
        "Performance Monitoring",
      ],
      color: "slate",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200",
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      yellow: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
      indigo: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
      teal: "bg-teal-100 text-teal-600 hover:bg-teal-200",
      orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
      pink: "bg-pink-100 text-pink-600 hover:bg-pink-200",
      cyan: "bg-cyan-100 text-cyan-600 hover:bg-cyan-200",
      violet: "bg-violet-100 text-violet-600 hover:bg-violet-200",
      slate: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="pt-16">

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology
              solutions that drive growth and innovation for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(
                    service.color
                  )}`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your business needs and technical requirements",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed project planning and technology stack selection",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Agile development with regular updates and feedback",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Seamless deployment and ongoing support",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
