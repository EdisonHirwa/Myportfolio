import { useState, useRef } from 'react';
import { Github, Mail, MapPin, Send, Loader2, Calendar, MessageSquare, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true); setError('');
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError('Failed to send message. Please try again.');
        } finally {
            setSending(false);
        }
    };

    const inputClass = "w-full bg-[#050A15] border border-white/5 rounded-md px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00c2cb] focus:ring-1 focus:ring-[#00c2cb] transition-colors";

    return (
        <section id="contact" className="py-20 bg-[#010409] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Left Side */}
                <div>
                    <h4 className="text-[#00c2cb] text-sm font-bold tracking-widest uppercase mb-4">Contact Us</h4>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        Let's Build <span className="text-[#00c2cb]">Something Great</span>
                    </h2>
                    <p className="text-zinc-400 text-base leading-relaxed mb-10">
                        Have a project in mind? We'd love to hear about it. Reach out or schedule a call to discuss how we can help bring your vision to life.
                    </p>

                    {/* Schedule Call Card */}
                    <div className="border border-white/10 rounded-xl p-6 mb-10 bg-[#060D1A]/50 backdrop-blur-md">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#00c2cb]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Calendar className="w-5 h-5 text-[#00c2cb]" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">Schedule a Call</h3>
                                <p className="text-zinc-400 text-sm mb-4">Pick a time that works best for you to discuss your project directly with our team.</p>
                                <a href="#" className="inline-flex items-center gap-2 bg-[#00c2cb] text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-[#00aeb6] transition-colors">
                                    Book a Meeting Here <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info List */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 mb-1">Email</p>
                                <p className="text-white text-sm font-medium">hirwae@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                <Github className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 mb-1">GitHub</p>
                                <p className="text-white text-sm font-medium">github.com/edisonhirwa</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                <MapPin className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 mb-1">Location</p>
                                <p className="text-white text-sm font-medium">Africa , Rwanda</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="bg-[#0A101D] border border-white/10 rounded-2xl p-6 md:p-8">
                    
                    {/* Tabs */}
                    <div className="flex gap-4 mb-8">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#00c2cb] text-black font-bold py-3 rounded-md text-sm">
                            <MessageSquare className="w-4 h-4" /> Send a Message
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-transparent text-zinc-400 font-medium py-3 rounded-md text-sm border border-white/5 hover:text-white transition-colors">
                            <Calendar className="w-4 h-4" /> Schedule Call
                        </button>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-medium text-zinc-400 mb-2">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-zinc-400 mb-2">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-zinc-400 mb-2">Subject</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help?" className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-zinc-400 mb-2">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
                        </div>
                        
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        {submitted && <p className="text-[#00c2cb] text-sm">Message Sent Successfully!</p>}

                        <button 
                            type="submit" 
                            disabled={sending} 
                            className="w-full flex items-center justify-center gap-2 bg-[#00c2cb] text-black font-bold py-3.5 rounded-md hover:bg-[#00aeb6] transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Send Message <Send className="w-4 h-4 inline ml-1"/></span>}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
