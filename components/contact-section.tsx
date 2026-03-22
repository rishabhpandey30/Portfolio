"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Send, MessageSquare, CheckCircle2, Loader2 } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rishabhpandey3011@gmail.com",
    href: "mailto:rishabhpandey3011@gmail.com",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8864902606",
    href: "tel:+918864902606",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rishabhpandey30",
    href: "https://github.com/rishabhpandey30",
    color: "text-gray-300",
    bg: "bg-gray-500/10",
    border: "border-gray-500/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "rishabh-pandey-78r0",
    href: "https://linkedin.com/in/rishabh-pandey-78r0",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section ref={ref} id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Let's discuss opportunities, collaborations, or just have a conversation about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-heading font-bold mb-6 uppercase tracking-tight">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className={`flex items-center gap-4 p-4 rounded-2xl glass-card border ${info.border} hover:shadow-md transition-all duration-300 group`}
              >
                <div className={`w-11 h-11 rounded-xl ${info.bg} flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-200 border ${info.border}`}>
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm font-medium text-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Quote box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
            >
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Let's make something incredible together."
              </p>
              <p className="mt-2 text-xs font-bold text-primary">— Rishabh Pandey</p>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-7 border border-border/50"
          >
            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
              <Send className="w-4 h-4 text-primary" />
              Send a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-56 gap-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <CheckCircle2 className="w-14 h-14 text-green-400" />
                </motion.div>
                <p className="text-lg font-bold text-foreground">Message Sent!</p>
                <p className="text-sm text-muted-foreground text-center">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                ].map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label htmlFor={field.id} className="text-sm font-semibold text-foreground">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/60 transition-all"
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/60 transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, oklch(0.55 0.26 264), oklch(0.6 0.25 300))" }}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
