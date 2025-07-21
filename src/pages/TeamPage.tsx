import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Code,
  Users,
  Target,
} from "lucide-react";

const TeamPage = () => {
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const teamMembers = [
    {
      name: "Sunny Singh",
      position: "CEO & Founder",
      bio: "Visionary leader with 5+ years in tech. passionate about innovation and team empowerment.",
      skills: ["Strategic Planning", "Digital Transformation", "Leadership"],
    },
    {
      name: "Lokesh Kumawat",
      position: "CTO & Co-Founder",
      bio: "Full-stack architect with expertise in cloud computing and AI. Previously lead engineer at Google and AWS.",
      skills: ["Cloud Architecture", "AI/ML", "System Design"],
    },
    {
      name: "Harfool Gurjar",
      position: "MERN Stack Developer",
      bio: "Passionate MERN stack developer with a knack for building dynamic web applications. Former intern at TechSolutions.",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      name: "Mannu kumawat",
      position: "UI/UX Designer",
      bio: "Creative UI/UX designer with a passion for crafting user-friendly interfaces. Former design intern at InnovateX.",
      skills: ["Figma", "Adobe XD", "User Research"],
    },
    {
      name: "Vinod kumawat",
      position: "SEO Specialist & Content Strategist",
      bio: "SEO expert with 2+ years in digital marketing. Proven track record in driving organic traffic and content strategy.",
      skills: ["SEO", "Content Marketing", "Analytics"],
    },
    {
      name: "Rohit kumawat",
      position: "DevOps Engineer",
      bio: "DevOps engineer with expertise in CI/CD pipelines and cloud infrastructure. Formerly at CloudTech.",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
  ];

  const departments = [
    {
      icon: Code,
      title: "Engineering",
      description: "Our development team builds scalable, secure solutions",
      count: "25+ Engineers",
    },
    {
      icon: Users,
      title: "Design",
      description: "Creating beautiful, user-centered experiences",
      count: "8 Designers",
    },
    {
      icon: Target,
      title: "Strategy",
      description: "Business analysts and project managers",
      count: "10 Strategists",
    },
    {
      icon: Award,
      title: "Quality",
      description: "QA engineers ensuring exceptional quality",
      count: "7 QA Engineers",
    },
  ];

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
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Talented professionals dedicated to delivering exceptional results
          </motion.p>
        </div>
      </section> */}

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto bg-gray-700 flex items-center justify-center text-white text-3xl font-bold">
                    {getInitials(member.name)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 mb-6">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized teams working together to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <dept.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {dept.title}
                </h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="text-blue-600 font-semibold">{dept.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-xl text-gray-200 mb-6">
                We believe in fostering a collaborative, innovative, and
                inclusive environment where every team member can thrive and
                contribute to our collective success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Continuous learning and professional development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>
                    Work-life balance and flexible working arrangements
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Innovation time for personal projects</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Diverse and inclusive workplace</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who share our
                passion for technology and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">kotlin Developer</span>
                  <span className="text-blue-600 font-medium">Remote</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">UX Designer</span>
                  <span className="text-blue-600 font-medium">
                    on site
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">SEO Specialist</span>
                  <span className="text-blue-600 font-medium">Remote</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                View All Positions
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
