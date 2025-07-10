import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Building, Users, TrendingUp, Award } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Industries",
      image:
        "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
      rating: 5,
      quote:
        "WorkIT Solutions transformed our business completely. Their expertise and dedication resulted in a 400% increase in our online engagement and streamlined our operations beyond our expectations.",
      results: [
        "400% increase in online engagement",
        "Streamlined operations",
        "Improved customer satisfaction",
      ],
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "InnovateTech",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
      rating: 5,
      quote:
        "The cloud migration project was executed flawlessly. Our system performance improved by 300% and we reduced operational costs by 60%. Their team's expertise in cloud architecture is unmatched.",
      results: [
        "300% performance improvement",
        "60% cost reduction",
        "Zero downtime migration",
      ],
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Operations",
      company: "GlobalCommerce",
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
      rating: 5,
      quote:
        "Our e-commerce platform redesign exceeded all expectations. Sales increased by 250% within the first quarter, and customer retention improved significantly.",
      results: [
        "250% sales increase",
        "Higher customer retention",
        "Mobile-first design",
      ],
    },
    {
      name: "David Thompson",
      position: "Founder",
      company: "StartupFlow",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
      rating: 5,
      quote:
        "As a startup, we needed a reliable technology partner. WorkIT Solutions delivered a robust, scalable platform that grew with our business. Their ongoing support has been invaluable.",
      results: [
        "Scalable platform",
        "Reliable support",
        "Cost-effective solution",
      ],
    },
    {
      name: "Jessica Kim",
      position: "VP of Technology",
      company: "DataDriven Corp",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
      rating: 5,
      quote:
        "Their data analytics solution provided insights we never had before. We can now make data-driven decisions that have improved our efficiency by 40% and reduced costs significantly.",
      results: [
        "40% efficiency improvement",
        "Data-driven decisions",
        "Cost reduction",
      ],
    },
    {
      name: "Robert Wilson",
      position: "IT Director",
      company: "SecureBank",
      image:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
      rating: 5,
      quote:
        "Security was our top concern, and WorkIT Solutions delivered a comprehensive cybersecurity solution. We haven't had a single security incident since implementation.",
      results: [
        "Zero security incidents",
        "Comprehensive protection",
        "Compliance achieved",
      ],
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Businesses trust us with their technology needs",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high ratings across all projects",
    },
    {
      icon: Award,
      number: "250%",
      label: "Average ROI",
      description: "Return on investment for our clients",
    },
    {
      icon: Building,
      number: "15",
      label: "Countries Served",
      description: "Global reach and local expertise",
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
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Real stories from real clients who have transformed their businesses
            with our solutions
          </motion.p>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've
              helped transform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-blue-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 text-lg italic pl-6">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Results:
                  </h4>
                  <ul className="space-y-1">
                    {testimonial.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Featured Success Story
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                Enterprise Digital Transformation
              </h3>
              <p className="text-lg mb-6 text-gray-200">
                A Fortune 500 manufacturing company approached us with outdated
                systems and manual processes. We implemented a comprehensive
                digital transformation that modernized their entire operation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">75%</div>
                  <div className="text-sm text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">500%</div>
                  <div className="text-sm text-gray-300">Efficiency Gain</div>
                </div>
              </div>
              <blockquote className="text-lg italic text-gray-200 border-l-4 border-blue-400 pl-4">
                "This transformation saved us millions and positioned us for
                future growth. WorkIT Solutions didn't just deliver a solution -
                they delivered a competitive advantage."
              </blockquote>
              <div className="mt-4">
                <div className="font-semibold">James Patterson</div>
                <div className="text-gray-300">Chief Operations Officer</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Phase 1: Assessment
                    </div>
                    <div className="text-sm text-gray-600">
                      2 weeks - System analysis and planning
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Phase 2: Development
                    </div>
                    <div className="text-sm text-gray-600">
                      8 weeks - Custom solution development
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Phase 3: Implementation
                    </div>
                    <div className="text-sm text-gray-600">
                      4 weeks - Deployment and training
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Phase 4: Optimization
                    </div>
                    <div className="text-sm text-gray-600">
                      Ongoing - Support and improvements
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Your Project
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
