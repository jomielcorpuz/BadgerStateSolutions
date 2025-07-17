"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const SalesblastIndia = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      question: "Are domains included, or do I need to provide my own?",
      answer:
        "You’ll need to provide your own domains from a domain registrar. Once you have them, we’ll take care of the rest, DNS setup, inbox creation, and configuration.",
    },
    {
      question: "Do I need to warm up the inboxes first?",
      answer:
        "Yes, we recommend warming up for at least 2 weeks. We can help warm them up directly through your sequencer.",
    },
    {
      question: "Can I reuse old domains, or do I need new ones?",
      answer:
        "You can reuse domains, but if they’ve been used for bulk sending before, deliverability might be affected. Either way, old or new, we can work with what you have.",
    },
    {
      question: "Why is there a limit on users per domain?",
      answer:
        "Platforms like Google and Microsoft have built-in limits to help prevent abuse. We follow the best practices to make sure your sending reputation stays clean.",
    },
    {
      question: "Do you support Google and Microsoft accounts?",
      answer:
        "Yes! We set up both Google Workspace and Microsoft 365 accounts, depending on what fits your needs best.",
    },
    {
      question: "How many emails can I send per account per day?",
      answer:
        "This depends on the platform and the warm-up stage. We’ll help optimize the sending gradually so you can scale safely.",
    },
    {
      question: "How does your deliverability compare to others?",
      answer:
        "We follow deliverability best practices from day one, SPF, DKIM, DMARC, warm-up, and ongoing monitoring, so your emails land in the inbox, not spam.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Register Your Domains",
      description:
        "Use domains from any registrar you like: Porkbun, GoDaddy, etc. They all work seamlessly with Salesblast's infrastructure.",
      highlight: "4 domains = 11,000 Cold Emails A Month",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "White Glove Setup",
      description:
        "Our expert team handles the complete configuration of your domains with Google and Microsoft inboxes, including all technical DNS settings.",
      highlight: "Ready to send in just 4 days",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "Smart Warmup Strategy",
      description:
        "Choose between immediate sending for urgent campaigns or strategic 2-week warmup for maximum deliverability and volume.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      number: "04",
      title: "Scale with Precision",
      description:
        "From boutique agencies to enterprise campaigns, our infrastructure scales intelligently with advanced routing and monitoring.",
      icon: <Mail className="w-8 h-8" />,
    },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Universal Platform Mastery",
      subtitle:
        "Optimized accounts across Google, Microsoft, and emerging platforms",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "White-Glove Excellence",
      subtitle: "Complete DNS configuration with DKIM, DMARC, and SPF setup",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Deployment",
      subtitle: "From zero to sending in just 4 days with expert configuration",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Inbox Optimization",
      subtitle:
        "Advanced deliverability engineering for maximum inbox placement",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background: linear-gradient(
            -45deg,
            #667eea,
            #764ba2,
            #f093fb,
            #f5576c
          );
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }

        .glass-morphism {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .mesh-gradient {
          background: radial-gradient(
              circle at 20% 80%,
              #667eea 0%,
              transparent 50%
            ),
            radial-gradient(circle at 80% 20%, #764ba2 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #f093fb 0%, transparent 50%);
        }
      `}</style>

      {/* Modern Header */}
      <header className="fixed top-0 w-full z-50 glass-morphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/icons/logo.png"
                alt="Salesblast Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-gray-900">
                Salesblast
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Process
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                FAQ
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Mesh Gradient */}
      <section className="relative min-h-screen flex items-center justify-center mesh-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-float">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Trusted by 10,000+ businesses worldwide
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Unlock </span>
            <span className="text-gradient animate-gradient">Unlimited</span>
            <br />
            <span className="text-gray-900">Cold Email</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your outreach from hit-or-miss to a
            <span className="font-semibold text-blue-600">
              {" "}
              predictable revenue machine
            </span>{" "}
            with precision-engineered email infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Start Scaling Today
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-semibold">Watch Demo</span>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15%+</div>
              <div className="text-sm text-gray-600">Avg Reply Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                10K+
              </div>
              <div className="text-sm text-gray-600">Emails/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                4 Days
              </div>
              <div className="text-sm text-gray-600">Setup Time</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-16 w-16 h-16 bg-purple-500/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-pink-500/10 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

      {/* Auto-scrolling Logo Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="mb-12 text-center">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
            Trusted by industry leaders
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {Array.from({ length: 2 }).map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex items-center justify-around min-w-full"
              >
                {Array.from({ length: 8 }).map((_, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="mx-12 flex items-center justify-center"
                  >
                    <div className="w-32 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center hover-lift border border-gray-100">
                      <span className="text-gray-400 font-semibold text-sm">
                        COMPANY {logoIndex + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section id="features" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Salesblast?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our precision-engineered infrastructure delivers unmatched
              performance and reliability for your cold email campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className={`relative p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover-lift bg-white`}
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement with Modern Design */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Tired of <span className="text-red-400">1% Reply Rates?</span>
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
            Transform your cold outreach into a predictable revenue engine with
            infrastructure that actually works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-morphism p-8 rounded-2xl hover-lift">
              <div className="text-4xl font-bold text-red-400 mb-4">1%</div>
              <div className="text-gray-300">Industry Average Reply Rate</div>
            </div>
            <div className="glass-morphism p-8 rounded-2xl hover-lift bg-gradient-to-r from-green-500/20 to-blue-500/20">
              <div className="text-4xl font-bold text-green-400 mb-4">15%+</div>
              <div className="text-gray-200 font-semibold">
                Salesblast Average
              </div>
            </div>
            <div className="glass-morphism p-8 rounded-2xl hover-lift">
              <div className="text-4xl font-bold text-blue-400 mb-4">10x</div>
              <div className="text-gray-300">More Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern 4 Steps Section */}
      <section
        id="process"
        className="py-32 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">4 Simple Steps</span> to Success
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Get to 10,000+ emails per month in just days
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl animate-pulse-glow">
                      {step.number}
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      {step.highlight && (
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                          <p className="text-blue-700 font-semibold">
                            {step.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                      <div className="text-6xl opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Frequently Asked</span> Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Salesblast
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors rounded-2xl"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to{" "}
            <span className="text-gradient animate-gradient">Scale?</span>
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses generating predictable revenue with
            Salesblast
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Start Your Journey Today
            </button>
            <button className="glass-morphism text-white px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold">Salesblast</span>
              </div>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Precision-engineered cold email infrastructure for ambitious
                businesses ready to scale.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Salesblast. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalesblastIndia;
