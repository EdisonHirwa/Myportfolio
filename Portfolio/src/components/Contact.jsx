import { useState, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Send, Loader2, MessageSquare, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socialLinks = [
    { icon: Github,   href: 'https://github.com/',      label: 'GitHub',   color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn', color: '#0a66c2', bg: 'rgba(10,102,194,0.1)'   },
    { icon: Twitter,  href: 'https://twitter.com/',     label: 'Twitter',  color: '#1d9bf0', bg: 'rgba(29,155,240,0.1)'   },
];

const Contact = () => {
    const formRef  = useRef();
    const [formData,  setFormData]  = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [sending,   setSending]   = useState(false);
    const [error,     setError]     = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setError('');
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError('Failed to send message. Please try again or email me directly.');
        } finally {
            setSending(false);
        }
    };

    const inputClass =
        'w-full px-4 py-3 rounded-xl text-white text-sm placeholder-zinc-600 outline-none transition-all duration-200 bg-white/[0.04] border border-white/[0.09] focus:border-brand-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]';

    return (
        <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #09090b 0%, #0f0a1e 100%)' }}>
            {/* Ambient orbs */}
            <div className="absolute top-0  right-0  w-[420px] h-[420px] bg-brand-600/[0.07]   rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-0 left-0  w-[420px] h-[420px] bg-fuchsia-500/[0.06] rounded-full blur-[110px] pointer-events-none" />

            <div className="max-container relative">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.25em] text-brand-400 uppercase mb-3 flex items-center justify-center gap-2">
                        <MessageSquare size={13} className="text-fuchsia-400" />
                        Let's talk
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #8b5cf6, #d946ef)' }} />
                    <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
                        Have a project in mind or just want to say hi? My inbox is always open.
                        I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left — Contact info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-center gap-4 p-4 glass-card hover:border-brand-500/25 transition-colors duration-200 group">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                         style={{ background: 'rgba(139,92,246,0.15)' }}>
                                        <Mail size={18} className="text-brand-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 mb-0.5 font-medium">Email</p>
                                        <a
                                            href="mailto:hirwae@example.com"
                                            className="text-zinc-300 hover:text-brand-400 transition-colors text-sm font-medium"
                                        >
                                            hirwae@example.com
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-4 glass-card hover:border-fuchsia-500/25 transition-colors duration-200 group">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                         style={{ background: 'rgba(217,70,239,0.15)' }}>
                                        <MapPin size={18} className="text-fuchsia-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 mb-0.5 font-medium">Location</p>
                                        <p className="text-zinc-300 text-sm font-medium">Rwanda, Africa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Follow Me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map(({ icon: Icon, href, label, color, bg }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="group p-3 rounded-xl glass-card hover:-translate-y-1.5 transition-all duration-300"
                                        style={{ '--icon-color': color }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = `${color}40`;
                                            e.currentTarget.style.boxShadow   = `0 0 20px ${color}30`;
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = '';
                                            e.currentTarget.style.boxShadow   = '';
                                        }}
                                    >
                                        <Icon size={20} className="text-zinc-400 group-hover:text-white transition-colors duration-200" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability card */}
                        <div className="p-6 glass-card border-brand-500/20 bg-gradient-to-br from-brand-500/[0.07] to-fuchsia-500/[0.05]">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="relative flex">
                                    <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-highlight-400 opacity-75" />
                                    <span className="relative w-2.5 h-2.5 rounded-full bg-highlight-400" />
                                </span>
                                <span className="text-highlight-400 font-semibold text-sm">Available for work</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                I'm currently available for freelance projects, full-time roles, and exciting
                                collaborations. Let's build something great together!
                            </p>
                        </div>
                    </div>

                    {/* Right — Contact form */}
                    <div className="glass-card p-8">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8b5cf6, #d946ef)' }}>
                                    <CheckCircle2 size={32} className="text-white" />
                                </div>
                                <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                                <p className="text-zinc-400">
                                    Thanks for reaching out. I'll get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Edison Hirwa"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project or just say hello..."
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                                        {error}
                                    </p>
                                )}

                                <button
                                    id="contact-submit"
                                    type="submit"
                                    disabled={sending}
                                    className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    style={{
                                        background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                        boxShadow:  '0 0 25px rgba(139,92,246,0.35)',
                                    }}
                                    onMouseEnter={e => !sending && (e.currentTarget.style.boxShadow = '0 0 45px rgba(139,92,246,0.55)')}
                                    onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 25px rgba(139,92,246,0.35)')}
                                >
                                    {sending ? (
                                        <>
                                            Sending...
                                            <Loader2 size={16} className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            {/* Shimmer */}
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                            <span className="relative">Send Message</span>
                                            <Send size={15} className="relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
