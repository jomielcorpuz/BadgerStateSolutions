"use client";
import React, { useState } from "react";
import {
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




    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* Modern Header */}
            <header className="fixed top-0 w-full z-50 backdrop-blur shadow-xs border-b border-white/10 saturate-100 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/images/logo1.png"
                                alt="Badger State Solutions Logo"
                                width={40}
                                height={40}
                                className=""
                            />
                            <span className="text-2xl font-bold text-amber-900">
                                Badger State Solutions
                            </span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a
                                href="#about"
                                className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#services"
                                className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
                            >
                                Contact
                            </a>
                            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                                Get Started
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section with Mesh Gradient */}
            <section className="relative min-h-screen flex items-center justify-center mesh-gradient pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 via-yellow-50/90 via-stone-50/70 to-white"></div>
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
                                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-amber-600 mr-2" />
                                <span className="text-xs sm:text-sm font-medium text-amber-800">
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
                            <span className="luxury-text bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 bg-clip-text text-transparent font-semibold">Badger State </span>
                            <AuroraText>Solutions</AuroraText>
                            <br />
                            <span className="font-orpheus font-normal opacity-90">
                                <br />
                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-tighter py-4 px-16 mx-4 overflow-visible">
                                    <AuroraText
                                        colors={["#D97706", "#F59E0B", "#FBBF24", "#92400E", "#B45309"]}
                                        speed={1}
                                    >
                                        Driven by Insight. Focused on Results.
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
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-amber-700 mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 max-w-5xl mx-auto leading-relaxed">
                            Partner with Badger State Solutions to unlock your organization's potential, streamline operations, and achieve lasting growth.
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
                                className="group relative overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300 border border-amber-500/20 backdrop-blur-sm w-full sm:w-auto"
                            >
                                <span className="relative z-10">👉 Contact Us</span>
                                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative overflow-hidden bg-transparent text-amber-900 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 border-2 border-amber-400 hover:border-amber-300 w-full sm:w-auto">
                                <span className="relative z-10">👉 Learn More</span>
                                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </AnimatedContent>


                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-amber-500/10 rounded-full animate-float"></div>
                <div
                    className="absolute top-1/3 right-16 w-16 h-16 bg-yellow-500/10 rounded-full animate-float"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-orange-500/10 rounded-full animate-float"
                    style={{ animationDelay: "4s" }}
                ></div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 text-center">
                            <span className="text-gradient bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-600 bg-clip-text text-transparent">About</span> Us
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
                        delay={150}
                        enableScrollUp={true}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6 text-center">
                            Who We Are
                        </h3>
                        <p className="text-lg text-amber-700 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
                            At Badger State Solutions, we are a business management and consulting firm dedicated to helping organizations thrive.
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
                        delay={200}
                        enableScrollUp={true}
                    >
                        <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 backdrop-blur-sm border border-amber-200/50 rounded-xl p-8 mb-8">
                            <h4 className="text-xl font-bold text-amber-800 mb-6 text-center">
                                We work alongside you to:
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl mb-3">✅</div>
                                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Streamline operations</h5>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-3">✅</div>
                                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Improve performance</h5>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-3">✅</div>
                                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Achieve sustainable growth</h5>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={250}
                        enableScrollUp={true}
                    >
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                                With tailored strategies, operational support, and expert guidance, we help businesses across a wide range of industries enhance efficiency, navigate challenges, and scale with confidence.
                            </p>
                            <p className="text-lg text-amber-700 leading-relaxed">
                                Whether you're a small startup or an established enterprise, Badger State Solutions provides the insight and support you need to succeed.
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
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



            {/* Our Services Section */}
            <section id="services" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 text-center">
                            <span className="text-gradient bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-600 bg-clip-text text-transparent">Our</span> Services
                        </h2>
                        <p className="text-xl text-amber-700 text-center mb-12 max-w-3xl mx-auto">
                            We offer a range of solutions to help your business excel:
                        </p>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={150}
                            enableScrollUp={true}
                        >
                            <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 backdrop-blur-sm border border-amber-200/50 rounded-xl p-8 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 h-full">
                                <h3 className="text-2xl font-bold text-amber-800 mb-4">Strategy Development</h3>
                                <p className="text-amber-700 leading-relaxed">Crafting actionable plans aligned with your goals and market realities.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={200}
                            enableScrollUp={true}
                        >
                            <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 backdrop-blur-sm border border-amber-200/50 rounded-xl p-8 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 h-full">
                                <h3 className="text-2xl font-bold text-amber-800 mb-4">Operational Excellence</h3>
                                <p className="text-amber-700 leading-relaxed">Identifying and eliminating inefficiencies to maximize productivity.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={250}
                            enableScrollUp={true}
                        >
                            <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 backdrop-blur-sm border border-amber-200/50 rounded-xl p-8 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 h-full">
                                <h3 className="text-2xl font-bold text-amber-800 mb-4">Performance Improvement</h3>
                                <p className="text-amber-700 leading-relaxed">Driving measurable results through analytics, innovation, and best practices.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={300}
                            enableScrollUp={true}
                        >
                            <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 backdrop-blur-sm border border-amber-200/50 rounded-xl p-8 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 h-full">
                                <h3 className="text-2xl font-bold text-amber-800 mb-4">Growth & Scaling Support</h3>
                                <p className="text-amber-700 leading-relaxed">Guiding your organization through periods of rapid growth or change.</p>
                            </div>
                        </AnimatedContent>
                    </div>

                    {/* Why Choose Us Section */}
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={350}
                        enableScrollUp={true}
                    >
                        <div className="bg-gradient-to-r from-amber-100/50 to-yellow-100/30 backdrop-blur-sm border border-amber-300/50 rounded-xl p-8">
                            <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Why Choose Us?</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl mb-3">🏆</div>
                                    <p className="text-amber-800 font-semibold">Industry experience across diverse sectors</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-3">🎯</div>
                                    <p className="text-amber-800 font-semibold">Customized strategies for your unique challenges</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-3">🤝</div>
                                    <p className="text-amber-800 font-semibold">Hands-on support, not just advice</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-3">📈</div>
                                    <p className="text-amber-800 font-semibold">Proven track record of delivering results</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 mb-6">
                            <span className="text-gradient bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-600 bg-clip-text text-transparent">Contact</span> Us
                        </h2>
                        <p className="text-xl text-amber-700 mb-8">
                            Ready to take your business to the next level?
                        </p>
                        <p className="text-lg text-amber-700 mb-12">
                            We'd love to hear from you!
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
                        delay={200}
                        enableScrollUp={true}
                    >
                        <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 backdrop-blur-sm border border-amber-200/50 rounded-xl p-8 max-w-2xl mx-auto">
                            <div className="space-y-6">
                                <div className="flex items-center justify-center space-x-3">
                                    <div className="text-2xl">📧</div>
                                    <div>
                                        <p className="text-lg font-semibold text-amber-800 mb-1">Email:</p>
                                        <a href="mailto:info@badgerstatesolutions.com" className="text-xl text-amber-600 hover:text-amber-700 transition-colors duration-300 font-medium">
                                            info@badgerstatesolutions.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center space-x-3">
                                    <div className="text-2xl">🌐</div>
                                    <div>
                                        <p className="text-lg font-semibold text-amber-800 mb-1">Website:</p>
                                        <a href="https://www.badgerstatesolutions.com" className="text-xl text-amber-600 hover:text-amber-700 transition-colors duration-300 font-medium">
                                            www.badgerstatesolutions.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Modern CTA Section */}
            <section className="py-24 bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 text-white relative overflow-hidden">
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
                            <span className="text-gradient animate-gradient">Transform Your Business?</span>
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
                        <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
                            Partner with Badger State Solutions to unlock your organization's potential and achieve sustainable growth
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
                                className="group relative overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300 border border-amber-500/20 backdrop-blur-sm w-full sm:w-auto"
                            >
                                <span className="relative z-10">Schedule Consultation</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-white/10 hover:scale-105 transition-all duration-300 border border-white/20 hover:bg-white/20 w-full sm:w-auto">
                                <span className="relative z-10">Learn More</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Simple Copyright Footer */}
            <footer className="bg-amber-900 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">
                        &copy; 2025 Badger State Solutions. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default BadgerStateSolutions;
