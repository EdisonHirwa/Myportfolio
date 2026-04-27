import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = [...navLinks.map(l => l.href.slice(1)), 'contact'];
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
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full">
            <nav
                className={`transition-all duration-500 w-full max-w-4xl rounded-full ${isScrolled
                        ? 'bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl shadow-black/50 border border-white/10'
                        : 'bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 shadow-xl shadow-black/20'
                    }`}
            >
                <div className="flex items-center justify-between h-14 px-4 sm:px-6">

                    {/* ── Left: Logo ── */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="flex items-center gap-2 group"
                    >
                        <Sparkles size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-semibold tracking-wide text-white">
                            Edison
                        </span>
                    </a>

                    {/* ── Center: Nav links (desktop) ── */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map(({ label, href }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <li key={label}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleNavClick(e, href)}
                                        className={`relative text-[13px] font-medium transition-colors duration-200 ${isActive
                                                ? 'text-white'
                                                : 'text-white/60 hover:text-white'
                                            }`}
                                    >
                                        {label}
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
                            className="bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-2 rounded-full text-[13px] font-semibold"
                        >
                            Resume
                        </a>
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        id="nav-mobile-toggle"
                        className="md:hidden p-2 rounded-lg text-white/60 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* ── Mobile dropdown ── */}
                {isMenuOpen && (
                    <div className="md:hidden animate-slide-down bg-[#1a1a1a] rounded-3xl mt-2 border border-white/10 overflow-hidden shadow-2xl">
                        <ul className="flex flex-col px-4 py-4 gap-1">
                            {navLinks.map(({ label, href }) => {
                                const isActive = activeSection === href.slice(1);
                                return (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            onClick={(e) => handleNavClick(e, href)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                                    ? 'text-white bg-white/10'
                                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                );
                            })}
                            <li className="pt-2 pb-1 px-2">
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
