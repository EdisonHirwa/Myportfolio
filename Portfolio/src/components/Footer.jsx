import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
];

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Footer = () => {
    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-zinc-950 border-t border-white/5">
            <div className="max-container px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="text-xl font-bold">
                            Edison<span className="gradient-text">.</span>
                        </a>
                        <p className="text-zinc-500 text-sm mt-3 leading-relaxed max-w-xs">
                            Frontend Developer crafting beautiful web experiences from Rwanda, Africa.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleClick(e, href)}
                                        className="text-zinc-400 hover:text-white text-sm transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-2.5 rounded-lg glass-card text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
                                >
                                    <Icon size={17} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-600 text-sm flex items-center gap-1.5">
                        © {new Date().getFullYear()} Edison Hirwa. All rights reserved.
                    </p>
                    <p className="text-zinc-600 text-sm flex items-center gap-1.5">
                        Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React &
                        Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
