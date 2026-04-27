import { Github, FolderOpen } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Portfolio Website V1',
        description: 'My first personal portfolio website built with HTML, CSS and vanilla JavaScript. Clean and minimal design.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/',
        liveUrl: '#',
    },
    {
        title: 'StockConnect',
        description: 'A premium, real-time stock trading simulation platform for education and professional market training with distinct roles for Super Admin, Market Admin, and Trader.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
        tags: ['Java', 'Spring Boot', 'React', 'Tailwind CSS'],
        githubUrl: 'https://github.com/EdisonHirwa/StockConnect',
        liveUrl: 'https://www.stockconnect.live/',
    },
    {
        title: 'TalentAI',
        description: 'AI-powered talent screening and applicant management platform.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80',
        tags: ['Next.js', 'React', 'Tailwind CSS'],
        githubUrl: '#',
        liveUrl: 'https://talent-lens-ochre.vercel.app/',
    },
    {
        title: 'QueryMe',
        description: 'A frontend application designed to interact with data sources, featuring document export capabilities like PDF and Excel formats.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        tags: ['React', 'TypeScript', 'Vite', 'Axios'],
        githubUrl: 'https://github.com/EdisonHirwa/QueryMe-frontend',
        liveUrl: '#',
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-zinc-950 relative overflow-hidden">
            {/* ambient orb */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

            <div className="max-container relative">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.25em] text-brand-400 uppercase mb-3 flex items-center justify-center gap-2">
                        <FolderOpen size={13} className="text-fuchsia-400" />
                        What I've built
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #8b5cf6, #d946ef)' }} />
                    <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
                        A selection of projects that showcase my skills across frontend development and
                        interface design.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/EdisonHirwa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/10 text-zinc-300 hover:text-white hover:border-brand-500/40 hover:bg-brand-500/[0.07] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
