'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Animation component for scroll-triggered animations
interface AnimatedContentProps {
    children: React.ReactNode;
    distance?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    initialOpacity?: number;
    animateOpacity?: boolean;
    scale?: number;
    threshold?: number;
    delay?: number;
    enableScrollUp?: boolean;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
    children,
    distance = 50,
    direction = 'vertical',
    reverse = false,
    initialOpacity = 0,
    animateOpacity = true,
    scale = 1,
    threshold = 0.1,
    delay = 0,
    enableScrollUp = false
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && (!hasAnimated || enableScrollUp)) {
                    setTimeout(() => {
                        setIsVisible(true);
                        if (!enableScrollUp) {
                            setHasAnimated(true);
                        }
                    }, delay);
                } else if (!entry.isIntersecting && enableScrollUp) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, delay, hasAnimated, enableScrollUp]);

    const getTransform = () => {
        if (!isVisible) {
            const translateValue = reverse ? -distance : distance;
            if (direction === 'horizontal') {
                return `translateX(${translateValue}px) scale(${scale})`;
            } else {
                return `translateY(${translateValue}px) scale(${scale})`;
            }
        }
        return `translateX(0) translateY(0) scale(1)`;
    };

    return (
        <div
            ref={elementRef}
            style={{
                transform: getTransform(),
                opacity: animateOpacity ? (isVisible ? 1 : initialOpacity) : 1,
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
        >
            {children}
        </div>
    );
};

const BadgerStateSolutions: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(false);
    };

    const handleHeaderDropdownClick = () => {
        setIsHeaderDropdownOpen(!isHeaderDropdownOpen);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header - Modern sticky design */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 lg:py-5">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                                <Image
                                    src="logo.svg"
                                    alt="Badger State Solutions Logo"
                                    width={45}
                                    height={45}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                                    Badger State Solutions
                                </h1>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            <a href="#about" className="px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium relative group">
                                About
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                            </a>
                            <a href="#services" className="px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium relative group">
                                Services
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                            </a>
                            <a href="#approach" className="px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium relative group">
                                Approach
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                            </a>
                            <div className="relative">
                                <button
                                    onClick={handleHeaderDropdownClick}
                                    className="flex items-center space-x-1 px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium relative group"
                                >
                                    <span>Email Us</span>
                                    <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isHeaderDropdownOpen ? 'rotate-180' : ''}`} />
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                                </button>
                                {isHeaderDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-200 z-50 transform transition-all duration-300">
                                        <div className="p-2">
                                            <a
                                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@badgerstatesolutions.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group/item"
                                                onClick={() => setIsHeaderDropdownOpen(false)}
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">G</div>
                                                <span className="font-medium">Gmail</span>
                                                <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://outlook.live.com/mail/0/deeplink/compose?to=info@badgerstatesolutions.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group/item"
                                                onClick={() => setIsHeaderDropdownOpen(false)}
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">O</div>
                                                <span className="font-medium">Outlook</span>
                                                <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-indigo-50 hover:border-indigo-200 border border-transparent transition-all duration-200 group"
                        >
                            <div className="w-5 h-5 flex flex-col justify-center items-center">
                                <span className={`block w-4 h-0.5 bg-slate-700 group-hover:bg-indigo-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                                <span className={`block w-4 h-0.5 bg-slate-700 group-hover:bg-indigo-600 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-4 h-0.5 bg-slate-700 group-hover:bg-indigo-600 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden pb-6 border-t border-slate-200/50 pt-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col space-y-3">
                                    <a href="#about" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                                    <a href="#services" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
                                    <a href="#approach" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Approach</a>
                                </div>
                                <div className="space-y-3 border-t border-slate-200 pt-4">
                                    <div className="text-slate-600 font-medium text-sm">Choose your email client:</div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@badgerstatesolutions.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                                            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">G</div>
                                            <span className="text-sm font-medium text-slate-700">Gmail</span>
                                        </a>
                                        <a href="https://outlook.live.com/mail/0/deeplink/compose?to=info@badgerstatesolutions.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold">O</div>
                                            <span className="text-sm font-medium text-slate-700">Outlook</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section - Arc.net inspired bold design */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 pt-16 lg:pt-20">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        animation: 'grid-move 20s linear infinite'
                    }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-indigo-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={0.9}
                        threshold={0.1}
                        delay={200}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-10 tracking-[-0.02em] leading-[0.85] antialiased">
                            <span className="block font-light text-white/90 mb-2">Business</span>
                            <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-black tracking-[-0.04em]">
                                Transformed
                            </span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={80}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={400}
                    >
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200/90 mb-16 max-w-5xl mx-auto leading-[1.4] font-normal tracking-[-0.01em] antialiased">
                            We don&apos;t just advise—we <em className="font-medium text-white not-italic">transform</em>. Partner with us to unlock exponential growth,
                            streamline operations, and build the future your business deserves.
                        </p>
                    </AnimatedContent>



                    <AnimatedContent
                        distance={40}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={800}
                    >
                        <div className="grid grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto text-slate-200/80">
                            <div className="text-center group">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-[-0.02em] antialiased">Proven<br></br> Results</div>
                                <div className="text-sm lg:text-base font-medium text-slate-300/90 tracking-wide uppercase">Businesses Transformed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-[-0.02em] antialiased">Growth<br></br> Delivered</div>
                                <div className="text-sm lg:text-base font-medium text-slate-300/90 tracking-wide uppercase">Revenue & Results</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-[-0.02em] antialiased">Trusted<br></br> Partners</div>
                                <div className="text-sm lg:text-base font-medium text-slate-300/90 tracking-wide uppercase">Leading with Insight</div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* About Section - Arc.net inspired clean design */}
            <section id="about" className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedContent
                        distance={80}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={100}
                        enableScrollUp={true}
                    >
                        <div className="text-center mb-16 lg:mb-20">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                                About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Us</span>
                            </h2>
                            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                                Transforming businesses through strategic innovation and operational excellence.
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={150}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                                <p className="text-slate-600 leading-relaxed">To empower businesses with transformative strategies that drive sustainable growth, operational efficiency, and market leadership.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={200}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                                <p className="text-slate-600 leading-relaxed">To be the catalyst that transforms ambitious businesses into industry leaders through innovative solutions and strategic excellence.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={250}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Experience</h3>
                                <p className="text-slate-600 leading-relaxed">With over 15 years of proven expertise, we've successfully transformed 500+ businesses across diverse industries.</p>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Services Section - Arc.net inspired card design */}
            <section id="services" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-indigo-50/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedContent
                        distance={80}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={100}
                        enableScrollUp={true}
                    >
                        <div className="text-center mb-16 lg:mb-20">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                                Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                            </h2>
                            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                                Comprehensive solutions designed to accelerate your business transformation.
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={150}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Strategy Development</h3>
                                <p className="text-slate-600 leading-relaxed">Craft data-driven strategies that align with your vision and market opportunities.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={200}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Operational Excellence</h3>
                                <p className="text-slate-600 leading-relaxed">Optimize processes and eliminate inefficiencies to maximize productivity and ROI.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={250}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Performance Analytics</h3>
                                <p className="text-slate-600 leading-relaxed">Drive measurable results through advanced analytics and performance optimization.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={300}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Growth Acceleration</h3>
                                <p className="text-slate-600 leading-relaxed">Scale your business with confidence through strategic growth planning and execution.</p>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Approach Section - Arc.net inspired process design */}
            <section id="approach" className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedContent
                        distance={80}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={100}
                        enableScrollUp={true}
                    >
                        <div className="text-center mb-16 lg:mb-20">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                                Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Approach</span>
                            </h2>
                            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                                A proven methodology that delivers consistent, measurable results for sustainable growth.
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={150}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-black text-lg">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Discover & Analyze</h3>
                                <p className="text-slate-600 leading-relaxed">Deep dive into your business to understand challenges, opportunities, and untapped potential.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={200}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-black text-lg">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Design & Strategize</h3>
                                <p className="text-slate-600 leading-relaxed">Create customized solutions and strategic roadmaps tailored to your specific goals and market position.</p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={250}
                            enableScrollUp={true}
                        >
                            <div className="group p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-black text-lg">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Deploy & Optimize</h3>
                                <p className="text-slate-600 leading-relaxed">Implement solutions with hands-on support and continuously optimize for maximum impact and ROI.</p>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Contact Section - Arc.net inspired minimal design */}
            <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <AnimatedContent
                        distance={80}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={100}
                        enableScrollUp={true}
                    >
                        <div className="mb-16">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                                Ready to <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Transform?</span>
                            </h2>
                            <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed font-light">
                                Let&apos;s discuss how we can accelerate your business growth and unlock your organization&apos;s full potential.
                            </p>
                        </div>
                    </AnimatedContent>



                    <AnimatedContent
                        distance={40}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={300}
                        enableScrollUp={true}
                    >
                        <div className="flex justify-center">
                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                                <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/20">
                                    Email Us for Free Consultation
                                    <svg className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 transition-all duration-500 z-50 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                                    <div className="p-2">
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@badgerstatesolutions.com&su=Free%20Consultation%20Request" target="_blank" rel="noopener noreferrer" onClick={handleDropdownClick} className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group/item">
                                            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">G</div>
                                            <span className="font-medium">Gmail</span>
                                            <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a href="https://outlook.live.com/mail/0/deeplink/compose?to=info@badgerstatesolutions.com&subject=Free%20Consultation%20Request" target="_blank" rel="noopener noreferrer" onClick={handleDropdownClick} className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group/item">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">O</div>
                                            <span className="font-medium">Outlook</span>
                                            <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Footer - Arc.net inspired minimal footer */}
            <footer className="bg-slate-900 text-white py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-3 mb-6 md:mb-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-base">BS</span>
                            </div>
                            <span className="text-xl font-bold">Badger State Solutions</span>
                        </div>
                        <p className="text-slate-400 text-base">
                            &copy; 2025 Badger State Solutions. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes grid-move {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                @keyframes animate-spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: animate-spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default BadgerStateSolutions;
