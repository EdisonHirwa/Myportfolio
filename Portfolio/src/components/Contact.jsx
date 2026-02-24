import { useState, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socialLinks = [
    { icon: Github, href: 'https://github.com/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
];

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

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

    return (
        <section id="contact" className="section-padding bg-zinc-900/50">
            <div className="max-container">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-3">
                        Let's talk
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mb-6" />
                    <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
                        Have a project in mind or just want to say hi? My inbox is always open. I'll get back
                        to you as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left — Contact info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 glass-card">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                        <Mail size={18} className="text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                                        <a
                                            href="mailto:hirwae@example.com"
                                            className="text-zinc-300 hover:text-indigo-400 transition-colors text-sm font-medium"
                                        >
                                            hirwae@example.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 glass-card">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={18} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 mb-0.5">Location</p>
                                        <p className="text-zinc-300 text-sm font-medium">Rwanda, Africa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div>
                            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                                Follow Me
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="p-3 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability card */}
                        <div className="p-6 glass-card border-indigo-500/20 bg-indigo-500/5">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-emerald-400 font-semibold text-sm">Available for work</span>
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
                            <div className="h-full flex flex-col items-center justify-center text-center py-8">
                                <div className="text-5xl mb-4">🎉</div>
                                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                                <p className="text-zinc-400">
                                    Thanks for reaching out. I'll get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200 text-sm"
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
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200 text-sm"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-zinc-400 mb-2"
                                    >
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
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200 text-sm resize-none"
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 font-semibold text-white transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {sending ? (
                                        <>
                                            Sending...
                                            <Loader2 size={16} className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send
                                                size={16}
                                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                            />
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
