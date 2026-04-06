import { Github, Linkedin, Twitter, Heart, Code2 } from 'lucide-react';

const socialLinks = [
    { icon: Github,   href: 'https://github.com/',      label: 'GitHub'   },
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: Twitter,  href: 'https://twitter.com/',     label: 'Twitter'  },
];

const navLinks = [
    { label: 'Home',     href: '#home'     },
    { label: 'About',    href: '#about'    },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
];

const Footer = () => {
    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-zinc-950 border-t border-white/[0.05]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8b5cf660, #d946ef60, transparent)' }} />

            <div className="max-container px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="inline-flex items-center gap-2 mb-3">
                            <Code2 size={18} className="text-brand-400" />
                            <span className="text-xl font-black text-white">
                                Edison<span className="gradient-text">.</span>
                            </span>
                        </a>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            Frontend Developer crafting beautiful web experiences from Rwanda, Africa.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleClick(e, href)}
                                        className="text-zinc-400 hover:text-brand-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-brand-400 to-fuchsia-400 transition-all duration-300 rounded-full" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-2.5 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-brand-500/35 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Icon size={17} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Edison Hirwa. All rights reserved.
                    </p>
                    <p className="text-zinc-600 text-sm flex items-center gap-1.5">
                        Built with{' '}
                        <Heart size={11} className="text-fuchsia-500 fill-fuchsia-500" />{' '}
                        using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
