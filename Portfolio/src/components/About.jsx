import { MapPin, Briefcase, GraduationCap, Target, Heart } from 'lucide-react';
import profileImg from '../assets/profile 2026-02-24 at 12.48.45 PM.jpeg';

// Info chips for quick facts
const infoChips = [
    { icon: MapPin, label: 'Rwanda, Africa' },
    { icon: Briefcase, label: 'Open to Work' },
    { icon: GraduationCap, label: 'IT Student' },
];

// Mission cards
const missionCards = [
    {
        icon: '💡',
        title: 'My Mission',
        description:
            'To build solutions that matter and leave a lasting impact. Every line of code I write is driven by a deeper mission — using technology to solve real-world problems, empower communities, and create meaningful digital impact.',
    },
    {
        icon: '🎯',
        title: 'My Goals',
        description:
            'Contribute to open-source projects, master full-stack development, and create innovative web tools that make a real impact in people\'s lives.',
    },
    {
        icon: '❤️',
        title: 'Hobbies & Interests',
        description:
            'Crafting pixel-perfect UIs, exploring new JavaScript frameworks, solving complex problems, reading books, playing volleyball, and listening to music.',
    },
];

const About = () => {
    return (
        <section id="about" className="section-padding bg-zinc-950">
            <div className="max-container">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-3">
                        Get to know me
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto" />
                </div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left: decorative element */}
                    <div className="relative flex items-center justify-center order-2 lg:order-1">
                        {/* Glowing ring */}
                        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl" />
                        {/* Decorative card */}
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl shadow-indigo-500/30 animate-float">
                            <div className="w-full h-full rounded-3xl bg-zinc-900 flex flex-col items-center justify-center gap-4 p-6">
                                <img src={profileImg} alt="Edison Hirwa" className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500/50" />
                                <div className="text-center">
                                    <p className="text-white font-bold text-lg">Edison Hirwa</p>
                                    <p className="gradient-text text-sm font-semibold">IT Student & Frontend Dev</p>
                                </div>
                                {/* Mini stats */}
                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <div className="bg-white/5 rounded-xl p-3 text-center">
                                        <p className="text-indigo-400 font-bold text-xl">2+</p>
                                        <p className="text-zinc-500 text-xs">Years Coding</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-3 text-center">
                                        <p className="text-purple-400 font-bold text-xl">10+</p>
                                        <p className="text-zinc-500 text-xs">Projects Built</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: text content */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            IT Student &amp;{' '}
                            <span className="gradient-text">Frontend Developer</span>
                        </h3>
                        <p className="text-zinc-400 leading-relaxed mb-6 text-base sm:text-lg">
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
                            {infoChips.map(({ icon: Icon, label }) => (
                                <span
                                    key={label}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300"
                                >
                                    <Icon size={14} className="text-indigo-400" />
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
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5"
                        >
                            Let's Work Together
                        </a>
                    </div>
                </div>

                {/* Mission / Goals / Loves Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {missionCards.map(({ icon, title, description }) => (
                        <div
                            key={title}
                            className="glass-card p-6 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">{icon}</div>
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
