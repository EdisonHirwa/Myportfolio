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
    // Left cluster
    { icon: Code2,      top: '14%', left: '6%',   dur: 7,  dx: 14,  dy: 20,  color: '#a78bfa' },
    { icon: Braces,     top: '30%', left: '11%',  dur: 9,  dx: -10, dy: 16,  color: '#f0db4f' },
    { icon: Globe,      top: '48%', left: '5%',   dur: 8,  dx: 16,  dy: -12, color: '#22d3ee' },
    { icon: Figma,      top: '22%', left: '21%',  dur: 11, dx: -8,  dy: 22,  color: '#e879f9' },
    { icon: GitBranch,  top: '60%', left: '14%',  dur: 10, dx: 12,  dy: -18, color: '#f97316' },
    { icon: Smartphone, top: '38%', left: '25%',  dur: 8,  dx: -14, dy: 10,  color: '#a78bfa' },
    { icon: Cpu,        top: '68%', left: '8%',   dur: 12, dx: 10,  dy: -14, color: '#34d399' },
    // Right cluster
    { icon: Layers,     top: '16%', right: '8%',  dur: 9,  dx: -12, dy: 18,  color: '#60a5fa' },
    { icon: Zap,        top: '32%', right: '16%', dur: 7,  dx: 16,  dy: -10, color: '#fbbf24' },
    { icon: Server,     top: '52%', right: '6%',  dur: 10, dx: -10, dy: 20,  color: '#a78bfa' },
    { icon: Terminal,   top: '24%', right: '25%', dur: 8,  dx: 8,   dy: -16, color: '#34d399' },
    { icon: Package,    top: '62%', right: '18%', dur: 11, dx: -16, dy: 12,  color: '#fb923c' },
    { icon: Database,   top: '44%', right: '27%', dur: 9,  dx: 12,  dy: 14,  color: '#0ea5e9' },
    { icon: Layout,     top: '70%', right: '9%',  dur: 7,  dx: -8,  dy: -18, color: '#e879f9' },
    { icon: Wifi,       top: '76%', left: '28%',  dur: 10, dx: 10,  dy: -10, color: '#22d3ee' },
];

/* ─── Social sidebar ─── */
const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn',  color: '#0a66c2' },
    { icon: Github,   href: 'https://github.com/',      label: 'GitHub',    color: '#a78bfa' },
    { icon: Twitter,  href: 'https://twitter.com/',     label: 'Twitter',   color: '#1d9bf0' },
    { icon: Mail,     href: 'mailto:hirwae@example.com',label: 'Email',     color: '#e879f9' },
];

/* ─── Rotating roles ─── */
const roles = [
    'Frontend Developer',
    'UI/UX Designer',
    'Network Administrator',
    'IT Student',
];

