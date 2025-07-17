"use client";
import {
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
                                src="/logo.png"
                                alt="Badger State Solutions Logo"
                                width={40}
                                height={40}
                                className=""
                            />
                            <span className="text-2xl font-bold text-blue-900">
                                Badger State Solutions
                            </span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a
                                href="#about"
                                className="text-blue-800 hover:text-blue-600 transition-colors font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#services"
                                className="text-blue-800 hover:text-blue-600 transition-colors font-medium"
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                className="text-blue-800 hover:text-blue-600 transition-colors font-medium"
                            >
                                Contact
                            </a>
                            <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                                Get Started
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section with Mesh Gradient */}
            <section className="relative min-h-screen flex items-center justify-center mesh-gradient pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 via-blue-100/90 via-stone-50/70 to-white"></div>
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
                                <span className="text-xs sm:text-sm font-medium text-blue-800">
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
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 sm:mb-10 md:mb-12 leading-[0.9] tracking-[-0.04em] text-center">
                            <div className="mb-4">
                                <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent font-black">Badger State</span>
                                <br />
                                <AuroraText className="font-black">Solutions</AuroraText>
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mt-6 leading-tight">
                                <AuroraText
                                    colors={["#1e3a8a", "#2563eb", "#3b82f6", "#0a2540", "#60a5fa"]}
                                    speed={1}
                                    className="font-semibold"
                                >
                                    Driven by Insight.<br />Focused on Results.
                                </AuroraText>
                            </div>
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
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-700/90 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                            Partner with Badger State Solutions to unlock your organization&apos;s potential, streamline operations, and achieve lasting growth.
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
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
                            <button
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl text-base sm:text-lg md:text-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-500 border border-blue-500/20 backdrop-blur-sm w-full sm:w-auto min-w-[200px]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <span>Contact Us</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                            <button className="group relative overflow-hidden bg-white/80 backdrop-blur-sm text-blue-900 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl text-base sm:text-lg md:text-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-500 border-2 border-blue-300/50 hover:border-blue-400/70 w-full sm:w-auto min-w-[200px]">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                        </div>
                    </AnimatedContent>


                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
                <div
                    className="absolute top-1/3 right-16 w-16 h-16 bg-blue-400/10 rounded-full animate-float"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-300/10 rounded-full animate-float"
                    style={{ animationDelay: "4s" }}
                ></div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-24 sm:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white">
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
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 mb-6 tracking-tight">
                                <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent">About</span> Us
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
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
                        delay={150}
                        enableScrollUp={true}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-8 tracking-tight">
                                Who We Are
                            </h3>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-700/90 text-center mb-12 max-w-5xl mx-auto leading-relaxed font-light">
                                At Badger State Solutions, we are a business management and consulting firm dedicated to helping organizations thrive.
                            </p>
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
                        <div className="bg-gradient-to-r from-blue-50/50 to-blue-100/30 backdrop-blur-sm border border-blue-200/50 rounded-xl p-8 lg:p-12 mb-8">
                            <h4 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-8 lg:mb-10 text-center tracking-tight">
                                We work alongside you to:
                            </h4>
                            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex justify-center items-center text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src="/icons/strategy.png"
                                            alt="Strategy Icon"
                                            width={75}
                                            height={75}
                                            className="w-24 h-24">

                                        </Image>
                                    </div>
                                    <h5 className="text-xl lg:text-2xl font-bold text-blue-800 mb-2 tracking-tight">Streamline operations</h5>
                                </div>
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex justify-center items-center text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src="/icons/operation.png"
                                            alt="Performance Icon"
                                            width={75}
                                            height={75}
                                            className="w-24 h-24">

                                        </Image>
                                    </div>
                                    <h5 className="text-xl lg:text-2xl font-bold text-blue-800 mb-2 tracking-tight">Improve performance</h5>
                                </div>
                                <div className="group justify-center items-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex  justify-center items-center text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src="/icons/rising.png"
                                            alt="Growth Icon"
                                            width={75}
                                            height={75}
                                            className="w-24 h-24 justify-center items-center">

                                        </Image>
                                    </div>
                                    <h5 className="text-xl lg:text-2xl font-bold text-blue-800 mb-2 tracking-tight">Achieve sustainable growth</h5>
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
                            <p className="text-lg text-blue-700 mb-6 leading-relaxed">
                                With tailored strategies, operational support, and expert guidance, we help businesses across a wide range of industries enhance efficiency, navigate challenges, and scale with confidence.
                            </p>
                            <p className="text-lg text-blue-700 leading-relaxed">
                                Whether you&apos;re a small startup or an established enterprise, Badger State Solutions provides the insight and support you need to succeed.
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
            </section>



            {/* Our Services Section */}
            <section id="services" className="py-24 sm:py-32 bg-gradient-to-b from-white via-blue-50/10 to-white">
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
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 mb-6 tracking-tight">
                                <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent">Our</span> Services
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-700/90 text-center mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                                We offer a range of solutions to help your business excel:
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
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
                            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-300 hover:-translate-y-2 h-full">
                                <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src="/icons/strategy.png"
                                        alt="Strategy Icon"
                                        width={75}
                                        height={75}
                                        className="w-24 h-24">

                                    </Image>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-6 tracking-tight">Strategy Development</h3>
                                <p className="text-lg text-blue-700/90 leading-relaxed font-light">Crafting actionable plans aligned with your goals and market realities.</p>
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
                            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-300 hover:-translate-y-2 h-full">
                                <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src="/icons/operation.png"
                                        alt="Operation Icon"
                                        width={75}
                                        height={75}
                                        className="w-24 h-24">

                                    </Image>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-6 tracking-tight">Operational Excellence</h3>
                                <p className="text-lg text-blue-700/90 leading-relaxed font-light">Identifying and eliminating inefficiencies to maximize productivity.</p>
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
                            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-300 hover:-translate-y-2 h-full">
                                <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src="/icons/rising.png"
                                        alt="Performance Icon"
                                        width={75}
                                        height={75}
                                        className="w-24 h-24">

                                    </Image>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-6 tracking-tight">Performance Improvement</h3>
                                <p className="text-lg text-blue-700/90 leading-relaxed font-light">Driving measurable results through analytics, innovation, and best practices.</p>
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
                            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-300 hover:-translate-y-2 h-full">
                                <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src="/icons/growth.png"
                                        alt="Growth Icon"
                                        width={75}
                                        height={75}
                                        className="w-24 h-24">

                                    </Image>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-6 tracking-tight">Growth & Scaling Support</h3>
                                <p className="text-lg text-blue-700/90 leading-relaxed font-light">Guiding your organization through periods of rapid growth or change.</p>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-amber-50/20 to-white">
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
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-amber-900 mb-6 tracking-tight">
                                <span className="bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-600 bg-clip-text text-transparent">Our</span> Approach
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
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
                        delay={150}
                        enableScrollUp={true}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-800 mb-8 tracking-tight">
                                How We Work
                            </h3>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-amber-700/90 text-center mb-12 max-w-5xl mx-auto leading-relaxed font-light">
                                Our proven methodology ensures consistent results and sustainable growth for your business.
                            </p>
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
                        <div className="bg-gradient-to-r from-amber-50/50 to-yellow-50/30 backdrop-blur-sm border border-amber-200/50 rounded-xl p-8 lg:p-12 mb-8">
                            <h4 className="text-2xl lg:text-3xl font-bold text-amber-800 mb-8 lg:mb-10 text-center tracking-tight">
                                Our Process:
                            </h4>
                            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex justify-center items-center text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src="/icons/assesment.png"
                                            alt="Growth Icon"
                                            width={75}
                                            height={75}
                                            className="w-18 h-18">

                                        </Image>
                                    </div>
                                    <h5 className="text-xl lg:text-2xl font-bold text-amber-800 mb-2 tracking-tight">Assessment & Planning</h5>
                                </div>
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex justify-center items-center text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src="/icons/implementation.png"
                                            alt="Growth Icon"
                                            width={75}
                                            height={75}
                                            className="w-18 h-18">

                                        </Image>
                                    </div>
                                    <h5 className="text-xl lg:text-2xl font-bold text-amber-800 mb-2 tracking-tight">Implementation</h5>
                                </div>
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex justify-center items-center text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src="/icons/rising.png"
                                            alt="Growth Icon"
                                            width={75}
                                            height={75}
                                            className="w-18 h-18">

                                        </Image>
                                    </div>
                                    <h5 className="text-xl lg:text-2xl font-bold text-amber-800 mb-2 tracking-tight">Monitoring & Optimization</h5>
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
                                We begin with a thorough understanding of your business, challenges, and goals, then develop customized strategies that align with your vision.
                            </p>
                            <p className="text-lg text-amber-700 leading-relaxed">
                                Our collaborative approach ensures that you&apos;re involved every step of the way, from initial planning to final implementation and ongoing support.
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-amber-50/10 to-white">
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
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-amber-900 mb-6 tracking-tight">
                                <span className="bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-600 bg-clip-text text-transparent">Why Choose</span> Us?
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-amber-700/90 text-center mb-12 max-w-5xl mx-auto leading-relaxed font-light">
                                Discover what sets Badger State Solutions apart as your ideal business partner.
                            </p>
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
                        delay={150}
                        enableScrollUp={true}
                    >
                        <div className="bg-gradient-to-r from-blue-100/60 to-blue-200/40 backdrop-blur-sm border border-blue-300/60 rounded-2xl p-10 lg:p-12">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-12 text-center tracking-tight">Why Choose Us?</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏆</div>
                                    <p className="text-lg lg:text-xl text-blue-800 font-bold leading-relaxed">Industry experience across diverse sectors</p>
                                </div>
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                                    <p className="text-lg lg:text-xl text-blue-800 font-bold leading-relaxed">Customized strategies for your unique challenges</p>
                                </div>
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
                                    <p className="text-lg lg:text-xl text-blue-800 font-bold leading-relaxed">Hands-on support, not just advice</p>
                                </div>
                                <div className="group text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📈</div>
                                    <p className="text-lg lg:text-xl text-blue-800 font-bold leading-relaxed">Proven track record of delivering results</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-blue-50/40 via-white to-blue-50/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                        <div className="mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 mb-6 tracking-tight">
                                <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent">Contact</span> Us
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-700/90 mb-6 font-light leading-relaxed">
                                Ready to take your business to the next level?
                            </p>
                            <p className="text-lg sm:text-xl lg:text-2xl text-blue-700/80 mb-12 font-light">
                                We&apos;d love to hear from you!
                            </p>
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
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-300 hover:-translate-y-2">
                                <div className="text-center">
                                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📧</div>
                                    <p className="text-xl lg:text-2xl font-bold text-blue-800 mb-4 tracking-tight">Email Us</p>
                                    <a href="mailto:info@badgerstatesolutions.com" className="text-lg lg:text-xl text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium break-all">
                                        info@badgerstatesolutions.com
                                    </a>
                                </div>
                            </div>
                            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-300 hover:-translate-y-2">
                                <div className="text-center">
                                    <div className="text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌐</div>
                                    <p className="text-xl lg:text-2xl font-bold text-blue-800 mb-4 tracking-tight">Visit Our Website</p>
                                    <a href="https://www.badgerstatesolutions.com" className="text-lg lg:text-xl text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium">
                                        www.badgerstatesolutions.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Modern CTA Section */}
            <section className="py-24 sm:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 mesh-gradient opacity-20"></div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 sm:mb-10 tracking-tight leading-tight">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent animate-gradient">Transform Your Business?</span>
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
                        <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100/90 mb-12 sm:mb-14 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                            Partner with Badger State Solutions to unlock your organization&apos;s potential and achieve sustainable growth
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
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
                            <button
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white px-10 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl text-lg sm:text-xl lg:text-2xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border border-blue-500/20 backdrop-blur-sm w-full sm:w-auto tracking-tight"
                            >
                                <span className="relative z-10">🚀 Schedule Consultation</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white px-10 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl text-lg sm:text-xl lg:text-2xl font-bold hover:shadow-2xl hover:shadow-white/10 hover:scale-105 transition-all duration-300 border border-white/20 hover:bg-white/20 w-full sm:w-auto tracking-tight">
                                <span className="relative z-10">📖 Learn More</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Simple Copyright Footer */}
            <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8 lg:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-base lg:text-lg text-blue-100/90 font-light tracking-wide">
                        &copy; 2025 Badger State Solutions. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default BadgerStateSolutions;
