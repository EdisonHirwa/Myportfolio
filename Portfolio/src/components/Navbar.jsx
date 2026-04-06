import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile 2026-02-24 at 12.48.45 PM.jpeg';

const navLinks = [
    { label: 'Home',     href: '#home'     },
    { label: 'About',    href: '#about'    },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
];

const Navbar = () => {
    const [isScrolled,   setIsScrolled]   = useState(false);
    const [isMenuOpen,   setIsMenuOpen]   = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => l.href.slice(1));
            const current = sections.find((id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-zinc-950/90 backdrop-blur-2xl shadow-lg shadow-black/40 border-b border-white/[0.06]'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

                {/* ── Left: Avatar + Name ── */}
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="flex items-center gap-3 group"
                >
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                        <img
                            src={profileImg}
                            alt="Edison Hirwa"
                            className="relative w-8 h-8 rounded-full object-cover border border-white/10"
                        />
                    </div>
                    <span className="text-sm font-bold tracking-wider uppercase text-white">
                        Edison<span className="gradient-text">.</span>Hirwa
                    </span>
                </a>

                {/* ── Center: Nav links (desktop) ── */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ label, href }) => {
                        const isActive = activeSection === href.slice(1);
                        return (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                                    }`}
                                >
                                    {label}
                                    {isActive && (
                                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-fuchsia-400" />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* ── Right: Resume button ── */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="group relative flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full overflow-hidden border border-brand-500/40 text-white transition-all duration-300 hover:border-brand-400/70 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    >
                        {/* gradient fill on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-brand-600/30 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <FileText size={14} className="relative text-brand-400" />
                        <span className="relative">Resume</span>
                    </a>
                </div>

                {/* ── Mobile hamburger ── */}
                <button
                    id="nav-mobile-toggle"
                    className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen
                        ? <X size={22} className="text-fuchsia-400" />
                        : <Menu size={22} />
                    }
                </button>
            </div>

            {/* ── Mobile dropdown ── */}
            {isMenuOpen && (
                <div className="md:hidden animate-slide-down bg-zinc-950/98 backdrop-blur-2xl border-b border-white/[0.06]">
                    <ul className="flex flex-col px-4 py-4 gap-1">
                        {navLinks.map(({ label, href }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <li key={label}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleNavClick(e, href)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                            isActive
                                                ? 'text-white bg-brand-500/15 border border-brand-500/25'
                                                : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                                        }`}
                                    >
                                        {isActive && <Sparkles size={12} className="text-fuchsia-400" />}
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                        <li className="pt-2">
                            <a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold border border-brand-500/40 text-white bg-gradient-to-r from-brand-600/20 to-fuchsia-600/20 hover:from-brand-600/40 hover:to-fuchsia-600/40 transition-all"
                            >
                                <FileText size={14} className="text-brand-400" />
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