/* ─── Ambient particle dots ─── */
const Particles = () => {
    const particles = useRef(
        Array.from({ length: 45 }, () => ({
            x:       Math.random() * 100,
            y:       Math.random() * 100,
            size:    Math.random() * 2.5 + 0.8,
            dur:     Math.random() * 5 + 4,
            delay:   Math.random() * 6,
            opacity: Math.random() * 0.25 + 0.05,
            hue:     Math.random() > 0.5 ? '#a78bfa' : '#e879f9',
        }))
    );
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.current.map((p, i) => (
                <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left:            `${p.x}%`,
                        top:             `${p.y}%`,
                        width:           `${p.size}px`,
                        height:          `${p.size}px`,
                        backgroundColor: p.hue,
                        opacity:         p.opacity,
                        animation: `particleDrift ${p.dur}s ease-in-out infinite alternate`,
                        animationDelay:  `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

const Hero = () => {
    const [roleIndex,   setRoleIndex]   = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting,  setIsDeleting]  = useState(false);
    const [loaded,      setLoaded]      = useState(false);
    const [spinning,    setSpinning]    = useState(true);

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
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* ── Dark background ── */}
            <div className="absolute inset-0 bg-zinc-950" />

            {/* ── Hero radial tint ── */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(109,40,217,0.18)_0%,transparent_60%)]" />

            {/* ── Ambient gradient orbs ── */}
            <div className="absolute top-[-20%] left-[-10%] w-[560px] h-[560px] rounded-full bg-brand-600/[0.12] blur-[130px] animate-[orb1_14s_ease-in-out_infinite]" />
            <div className="absolute bottom-[-15%] right-[-8%]  w-[440px] h-[440px] rounded-full bg-fuchsia-500/[0.09] blur-[110px] animate-[orb2_11s_ease-in-out_infinite]" />
            <div className="absolute top-[35%] right-[18%]      w-[320px] h-[320px] rounded-full bg-highlight-500/[0.06] blur-[90px]  animate-[orb3_16s_ease-in-out_infinite]" />

            {/* ── Subtle grid overlay ── */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '64px 64px',
                }}
            />

            {/* ── Ambient particles ── */}
            <Particles />

            {/* ── Floating Lucide icons ── */}
            {floatingIcons.map(({ icon: Icon, color, dur, dx, dy, ...pos }, i) => (
                <div
                    key={i}
                    className="absolute select-none pointer-events-none hidden md:block"
                    style={{
                        ...pos,
                        opacity: 0,
                        animation: `iconAppear 1.4s ease-out ${0.4 + i * 0.12}s forwards`,
                    }}
                    aria-hidden="true"
                >
                    <div
                        style={{
                            animation: `iconOrbit ${dur}s ease-in-out infinite`,
                            '--dx': `${dx}px`,
                            '--dy': `${dy}px`,
                            color,
                            filter: `drop-shadow(0 0 8px ${color}80)`,
                        }}
                    >
                        <Icon size={22} strokeWidth={1.5} />
                    </div>
                </div>
            ))}

            {/* ── Social sidebar (desktop) ── */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group relative p-2.5 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/[0.08] text-zinc-400 transition-all duration-300 hover:scale-110 hover:border-transparent"
                        style={{
                            opacity: 0,
                            animation: `slideInRight 0.5s ease-out ${1.3 + i * 0.1}s forwards`,
                        }}
                    >
                        {/* Hover bg gradient */}
                        <span
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: `${color}22` }}
                        />
                        <Icon
                            size={17}
                            className="relative transition-colors duration-300"
                            style={{ color: undefined }}
                            /* color via group-hover trick on wrapper */
                        />
                        <span
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{ boxShadow: `0 0 16px ${color}50` }}
                        />
                        {/* Force icon color on hover via CSS variable trick */}
                        <style>{`
                            a[aria-label="${label}"]:hover svg { color: ${color}; }
                        `}</style>
                    </a>
                ))}
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-20">

                {/* Badge pill */}
                <div
                    className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold tracking-wider transition-all duration-1000"
                    style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(-20px)' }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight-400 animate-pulse" />
                    Available for work · Rwanda, Africa
                </div>

                {/* Heading */}
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 transition-all duration-1000"
                    style={{
                        opacity:   loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(40px)',
                    }}
                >
                    Hello{' '}
                    <span
                        className="inline-block"
                        style={{ animation: 'wave 2.5s ease-in-out infinite' }}
                    >
                        👋
                    </span>
                    , I'm{' '}
                    <span className="gradient-text">Edison Hirwa</span>
                </h1>

                {/* Rotating role */}
                <p
                    className="text-xl sm:text-2xl md:text-3xl text-zinc-400 mb-10 h-10 transition-all duration-1000 delay-200"
                    style={{
                        opacity:   loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    }}
                >
                    and I'm a{' '}
                    <span
                        className="font-semibold"
                        style={{
                            background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor:  'transparent',
                        }}
                    >
                        {displayText}
                        <span className="animate-[blink_1s_steps(2)_infinite]" style={{ WebkitTextFillColor: '#22d3ee' }}>|</span>
                    </span>
                </p>

                {/* Profile photo with spinning gradient ring */}
                <div
                    className="relative mb-10 transition-all duration-1000 delay-500"
                    style={{
                        opacity:   loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.8)',
                    }}
                    onMouseEnter={() => setSpinning(false)}
                    onMouseLeave={() => setSpinning(true)}
                >
                    {/* Pulsing glow */}
                    <div
                        className="absolute -inset-5 rounded-full blur-2xl"
                        style={{
                            background: 'conic-gradient(from 0deg, #8b5cf655, #d946ef40, #22d3ee30, #8b5cf655)',
                            animation:  spinning ? 'glowPulse 3.5s ease-in-out infinite' : 'none',
                        }}
                    />
                    {/* Spinning conic ring */}
                    <div
                        className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-[3px]"
                        style={{
                            background: 'conic-gradient(from 0deg, #8b5cf6, #d946ef, #22d3ee, #8b5cf6)',
                            animation:  spinning ? 'spinRing 7s linear infinite' : 'none',
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-zinc-950 p-1">
                            <img
                                src={profileImg}
                                alt="Edison Hirwa"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-700"
                    style={{
                        opacity:   loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    }}
                >
                    {/* Primary */}
                    <button
                        id="hero-view-projects"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                        style={{
                            background:  'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
                            boxShadow:   '0 0 30px rgba(139,92,246,0.4), 0 4px 20px rgba(0,0,0,0.3)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 50px rgba(139,92,246,0.6), 0 8px 30px rgba(0,0,0,0.4)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.4), 0 4px 20px rgba(0,0,0,0.3)'}
                    >
                        {/* Shimmer sweep */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative">View Projects</span>
                        <ArrowRight size={17} className="relative group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    {/* Secondary */}
                    <button
                        id="hero-contact"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-zinc-200 border border-white/10 hover:border-brand-500/50 hover:text-white hover:bg-brand-500/[0.08] transition-all duration-300 hover:-translate-y-1.5"
                    >
                        <Mail size={17} className="text-fuchsia-400 group-hover:scale-110 transition-transform" />
                        Contact Me
                    </button>
                </div>

                {/* Scroll hint */}
                <div
                    className="mt-14 flex flex-col items-center gap-2 text-zinc-600 transition-all duration-1000 delay-1000"
                    style={{ opacity: loaded ? 1 : 0 }}
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ChevronDown size={16} className="animate-bounce" />
                </div>

                {/* Mobile social icons */}
                <div
                    className="flex md:hidden items-center gap-3 mt-8"
                    style={{
                        opacity:    loaded ? 1 : 0,
                        transition: 'opacity 0.8s ease-out 1.2s',
                    }}
                >
                    {socialLinks.map(({ icon: Icon, href, label, color }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                            style={{ '--hover-color': color }}
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
