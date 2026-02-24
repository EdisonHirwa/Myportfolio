import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import profileImg from '../assets/profile 2026-02-24 at 12.48.45 PM.jpeg';

/* ─── Floating tech icons with unique orbital paths ─── */
const floatingIcons = [
    // Left cluster
    { emoji: '⚛️', top: '15%', left: '6%', dur: 7, dx: 12, dy: 18 },
    { emoji: '🟨', top: '32%', left: '12%', dur: 9, dx: -8, dy: 14 },
    { emoji: '🌐', top: '48%', left: '5%', dur: 8, dx: 15, dy: -10 },
    { emoji: '🎨', top: '22%', left: '20%', dur: 11, dx: -6, dy: 20 },
    { emoji: '🐙', top: '58%', left: '14%', dur: 10, dx: 10, dy: -15 },
    { emoji: '📱', top: '38%', left: '25%', dur: 8, dx: -12, dy: 8 },
    { emoji: '🟢', top: '65%', left: '9%', dur: 12, dx: 8, dy: -12 },
    // Right cluster
    { emoji: '🔷', top: '18%', right: '8%', dur: 9, dx: -10, dy: 16 },
    { emoji: '🚀', top: '34%', right: '16%', dur: 7, dx: 14, dy: -8 },
    { emoji: '💻', top: '52%', right: '6%', dur: 10, dx: -8, dy: 18 },
    { emoji: '🔥', top: '26%', right: '24%', dur: 8, dx: 6, dy: -14 },
    { emoji: '📦', top: '60%', right: '18%', dur: 11, dx: -14, dy: 10 },
    { emoji: '🧩', top: '44%', right: '26%', dur: 9, dx: 10, dy: 12 },
    { emoji: '⚡', top: '68%', right: '10%', dur: 7, dx: -6, dy: -16 },
];

/* ─── Social sidebar links ─── */
const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hirwae@example.com', label: 'Email' },
];

/* ─── Roles for typewriter rotation ─── */
const roles = ['Frontend Developer', 'UI/UX Designer', 'Network Administrator', 'IT Student'];

/* ─── Particle component for ambient dots ─── */
const Particles = () => {
    const particles = useRef(
        Array.from({ length: 40 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            dur: Math.random() * 4 + 4,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.3 + 0.05,
        }))
    );

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.current.map((p, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-indigo-400"
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
    const [spinning, setSpinning] = useState(true);

    // Entrance trigger
    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    // Typewriter effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            const speed = isDeleting ? 40 : 80;
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

            {/* ── Ambient gradient orbs ── */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-[orb1_12s_ease-in-out_infinite]" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-[orb2_10s_ease-in-out_infinite]" />
            <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[80px] animate-[orb3_14s_ease-in-out_infinite]" />

            {/* ── Subtle grid overlay ── */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* ── Ambient particles ── */}
            <Particles />

            {/* ── Floating tech icons with smooth orbits ── */}
            {floatingIcons.map(({ emoji, dur, dx, dy, ...pos }, i) => (
                <div
                    key={i}
                    className="absolute text-2xl select-none pointer-events-none hidden md:block"
                    style={{
                        ...pos,
                        opacity: 0,
                        animation: `iconFloat ${dur}s ease-in-out infinite, iconAppear 1.5s ease-out ${0.5 + i * 0.15}s forwards`,
                    }}
                    aria-hidden="true"
                >
                    <div
                        style={{
                            animation: `iconOrbit ${dur}s ease-in-out infinite`,
                            '--dx': `${dx}px`,
                            '--dy': `${dy}px`,
                        }}
                    >
                        {emoji}
                    </div>
                </div>
            ))}

            {/* ── Social sidebar ── */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
                {socialLinks.map(({ icon: Icon, href, label }, i) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-2.5 rounded-xl bg-zinc-800/80 backdrop-blur-sm border border-white/10 text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all duration-300 shadow-lg"
                        style={{
                            opacity: 0,
                            animation: `slideInRight 0.5s ease-out ${1.2 + i * 0.1}s forwards`,
                        }}
                    >
                        <Icon size={18} />
                    </a>
                ))}
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-20">
                {/* Greeting */}
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 transition-all duration-1000"
                    style={{
                        opacity: loaded ? 1 : 0,
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
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    }}
                >
                    and I'm a{' '}
                    <span className="text-emerald-400 font-semibold">
                        {displayText}
                        <span className="animate-[blink_1s_steps(2)_infinite] text-emerald-400">|</span>
                    </span>
                </p>

                {/* Profile photo with spinning gradient ring — pauses on hover */}
                <div
                    className="relative mb-10 transition-all duration-1000 delay-500"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.8)',
                    }}
                    onMouseEnter={() => setSpinning(false)}
                    onMouseLeave={() => setSpinning(true)}
                >
                    {/* Pulsing glow */}
                    <div
                        className="absolute -inset-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur-2xl opacity-30"
                        style={{ animation: spinning ? 'glowPulse 3s ease-in-out infinite' : 'none' }}
                    />
                    {/* Spinning outer ring */}
                    <div
                        className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-[3px] transition-all duration-500"
                        style={{
                            background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #10b981, #6366f1)',
                            animation: spinning ? 'spinRing 8s linear infinite' : 'none',
                        }}
                    >
                        {/* Inner photo circle */}
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
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    }}
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Shine sweep on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative">View Projects</span>
                        <span className="relative group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 rounded-xl border border-white/15 text-zinc-300 hover:text-white hover:bg-white/5 hover:border-white/30 font-semibold transition-all duration-300 hover:-translate-y-1"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Mobile social icons */}
                <div className="flex md:hidden items-center gap-3 mt-8"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.8s ease-out 1s',
                    }}
                >
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
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
