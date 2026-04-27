import { useState, useEffect, useRef } from 'react';
import {
    Github, Linkedin, Twitter, Mail,
    Code2, Globe, Figma, Terminal, Layers,
    Cpu, Wifi, Database, GitBranch, Layout,
    Braces, Smartphone, Server, Zap, Package,
    ChevronDown, ArrowRight,
} from 'lucide-react';
import profileImg from '../assets/profile 2026-02-24 at 12.48.45 PM.jpeg';

/* ─── Floating Lucide icons with individual orbital paths ─── */
const floatingIcons = [
    { icon: Code2, top: '10%', left: '5%', dur: 7, dx: 14, dy: 20, color: '#a78bfa' },
    { icon: Braces, top: '25%', left: '12%', dur: 9, dx: -10, dy: 16, color: '#f0db4f' },
    { icon: Globe, top: '50%', left: '8%', dur: 8, dx: 16, dy: -12, color: '#22d3ee' },
    { icon: Figma, top: '20%', left: '25%', dur: 11, dx: -8, dy: 22, color: '#e879f9' },
    { icon: GitBranch, top: '65%', left: '15%', dur: 10, dx: 12, dy: -18, color: '#f97316' },
    { icon: Layers, top: '15%', right: '10%', dur: 9, dx: -12, dy: 18, color: '#60a5fa' },
    { icon: Zap, top: '30%', right: '15%', dur: 7, dx: 16, dy: -10, color: '#fbbf24' },
    { icon: Server, top: '55%', right: '5%', dur: 10, dx: -10, dy: 20, color: '#a78bfa' },
    { icon: Database, top: '45%', right: '25%', dur: 9, dx: 12, dy: 14, color: '#0ea5e9' },
    { icon: Layout, top: '75%', right: '12%', dur: 7, dx: -8, dy: -18, color: '#e879f9' },
];

const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn', color: '#0a66c2' },
    { icon: Github, href: 'https://github.com/', label: 'GitHub', color: '#a78bfa' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter', color: '#1d9bf0' },
    { icon: Mail, href: 'mailto:hirwae@example.com', label: 'Email', color: '#e879f9' },
];

const roles = [
    'Frontend Developer',
    'UI/UX Designer',
    'Network Administrator',
    'IT Student',
];

const Particles = () => {
    const particles = useRef(
        Array.from({ length: 50 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            dur: Math.random() * 5 + 5,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.4 + 0.1,
        }))
    );
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.current.map((p, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        animation: `particleDrift ${p.dur}s ease-in-out infinite alternate`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 120);
        return () => clearTimeout(t);
    }, []);

    // Typewriter
    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;
        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            const speed = isDeleting ? 38 : 75;
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? currentRole.substring(0, displayText.length - 1)
                        : currentRole.substring(0, displayText.length + 1)
                );
            }, speed);
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20 pb-12"
        >
            {/* ── Background Image from Assets ── */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={profileImg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* ── Dark Overlay for Readability ── */}
            <div className="absolute inset-0 bg-zinc-950/90" />

            {/* ── Ambient Stars / Particles ── */}
            <Particles />

            {/* ── Floating Icons ── */}
            {floatingIcons.map(({ icon: Icon, color, dur, dx, dy, ...pos }, i) => (
                <div
                    key={i}
                    className="absolute select-none pointer-events-none hidden md:block z-0"
                    style={{
                        ...pos,
                        opacity: 0,
                        animation: `fadeIn 1.4s ease-out ${0.4 + i * 0.1}s forwards`,
                    }}
                >
                    <div
                        style={{
                            animation: `float ${dur}s ease-in-out infinite`,
                            color: 'rgba(255,255,255,0.8)',
                            filter: `drop-shadow(0 0 10px rgba(255,255,255,0.6))`,
                        }}
                    >
                        <Icon size={24} strokeWidth={1.5} />
                    </div>
                </div>
            ))}

            {/* ── Main Content Layout ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
                
                {/* ── Left Column: Text Content ── */}
                <div 
                    className="flex-1 flex flex-col items-start text-left transition-all duration-1000"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-40px)',
                    }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl">
                        Hello 👋,
                        <br />
                        I'm Edison Hirwa
                    </h1>

                    <p className="text-xl sm:text-2xl text-zinc-200 mb-8 h-10 flex items-center drop-shadow-lg">
                        and I'm a{' '}
                        <span className="font-semibold text-white ml-2">
                            {displayText}
                            <span className="animate-pulse text-fuchsia-400">|</span>
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5 mt-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/40 backdrop-blur-xl shadow-xl transition-all duration-300"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600/90 to-brand-600/90 hover:from-fuchsia-500 hover:to-brand-500 shadow-[0_0_30px_rgba(217,70,239,0.5)] border border-white/20 backdrop-blur-xl transition-all duration-300"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* ── Right Column: Glassmorphism Card ── */}
                <div 
                    className="w-full lg:w-[450px] relative transition-all duration-1000 delay-300"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(40px)',
                    }}
                >
                    <div className="glass-card relative overflow-hidden bg-white/[0.15] backdrop-blur-3xl border border-white/30 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.2)] p-8 sm:p-10 flex flex-col items-center">
                        
                        {/* Card inner glow */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.15] to-transparent pointer-events-none" />

                        {/* Profile Image inside Glass Card */}
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full mb-8 mt-2 shadow-[0_0_50px_rgba(0,0,0,0.6)] border-4 border-white/30 overflow-hidden group">
                            <img
                                src={profileImg}
                                alt="Edison Hirwa"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Details mimicking form fields */}
                        <div className="w-full space-y-4">
                            <div className="w-full bg-white/[0.1] border border-white/20 rounded-xl px-5 py-4 backdrop-blur-lg shadow-inner flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-white/70 mb-1 font-bold">Location</span>
                                <span className="text-sm text-white font-medium">Rwanda, Africa</span>
                            </div>

                            <div className="w-full bg-white/[0.1] border border-white/20 rounded-xl px-5 py-4 backdrop-blur-lg shadow-inner flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-white/70 mb-1 font-bold">Status</span>
                                <span className="text-sm text-white font-medium">Available for Freelance</span>
                            </div>

                            {/* Socials embedded in card */}
                            <div className="w-full bg-white/[0.1] border border-white/20 rounded-xl px-5 py-4 backdrop-blur-lg shadow-inner flex justify-between items-center mt-2">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="text-white/80 hover:text-white hover:scale-110 transition-all p-2 drop-shadow-md"
                                    >
                                        <Icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* ── Scroll hint ── */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 transition-all duration-1000 delay-700"
                style={{ opacity: loaded ? 1 : 0 }}
            >
                <ChevronDown size={24} className="animate-bounce" />
            </div>
        </section>
    );
};

export default Hero;
