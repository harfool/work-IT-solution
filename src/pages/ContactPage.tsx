import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  const FormRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [sentVerificationCode, setSentVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  // Generate random 6-digit verification code
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send verification email
  const sendVerificationEmail = async () => {
    if (!formData.email) {
      alert("Please enter your email address first");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsVerifying(true);
    const code = generateVerificationCode();
    setSentVerificationCode(code);

    try {
      // Send verification code via EmailJS using the same template
      await emailjs.send(
        "service_bmbpg3d",
        "template_hdrzjio",
        {
          from_name: formData.name || "User",
          from_email: formData.email,
          company: "Email Verification",
          phone: "Verification Required",
          service: "Email Verification",
          budget: "N/A",
          message: `Your verification code is: ${code}\n\nPlease enter this 6-digit code to verify your email address.\n\nThis is an automated verification email. If you didn't request this, please ignore this email.`,
          to_name: "Website Admin",
          to_email: "info@workitsolutions.com", // Your email address
        },
        "aKwTwsM2jmkeSX-oj"
      );

      setShowVerification(true);
      alert(
        `Verification code sent to ${formData.email}. Please check your email and also check your spam folder.`
      );
    } catch (error) {
      alert("Failed to send verification email. Please try again.");
      console.error("Verification Email Error:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  // Verify the code entered by user
  const verifyCode = () => {
    if (verificationCode === sentVerificationCode) {
      setEmailVerified(true);
      setShowVerification(false);
      alert("Email verified successfully! You can now send your message.");
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email is verified
    if (!emailVerified) {
      alert("Please verify your email address before sending the message.");
      return;
    }

    setIsSubmitting(true);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.service
    ) {
      alert("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        "service_bmbpg3d",
        "template_hdrzjio",
        FormRef.current!,
        "aKwTwsM2jmkeSX-oj"
      );
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
      // Reset verification status
      setEmailVerified(false);
      setShowVerification(false);
      setVerificationCode("");
      setSentVerificationCode("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 6376449199"],
      description: "Mon-Fri from 9am to 5pm IST",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@workitsolutions.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Workitsolution, Jhotwara, Jaipur, Rajasthan 302012"],
      description: "Visit us for in-person consultation",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9am to 5pm"],
      description: "Indian Standard Time",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Cybersecurity",
    "Data Analytics",
    "Digital Transformation",
    "API Development",
    "UI/UX Design",
    "Other",
  ];

  const budgetRanges = [
    "Under ₹5,00,000",
    "₹5,00,000 - ₹15,00,000",
    "₹15,00,000 - ₹30,00,000",
    "₹30,00,000 - ₹60,00,000",
    "₹60,00,000 - ₹1,50,00,000",
    "₹1,50,00,000+",
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Ready to transform your business? Let's discuss your project and
            explore how we can help
          </motion.p>
        </div>
      </section> */}

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-800 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 24
              hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your message and will get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form ref={FormRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                        disabled={emailVerified}
                      />
                      <button
                        type="button"
                        onClick={sendVerificationEmail}
                        disabled={
                          isVerifying || emailVerified || !formData.email
                        }
                        className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                          emailVerified
                            ? "bg-green-500 text-white cursor-default"
                            : "bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white"
                        }`}
                      >
                        {emailVerified
                          ? "✓ Verified"
                          : isVerifying
                          ? "Sending..."
                          : "Verify"}
                      </button>
                    </div>
                  </div>
                </div>

                {showVerification && !emailVerified && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">
                      Email Verification Required
                    </h4>
                    <p className="text-sm text-blue-600 mb-3">
                      We've sent a 6-digit verification code to {formData.email}
                      . Please check your email and spam folder:
                    </p>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        maxLength={6}
                        className="flex-1 px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={verifyCode}
                        disabled={verificationCode.length !== 6}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors duration-200"
                      >
                        Verify
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={sendVerificationEmail}
                      disabled={isVerifying}
                      className="text-sm text-blue-600 hover:text-blue-800 underline disabled:text-gray-400"
                    >
                      {isVerifying
                        ? "Sending..."
                        : "Didn't receive the code? Resend"}
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !emailVerified}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
                    emailVerified
                      ? "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white"
                      : "bg-gray-400 cursor-not-allowed text-white"
                  }`}
                >
                  {isSubmitting
                    ? "Sending..."
                    : emailVerified
                    ? "Send Message"
                    : "Verify Email First"}
                  <Send className="ml-2 h-5 w-5" />
                </button>

                {!emailVerified && (
                  <p className="text-sm text-gray-600 text-center">
                    Please verify your email address before sending your
                    message.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global presence with local expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl text-center"
              >
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-700">{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Visit our main office in Tech City
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-2 rounded-xl shadow-lg"
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3379.6655876453556!2d75.746197!3d26.979773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2f7694da015%3A0x2cd7f7863dd3f0ce!2sWEB%20IT%20WORLD%20(WEB%20PLAZA)%20THE%20WEB%20INFOTECH!5e1!3m2!1sen!2sin!4v1752174971039!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WEB IT WORLD (WEB PLAZA) THE WEB INFOTECH Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about working with us
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity, but most projects range from 2-8 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question:
                  "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we provide comprehensive support and maintenance packages to ensure your solution continues to perform optimally.",
              },
              {
                question: "What's your approach to project management?",
                answer:
                  "We use agile methodologies with regular check-ins, progress updates, and iterative feedback to ensure projects stay on track and meet your expectations.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-blue-600 p-6 rounded-lg"
              >
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-200">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
