"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShoppingBag,
  Download,
  Clock,
  Shield,
  ArrowRight,
  Lock,
  Mail,
  CheckCircle,
  Users,
  Heart,
  Twitter,
  Eye,
  Brain,
  Bell,
} from "lucide-react"
import { toast } from "sonner"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function SmartAfterLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(1247)

  const heroRef = useRef(null)
  const demoRef = useRef(null)
  const benefitsRef = useRef(null)
  const howItWorksRef = useRef(null)
  const waitlistRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isDemoInView = useInView(demoRef, { once: true, margin: "-100px" })
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" })
  const isWaitlistInView = useInView(waitlistRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success("🎉 Welcome to SmartAfter!", {
      description: "You're now on our exclusive waitlist. We'll notify you first when we launch!",
      duration: 4000,
    })

    setEmail("")
    setIsSubmitting(false)
    setWaitlistCount((prev) => prev + 1)
  }

  const benefits = [
    {
      icon: ShoppingBag,
      title: "Track All Your Orders",
      description: "Automatically find orders from Flipkart, Amazon, Myntra, and 50+ stores",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Download,
      title: "Download Receipts Instantly",
      description: "Access all your invoices and receipts in one organized place",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Clock,
      title: "Return Deadline Reminders",
      description: "Never miss a return window with smart, timely notifications",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Warranty Expiry Alerts",
      description: "Track warranty periods and get notified before they expire",
      gradient: "from-red-500 to-orange-500",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Connect Gmail",
      description: "Securely link your Gmail with read-only access",
      icon: Mail,
      color: "text-blue-600",
    },
    {
      number: "02",
      title: "AI Auto-Reads Receipts",
      description: "Our AI intelligently scans and organizes your purchase emails",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      number: "03",
      title: "Get Smart Alerts",
      description: "Receive timely notifications for returns, warranties, and more",
      icon: Bell,
      color: "text-pink-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Add this style tag for scroll optimization */}
      <style jsx global>{`
        .scroll-optimize {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
      {/* Animated Background Elements */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-20 pb-32 scroll-optimize">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L4 6V18L12 22L20 18V6L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 22V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M20 6L12 10L4 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 14L12 18L20 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  SmartAfter
                </h1>
              </div>
            </motion.div>

            {/* Problem Story */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                The Problem: ₹2,847 lost last month alone
              </div>
            </motion.div>

            {/* Main Headlines */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Never Miss a Return.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Never Lose a Receipt.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              SmartAfter organizes all your online orders, receipts, and return alerts — from Gmail, automatically.
              <span className="block mt-2 text-lg text-slate-500">
                Stop losing money on missed returns. Join the revolution.
              </span>
            </motion.p>

            {/* Email Capture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-lg mx-auto mb-6"
            >
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 text-base border-slate-200 focus:border-blue-400 focus:ring-blue-400/20 bg-white/80 backdrop-blur-sm"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Joining...</span>
                    </div>
                  ) : (
                    <>
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Security Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-center gap-2 text-sm text-slate-500"
            >
              <Lock className="h-4 w-4 text-green-600" />
              <span>100% secure, read-only Gmail access</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section ref={demoRef} className="relative z-10 py-24 scroll-optimize">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isDemoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Gmail Mockup */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isDemoInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-w-4xl mx-auto"
              >
                {/* Gmail Header */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-slate-500">
                      Gmail - SmartAfter is scanning...
                    </div>
                  </div>
                </div>

                {/* Gmail Content */}
                <div className="p-6 space-y-4">
                  {[
                    { from: "Amazon", subject: "Your order has been shipped", amount: "₹2,499", status: "tracked" },
                    { from: "Flipkart", subject: "Return window closing soon", amount: "₹1,299", status: "alert" },
                    { from: "Myntra", subject: "Your invoice is ready", amount: "₹899", status: "processed" },
                  ].map((email, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isDemoInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          email.status === "tracked"
                            ? "bg-blue-500"
                            : email.status === "alert"
                              ? "bg-red-500"
                              : "bg-green-500"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-slate-900">{email.from}</div>
                        <div className="text-sm text-slate-600">{email.subject}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">{email.amount}</div>
                        <div
                          className={`text-xs ${
                            email.status === "tracked"
                              ? "text-blue-600"
                              : email.status === "alert"
                                ? "text-red-600"
                                : "text-green-600"
                          }`}
                        >
                          {email.status === "tracked"
                            ? "Tracking"
                            : email.status === "alert"
                              ? "Return Alert"
                              : "Processed"}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isDemoInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              >
                <CheckCircle className="h-6 w-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isDemoInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
              >
                <Eye className="h-6 w-6" />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isDemoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 text-lg text-slate-600"
            >
              See how it works — <span className="font-semibold text-blue-600">coming soon</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Benefits */}
      <section ref={benefitsRef} className="relative z-10 py-24 bg-white/50 backdrop-blur-sm scroll-optimize">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Stop Losing Money on
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Missed Returns
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every month, millions of Indians lose money because they forget about return deadlines. SmartAfter ensures
              this never happens to you.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isBenefitsInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="relative z-10 py-24 scroll-optimize">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get started in under 2 minutes with our simple, secure process
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isHowItWorksInView ? "animate" : "initial"}
            className="grid md:grid-cols-3 gap-12"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-8" />
                )}

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg`}
                >
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </motion.div>

                <div className="text-sm font-bold text-slate-400 mb-2">{step.number}</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Waitlist Community */}
      <section
        ref={waitlistRef}
        className="relative z-10 py-24 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 scroll-optimize"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isWaitlistInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Avatars */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex -space-x-3">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isWaitlistInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`w-12 h-12 rounded-full border-3 border-white shadow-lg flex items-center justify-center ${
                      i % 4 === 0
                        ? "bg-gradient-to-r from-blue-400 to-blue-600"
                        : i % 4 === 1
                          ? "bg-gradient-to-r from-purple-400 to-purple-600"
                          : i % 4 === 2
                            ? "bg-gradient-to-r from-pink-400 to-pink-600"
                            : "bg-gradient-to-r from-indigo-400 to-indigo-600"
                    }`}
                  >
                    <Users className="h-6 w-6 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isWaitlistInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Join{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isWaitlistInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {waitlistCount.toLocaleString()}+
              </motion.span>{" "}
              early users
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isWaitlistInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-slate-600 mb-8"
            >
              transforming post-purchase management
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isWaitlistInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200 max-w-md mx-auto"
            >
              <div className="text-sm text-slate-500 mb-2">Average savings per user</div>
              <div className="text-3xl font-bold text-green-600">₹2,847/month</div>
              <div className="text-sm text-slate-500 mt-1">from recovered returns & warranties</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h4 className="text-2xl font-bold mb-4">SmartAfter</h4>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Privacy-first post-purchase management. We only read purchase-related emails and never store your
                personal data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-slate-400 mb-8"
            >
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-8 text-sm text-slate-400"
            >
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            </motion.div>

            <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
              © 2024 SmartAfter. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
