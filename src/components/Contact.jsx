"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null) // 'loading', 'success', 'error'
  const [currentTime, setCurrentTime] = useState(new Date())

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "a_belmehnouf@estin.dz",
      href: "mailto:a_belmehnouf@estin.dz",
      description: "Best way to reach me",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+213 563 292 372",
      href: "tel:+213563292372",
      description: "Available during business hours",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bejaia, Algeria",
      href: "#",
      description: "ESTIN Campus & Remote",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Untitled-Master",
      username: "@Untitled-Master",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-belmehnouf-b317b5350/",
      username: "Ahmed Belmehnouf",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/axmed_bl",
      username: "@axmed_bl",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/axmed.bl/",
      username: "@axmed.bl",
      color: "hover:text-pink-400",
    },
  ]

  const availability = [
    { day: "Sunday - Thursday", hours: "9:00 AM - 21:00 PM", available: true },
    { day: "Saturday", hours: "10:00 AM - 22:00 PM", available: true },
    { day: "Friday", hours: "Unavailable", available: false },
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
  
    const { name, email, subject, message } = formData;
  
    try {
      // Build the GET request URL
      const url = `https://animxapi-eetp.onrender.com/send-email?full_name=${encodeURIComponent(
        name
      )}&email_address=${encodeURIComponent(email)}&subject=${encodeURIComponent(
        subject
      )}&message=${encodeURIComponent(message)}`;
  
      const response = await fetch(url);
      const result = await response.json();
  
      if (response.ok) {
        // Email sent successfully
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // The request went through, but server responded with an error
        console.error(result);
        setFormStatus("error");
      }
    } catch (error) {
      // Network error or other issues
      console.error(error);
      setFormStatus("error");
    }
  };
  

  const getCurrentTimeInAlgeria = () => {
    return currentTime.toLocaleTimeString("en-US", {
      timeZone: "Africa/Algiers",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const isBusinessHours = () => {
    const algeriaTime = new Date().toLocaleString("en-US", { timeZone: "Africa/Algiers" })
    const hour = new Date(algeriaTime).getHours()
    const day = new Date(algeriaTime).getDay()
    return day >= 1 && day <= 5 && hour >= 9 && hour <= 18
  }

  return (
    <section className="relative min-h-screen py-20 px-6 lg:px-8 bg-[#09090B] overflow-hidden">
      {/* Mathematical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-12 text-3xl text-[#FAFAFA]/4 animate-pulse font-light">∫</div>
        <div className="absolute top-48 right-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-1000 font-light">∇</div>
        <div className="absolute bottom-32 left-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-500 font-light">∑</div>
        <div className="absolute top-72 left-1/3 text-xl text-[#FAFAFA]/4 animate-pulse delay-700 font-light">∆</div>
        <div className="absolute bottom-48 right-1/3 text-3xl text-[#FAFAFA]/4 animate-pulse delay-300 font-light">
          Ω
        </div>
        <div className="absolute top-96 right-16 text-xl text-[#FAFAFA]/4 animate-pulse delay-900 font-light">φ</div>

        {/* Geometric patterns */}
        <div
          className="absolute top-60 right-32 w-40 h-40 border border-[#FAFAFA]/4 rotate-12 animate-spin"
          style={{ animationDuration: "50s" }}
        ></div>
        <div className="absolute bottom-60 left-32 w-28 h-28 border border-[#FAFAFA]/4 rounded-full animate-pulse"></div>
        <div
          className="absolute top-80 left-1/4 w-32 h-32 border border-[#FAFAFA]/4 rotate-45 animate-spin"
          style={{ animationDuration: "70s", animationDirection: "reverse" }}
        ></div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA]/6 via-transparent to-[#FAFAFA]/4"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#FAFAFA]/3 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar */}
          <div
            className={`lg:col-span-4 xl:col-span-3 transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="sticky top-8 space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-full border border-[#FAFAFA]/15 mb-8">
                  <Mail className="w-5 h-5 text-[#FAFAFA]/70" />
                  <span className="text-sm font-medium text-[#FAFAFA]/70">Get In Touch</span>
                </div>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FAFAFA] mb-6 tracking-tight">
                  Contact
                  <span className="block text-[#FAFAFA]/60 relative">
                    Me
                    <div className="absolute -top-2 -right-4 text-2xl text-[#FAFAFA]/20">∞</div>
                  </span>
                </h2>

                <p className="text-lg text-[#FAFAFA]/80 leading-relaxed font-light mb-8">
                  Ready to collaborate on exciting projects or discuss opportunities in cybersecurity and software
                  development. Let's connect and build something amazing together.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Contact Information</h3>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start space-x-4 p-4 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-[#FAFAFA]/10 rounded-xl group-hover:bg-[#FAFAFA]/15 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#FAFAFA]/60 group-hover:text-[#FAFAFA] transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#FAFAFA] group-hover:text-[#FAFAFA] transition-colors duration-300">
                          {info.label}
                        </h4>
                        <p className="text-[#FAFAFA]/80 text-sm">{info.value}</p>
                        <p className="text-[#FAFAFA]/60 text-xs mt-1">{info.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#FAFAFA]/40 group-hover:text-[#FAFAFA]/60 transition-colors duration-300" />
                    </a>
                  )
                })}
              </div>

              {/* Current Time & Availability */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-[#FAFAFA]/60" />
                  Availability
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#FAFAFA]/5 rounded-xl">
                    <span className="text-[#FAFAFA]/70">Current Time (Algeria)</span>
                    <span className="text-[#FAFAFA] font-mono">{getCurrentTimeInAlgeria()}</span>
                  </div>

                  <div
                    className={`flex items-center space-x-3 p-3 rounded-xl ${
                      isBusinessHours()
                        ? "bg-green-500/10 border border-green-500/20"
                        : "bg-red-500/10 border border-red-500/20"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${isBusinessHours() ? "bg-green-400" : "bg-red-400"} animate-pulse`}
                    ></div>
                    <span className="text-[#FAFAFA]/80 text-sm">
                      {isBusinessHours() ? "Available for immediate response" : "Will respond within 24 hours"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {availability.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-[#FAFAFA]/70">{schedule.day}</span>
                        <span
                          className={`${schedule.available ? "text-[#FAFAFA]/80" : "text-[#FAFAFA]/50"} font-medium`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 bg-[#FAFAFA]/5 hover:bg-[#FAFAFA]/10 rounded-xl border border-[#FAFAFA]/10 hover:border-[#FAFAFA]/20 transition-all duration-300 group ${social.color}`}
                      >
                        <Icon className="w-5 h-5 text-[#FAFAFA]/60 group-hover:text-current transition-colors duration-300" />
                        <div className="flex-1">
                          <span className="text-[#FAFAFA]/80 group-hover:text-[#FAFAFA] transition-colors duration-300">
                            {social.label}
                          </span>
                          <p className="text-[#FAFAFA]/60 text-xs">{social.username}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#FAFAFA]/40 group-hover:text-[#FAFAFA]/60 transition-colors duration-300" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-8 xl:col-span-9 transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-[#FAFAFA]/15">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Send Me a Message</h3>
                <p className="text-[#FAFAFA]/80 leading-relaxed">
                  Whether you have a project idea, collaboration opportunity, or just want to say hello, I'd love to
                  hear from you. Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#FAFAFA]/80 flex items-center">
                      <User className="w-4 h-4 mr-2 text-[#FAFAFA]/60" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#FAFAFA]/5 border border-[#FAFAFA]/15 rounded-xl text-[#FAFAFA] placeholder-[#FAFAFA]/50 focus:outline-none focus:ring-2 focus:ring-[#FAFAFA]/30 focus:border-[#FAFAFA]/30 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#FAFAFA]/80 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-[#FAFAFA]/60" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#FAFAFA]/5 border border-[#FAFAFA]/15 rounded-xl text-[#FAFAFA] placeholder-[#FAFAFA]/50 focus:outline-none focus:ring-2 focus:ring-[#FAFAFA]/30 focus:border-[#FAFAFA]/30 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[#FAFAFA]/80 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-[#FAFAFA]/60" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAFAFA]/5 border border-[#FAFAFA]/15 rounded-xl text-[#FAFAFA] placeholder-[#FAFAFA]/50 focus:outline-none focus:ring-2 focus:ring-[#FAFAFA]/30 focus:border-[#FAFAFA]/30 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#FAFAFA]/80 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-[#FAFAFA]/60" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#FAFAFA]/5 border border-[#FAFAFA]/15 rounded-xl text-[#FAFAFA] placeholder-[#FAFAFA]/50 focus:outline-none focus:ring-2 focus:ring-[#FAFAFA]/30 focus:border-[#FAFAFA]/30 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, idea, or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-[#FAFAFA]/60">* Required fields</p>
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="flex items-center space-x-3 px-8 py-4 bg-[#FAFAFA]/15 hover:bg-[#FAFAFA]/20 border border-[#FAFAFA]/30 hover:border-[#FAFAFA]/40 rounded-xl text-[#FAFAFA] font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Please fill in all required fields and try again.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <a
                href="mailto:ahmed.belmehnouf@estin.dz?subject=Quick%20Question"
                className="flex items-center space-x-4 p-6 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-300 group"
              >
                <div className="p-3 bg-[#FAFAFA]/10 rounded-xl group-hover:bg-[#FAFAFA]/15 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#FAFAFA]/60 group-hover:text-[#FAFAFA] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#FAFAFA] group-hover:text-[#FAFAFA] transition-colors duration-300">
                    Quick Email
                  </h4>
                  <p className="text-[#FAFAFA]/60 text-sm">For urgent matters</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-belmehnouf-b317b5350/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-300 group"
              >
                <div className="p-3 bg-[#FAFAFA]/10 rounded-xl group-hover:bg-[#FAFAFA]/15 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-[#FAFAFA]/60 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#FAFAFA] group-hover:text-[#FAFAFA] transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p className="text-[#FAFAFA]/60 text-sm">Professional network</p>
                </div>
              </a>

              <a
                href="https://calendly.com/ahmed-belmehnouf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-300 group"
              >
                <div className="p-3 bg-[#FAFAFA]/10 rounded-xl group-hover:bg-[#FAFAFA]/15 transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-[#FAFAFA]/60 group-hover:text-[#FAFAFA] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#FAFAFA] group-hover:text-[#FAFAFA] transition-colors duration-300">
                    Schedule Call
                  </h4>
                  <p className="text-[#FAFAFA]/60 text-sm">Book a meeting</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
