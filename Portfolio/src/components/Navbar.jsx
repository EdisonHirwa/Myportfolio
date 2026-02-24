import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import profileImg from '../assets/profile 2026-02-24 at 12.48.45 PM.jpeg';

// Navigation links
const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Detect scroll & active section
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

    // Smooth scroll handler
    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-zinc-900/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5'
                    : 'bg-zinc-900/70 backdrop-blur-md border-b border-white/5'
                }`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8">
                {/* ── Left: Avatar + Name ── */}
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="flex items-center gap-3 group"
                >
                    <img
                        src={profileImg}
                        alt="Edison Hirwa"
                        className="w-8 h-8 rounded-full object-cover border border-white/20 group-hover:border-indigo-500/60 transition-colors"
                    />
                    <span className="text-sm font-bold tracking-wider uppercase text-white">
                        Edison Hirwa
                    </span>
                </a>

                {/* ── Center: Nav links (desktop) ── */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === href.slice(1)
                                        ? 'text-white'
                                        : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                {label}
                                {/* Active underline indicator */}
                                {activeSection === href.slice(1) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-white rounded-full" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ── Right: Resume button ── */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="px-5 py-1.5 text-sm font-medium rounded-full border border-white/20 text-white hover:bg-white hover:text-zinc-900 transition-all duration-300"
                    >
                        Resume
                    </a>
                </div>

                {/* ── Mobile hamburger ── */}
                <button
                    className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* ── Mobile dropdown ── */}
            {isMenuOpen && (
                <div className="md:hidden animate-slide-down bg-zinc-900/95 backdrop-blur-xl border-b border-white/5">
                    <ul className="flex flex-col px-4 py-4 gap-1">
                        {navLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === href.slice(1)
                                            ? 'text-white bg-white/10'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                className="block text-center px-4 py-3 rounded-full text-sm font-medium border border-white/20 text-white hover:bg-white hover:text-zinc-900 transition-all"
                            >
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
