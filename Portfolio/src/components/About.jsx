import { MapPin, Briefcase, GraduationCap, Lightbulb, Target, HeartHandshake, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile 2026-02-24 at 12.48.45 PM.jpeg';

const infoChips = [
    { icon: MapPin,         label: 'Rwanda, Africa',  color: 'text-highlight-400' },
    { icon: Briefcase,      label: 'Open to Work',    color: 'text-fuchsia-400'   },
    { icon: GraduationCap,  label: 'IT Student',      color: 'text-brand-400'     },
];

const missionCards = [
    {
        icon:        Lightbulb,
        iconColor:   '#fbbf24',
        iconBg:      'rgba(251,191,36,0.12)',
        title:       'My Mission',
        description: 'To build solutions that matter and leave a lasting impact. Every line of code I write is driven by a deeper mission — using technology to solve real-world problems, empower communities, and create meaningful digital impact.',
        border:      'hover:border-yellow-400/30',
        glow:        'hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]',
    },
    {
        icon:        Target,
        iconColor:   '#e879f9',
        iconBg:      'rgba(232,121,249,0.12)',
        title:       'My Goals',
        description: "Contribute to open-source projects, master full-stack development, and create innovative web tools that make a real impact in people's lives.",
        border:      'hover:border-fuchsia-400/30',
        glow:        'hover:shadow-[0_0_30px_rgba(232,121,249,0.08)]',
    },
    {
        icon:        HeartHandshake,
        iconColor:   '#f87171',
        iconBg:      'rgba(248,113,113,0.12)',
        title:       'Hobbies & Interests',
        description: 'Crafting pixel-perfect UIs, exploring new JavaScript frameworks, solving complex problems, reading books, playing volleyball, and listening to music.',
        border:      'hover:border-red-400/30',
        glow:        'hover:shadow-[0_0_30px_rgba(248,113,113,0.08)]',
    },
];

const About = () => {
    return (
        <section id="about" className="section-padding bg-zinc-950 relative overflow-hidden">
            {/* subtle orb */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/[0.06] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-container relative">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.25em] text-brand-400 uppercase mb-3">
                        Get to know me
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #8b5cf6, #d946ef)' }} />
                </div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
                    {/* Left: decorative card */}
                    <div className="relative flex items-center justify-center order-2 lg:order-1">
                        {/* Glow */}
                        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-brand-500/20 to-fuchsia-500/15 blur-3xl pointer-events-none" />
                        {/* Card */}
                        <div
                            className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-[2px] shadow-2xl animate-float"
                            style={{ background: 'linear-gradient(135deg, #8b5cf6, #d946ef, #22d3ee)' }}
                        >
                            <div className="w-full h-full rounded-3xl bg-zinc-900 flex flex-col items-center justify-center gap-4 p-6">
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 blur" />
                                    <img
                                        src={profileImg}
                                        alt="Edison Hirwa"
                                        className="relative w-20 h-20 rounded-full object-cover border-2 border-zinc-800"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-bold text-lg">Edison Hirwa</p>
                                    <p className="gradient-text text-sm font-semibold">IT Student & Frontend Dev</p>
                                </div>
                                {/* Mini stats */}
                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <div className="bg-white/[0.05] rounded-xl p-3 text-center border border-white/[0.07]">
                                        <p className="text-brand-400 font-black text-xl">1</p>
                                        <p className="text-zinc-500 text-xs mt-0.5">Year Coding</p>
                                    </div>
                                    <div className="bg-white/[0.05] rounded-xl p-3 text-center border border-white/[0.07]">
                                        <p className="text-fuchsia-400 font-black text-xl">4</p>
                                        <p className="text-zinc-500 text-xs mt-0.5">Projects Built</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: text */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            IT Student &amp;{' '}
                            <span className="gradient-text">Frontend Developer</span>
                        </h3>
                        <p className="text-zinc-400 leading-relaxed mb-5 text-base sm:text-lg">
                            I'm <strong className="text-white">Edison Hirwa</strong>, a passionate and
                            purpose-driven software developer from Rwanda. As an Information Technology
                            student, I'm deeply focused on using technology to solve real-world problems,
                            empower communities, and create meaningful digital impact.
                        </p>
                        <p className="text-zinc-400 leading-relaxed mb-8 text-base sm:text-lg">
                            Every line of code I write is driven by a deeper mission: to build solutions
                            that matter and leave a lasting impact. For me, software development isn't just
                            about completing assignments — it's about transforming ideas into tools that
                            improve lives.
                        </p>

                        {/* Info chips */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {infoChips.map(({ icon: Icon, label, color }) => (
                                <span
                                    key={label}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.09] text-sm text-zinc-300 hover:border-brand-500/30 transition-colors duration-200"
                                >
                                    <Icon size={13} className={color} />
                                    {label}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                background:  'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                boxShadow:   '0 0 25px rgba(139,92,246,0.3)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(139,92,246,0.5)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(139,92,246,0.3)'}
                        >
                            Let's Work Together
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* Mission / Goals / Loves Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {missionCards.map(({ icon: Icon, iconColor, iconBg, title, description, border, glow }) => (
                        <div
                            key={title}
                            className={`glass-card p-7 ${border} ${glow} hover:-translate-y-1.5 transition-all duration-300 group`}
                        >
                            {/* Icon badge */}
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                style={{ background: iconBg }}
                            >
                                <Icon size={22} style={{ color: iconColor }} strokeWidth={1.8} />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">{title}</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
