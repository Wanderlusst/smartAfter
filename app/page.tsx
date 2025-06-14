"use client"
import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
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
  Eye,
  Brain,
  Bell,
} from "lucide-react"

// Assuming you have 'sonner' installed and configured for toasts
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

export default function SmartAfterRefined() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(1247)
  const [hasJoined, setHasJoined] = useState(false)

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      return "Email is required."
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address."
    }
    return null
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }

    setEmailError(null);
    setIsSubmitting(true);

    try {
      const form = new URLSearchParams();
      form.append("email", email);

      const response = await fetch("https://script.google.com/macros/s/AKfycbyZeTdM88aVbnYWQBs18HIaxw7PRx6iMp3ng2iBTSKBREunql9SL7Kb_OnwWJeeJZA4BA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API submission failed: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const result = await response.text();
      console.log("Submission result:", result);

      toast.success("🎉 Welcome to SmartAfter!", {
        description: "You're now on our exclusive waitlist!",
        duration: 4000,
      });

      setEmail("");
      setWaitlistCount((prev) => prev + 1);
      setHasJoined(true);

    } catch (err) {
      console.error("Submission failed:", err);
      toast.error("Failed to join. Please try again.", {
        description: (err as Error).message || "An unexpected error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: ShoppingBag,
      title: "Track All Orders",
      description: "Auto-find orders from 50+ stores like Amazon, Flipkart, Myntra",
    },
    {
      icon: Download,
      title: "Download Receipts",
      description: "Access all invoices and receipts in one organized place",
    },
    {
      icon: Clock,
      title: "Return Reminders",
      description: "Never miss a return window with smart notifications",
    },
    {
      icon: Shield,
      title: "Warranty Alerts",
      description: "Track warranty periods and get notified before expiry",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Connect Gmail",
      description: "Secure read-only access",
      icon: Mail,
    },
    {
      number: 2,
      title: "SmartAfter reads orders",
      description: "AI scans purchase emails",
      icon: Brain,
    },
    {
      number: 3,
      title: "You get reminders",
      description: "Timely alerts for returns & warranties",
      icon: Bell,
    },
  ]

  const avatarImages = [
    "/avatars/avatar1.png",
    "/avatars/avatar2.png",
    "/avatars/avatar3.png",
    "/avatars/avatar4.png",
    "/avatars/avatar5.png",
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Subtle Background Elements */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-100/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">
                  SmartAfter
                </h1>
              </div>
            </motion.div>

            {/* Problem Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Lost ₹2,847 last month on missed returns
              </div>
            </motion.div>

            {/* Main Headlines */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Never Miss a Return.
              <br />
              <span className="text-blue-600">
                Never Lose a Receipt.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              SmartAfter organizes all your online orders, receipts, and return alerts from Gmail, automatically.
            </motion.p>

            {/* Email Capture / Joined Message - Conditional Rendering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-md mx-auto mb-4"
            >
              <AnimatePresence mode="wait" initial={false}> {/* added initial={false} to prevent animation on first render */}
                {hasJoined ? (
                  <motion.div
                    key="joined-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg font-semibold text-lg"
                  >
                    <CheckCircle className="h-6 w-6" />
                    <span>You've Joined!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="join-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Wrap input and button in a <form> and handle onSubmit */}
                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError(null);
                        }}
                        className={`flex-1 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 bg-white ${emailError ? "border-red-500 focus:border-red-500" : ""}`}
                        required
                      />
                      <Button
                        type="submit" // Set type to submit for form interaction
                        disabled={isSubmitting}
                        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Joining...</span>
                          </div>
                        ) : (
                          <>
                            Join Waitlist
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                    {/* Error message container, controlled by height and opacity */}
                    <AnimatePresence> {/* This AnimatePresence ensures the error message can animate out */}
                      {emailError && (
                        <motion.p
                          key="error-text" // Unique key for AnimatePresence
                          initial={{ opacity: 0, height: 0, marginTop: 0 }} // Start hidden, no height
                          animate={{ opacity: 1, height: "auto", marginTop: "0.5rem" }} // Animate to visible, auto height, margin
                          exit={{ opacity: 0, height: 0, marginTop: 0 }} // Animate out
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="text-red-600 text-sm overflow-hidden" // overflow-hidden is key for height animation
                          style={{
                              // Ensures text isn't cut off during height animation, and initial display
                              whiteSpace: emailError ? 'normal' : 'nowrap'
                          }}
                        >
                          {emailError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Security Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-center gap-2 text-sm text-gray-500"
            >
              <Lock className="h-4 w-4 text-green-600" />
              <span>🔒 Secure Gmail read-only access</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Quote */}
      <section className="relative z-10 py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-2xl p-8"
          >
            <div className="text-lg text-gray-700 mb-4 italic">
              "I forgot to return my ₹3,000 headphones — SmartAfter would have reminded me!"
            </div>
            <div className="text-sm text-gray-500">— Early Tester</div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards - Clean Grid */}
      <section ref={benefitsRef} className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Stop Losing Money on Missed Returns
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every month, millions lose money on forgotten returns. SmartAfter prevents this.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isBenefitsInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <benefit.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works - Flat 3-Step */}
      <section ref={howItWorksRef} className="relative z-10 py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-xl text-gray-600">
              Get started in under 2 minutes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isHowItWorksInView ? "animate" : "initial"}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Waitlist Community with Animated Avatars */}
      <section ref={waitlistRef} className="relative z-10 py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isWaitlistInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Avatars */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                {avatarImages.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isWaitlistInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Avatar ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isWaitlistInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isWaitlistInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-blue-600"
              >
                {waitlistCount.toLocaleString()}
              </motion.span>{" "}
              people signed up so far!
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isWaitlistInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-sm mx-auto mt-8"
            >
              <div className="text-sm text-gray-500 mb-1">Average savings per user</div>
              <div className="text-2xl font-bold text-green-600">₹2,847/month</div>
              <div className="text-xs text-gray-500">from recovered returns</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h4 className="text-xl font-bold mb-3">SmartAfter</h4>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Privacy-first post-purchase management. We only read purchase-related emails.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-gray-400 mb-6"
            >
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-6"
            >
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </motion.div>

            <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} SmartAfter. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}