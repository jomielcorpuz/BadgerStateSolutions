"use client";
import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Mail,
    Shield,
    Zap,
    Users,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "@/components/ui/animatedcontent";
import { AuroraText } from "@/components/magicui/aurora-text";



const BadgerStateSolutions = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);


    const faqs = [
        {
            question: "Are domains included, or do I need to provide my own?",
            answer:
                "You'll need to provide your own domains from a domain registrar. Once you have them, we'll take care of the rest, DNS setup, inbox creation, and configuration.",
        },
        {
            question: "Do I need to warm up the inboxes first?",
            answer:
                "We recommend a warm-up period of at least two weeks to gradually build sending reputation and avoid deliverability issues. As part of our setup, we’ll configure the warm-up schedule directly within your sequencer so everything is properly aligned from day one to ensure optimal inbox placement.",
        },
        {
            question: "Can I reuse old domains, or do I need new ones?",
            answer:
                "You can reuse domains, but if they've been used for bulk sending before, deliverability might be affected and we don’t recommend it. Either way, old or new, we can work with what you have.",
        },
        {
            question: "Why is there a limit on users per domain?",
            answer:
                "Platforms like Google and Microsoft have built-in limits to help prevent abuse. We follow best practices to keep your sending reputation safe. While we suggest using three accounts for the best results, there’s technically no hard limit.",
        },
        {
            question: "Do you support Google and Microsoft accounts?",
            answer:
                "Yes! We set up both Google Workspace and Microsoft 365 accounts, depending on what fits your needs best.",
        },
        {
            question: "How many emails can I send per account per day?",
            answer:
                "This depends on the platform and the warm-up stage. We'll help optimize the sending gradually so you can scale safely.",
        },
        {
            question: "How does your deliverability compare to others?",
            answer:
                "Anyone can claim best practices — we actually deliver. From day one, we set up SPF, DKIM, DMARC, and warming strategies, then monitor continuously to ensure your emails hit the inbox.",
        },
    ];




    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* Modern Header */}
            <header className="fixed top-0 w-full z-50 backdrop-blur shadow-xs border-b border-white/10 saturate-100 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/images/logo.png"
                                alt="Badger State Solutions Logo"
                                width={45}
                                height={45}
                            />
                            <span className="text-2xl font-bold text-gray-900">
                                Badger State Solutions
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
            <section className="relative min-h-screen flex items-center justify-center mesh-gradient pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 via-purple-50/90 via-gray-50/70 to-white"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={true}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        enableScrollUp={true}
                    >
                        <div className="animate-float">
                            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 sm:mb-8">
                                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-blue-600 mr-2" />
                                <span className="text-xs sm:text-sm font-medium text-gray-700">
                                    Trusted By Business Worldwide
                                </span>
                            </div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        enableScrollUp={true}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                    >
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[9rem] 3xl:text-[10rem] font-normal font-hero mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-[1.0] tracking-[-0.03em]">
                            <span className="luxury-text bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-semibold">Get </span>
                            <AuroraText>Reliable</AuroraText>
                            <br />
                            <span className="luxury-text bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-semibold">Inboxes, </span>
                            <span className="font-orpheus font-normal opacity-90">
                                <br />
                                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[9rem] 2xl:text-[11rem] font-medium tracking-tighter py-4 px-16 mx-4 overflow-visible">
                                    <AuroraText
                                        colors={["#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#3B82F6"]}
                                        speed={1}
                                    >
                                        FAST
                                    </AuroraText>
                                </div>
                            </span>
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.3}
                        delay={130}
                        enableScrollUp={true}
                    >
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 max-w-5xl mx-auto leading-relaxed">
                            Scale up your outreach with a reseller
                            <span className="font-semibold text-blue-600">
                                {" "}
                                you can trust.
                            </span>{" "}
                        </p>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.3}
                        delay={160}
                        enableScrollUp={true}
                    >
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-10">
                            <button
                                /*onClick={() => setShowOrderForm(true)}*/
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm w-full sm:w-auto"
                            >
                                <span className="relative z-10">Buy Now</span>
                                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative overflow-hidden bg-transparent text-black px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border-2 border-blue-400 hover:border-blue-300 w-full sm:w-auto">
                                <span className="relative z-10">Book a call</span>
                                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </AnimatedContent>


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



            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.1}
                enableScrollUp={true}
            >
                <section id="features" className="py-24 bg-white relative">

                </section>
            </AnimatedContent>

            <section className="py-24 relative overflow-hidden">


            </section>



            {/* Modern FAQ Section */}
            <section id="faq" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={100}
                            enableScrollUp={true}
                        >
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">
                                <span className="text-gradient">Frequently Asked</span>{" "}
                                Questions
                            </h2>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={160}
                            enableScrollUp={true}
                        >
                            <p className="text-xl text-gray-600">
                                Everything you need to know about Badger State Solutions India
                            </p>
                        </AnimatedContent>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => {
                            const isOpen = openFAQ === index;

                            return (
                                <AnimatedContent
                                    key={index}
                                    distance={100}
                                    direction="vertical"
                                    reverse={false}
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1.0}
                                    threshold={0.1}
                                    delay={100}
                                    enableScrollUp={true}
                                >
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                        <button
                                            className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors rounded-2xl"
                                            onClick={() => setOpenFAQ(isOpen ? null : index)}
                                        >
                                            <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">
                                                {faq.question}
                                            </span>
                                            <div className="ml-4 flex-shrink-0">
                                                {isOpen ? (
                                                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 transition-transform duration-300 ease-in-out" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform duration-300 ease-in-out" />
                                                )}
                                            </div>
                                        </button>

                                        {/* Animated Answer Block */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${isOpen
                                                ? "grid-rows-[1fr] opacity-100 pb-4 sm:pb-6"
                                                : "grid-rows-[0fr] opacity-0 pb-0"
                                                } px-4 sm:px-6 lg:px-8 overflow-hidden`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedContent>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modern CTA Section */}
            <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 mesh-gradient opacity-20"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={100}
                        enableScrollUp={true}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
                            Ready to{" "}
                            <span className="text-gradient animate-gradient">Scale?</span>
                        </h2>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={220}
                        enableScrollUp={true}
                    >
                        <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
                            Join thousands of businesses generating predictable revenue with
                            Badger State Solutions India
                        </p>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={160}
                        enableScrollUp={true}
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <button
                                onClick={() => setShowOrderForm(true)}
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm w-full sm:w-auto"
                            >
                                <span className="relative z-10">Buy Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-white/10 hover:scale-105 transition-all duration-300 border border-white/20 hover:bg-white/20 w-full sm:w-auto">
                                <span className="relative z-10">Book a call</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Modern Footer */}
            <footer className="bg-black text-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
                        <div className="sm:col-span-2 lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Mail className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                                </div>
                                <span className="text-xl sm:text-2xl lg:text-3xl font-bold">Badger State Solutions India</span>
                            </div>
                            <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                                Fast and reliable cold email infrastructure for ambitious
                                businesses ready to scale.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Product</h3>
                            <ul className="space-y-3 sm:space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        API
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Company</h3>
                            <ul className="space-y-3 sm:space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
                            &copy; 2025 Badger State Solutions India. All rights reserved.
                        </p>
                        <div className="flex space-x-4 sm:space-x-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
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

export default BadgerStateSolutions;
