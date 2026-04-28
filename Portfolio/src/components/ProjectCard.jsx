import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

/**
 * ProjectCard — hover overlay with brand violet/fuchsia accent
 */
const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }) => {
    return (
        <div className="group relative glass-card overflow-hidden hover:-translate-y-2 transition-all duration-400 hover:border-brand-500/25 hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]">
            {/* Project image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={`${title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent group-hover:via-brand-950/50 transition-all duration-300" />

                {/* Hover action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-zinc-950/90 backdrop-blur-sm border border-white/15 rounded-xl text-sm font-semibold text-white hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-200"
                        >
                            <Github size={14} />
                            Code
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                            style={{
                                background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                boxShadow:  '0 0 20px rgba(139,92,246,0.4)',
                            }}
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Card body */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-lg leading-tight group-hover:gradient-text transition-all duration-300">
                        {title}
                    </h3>
                    <ArrowUpRight
                        size={16}
                        className="text-zinc-600 group-hover:text-brand-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 mt-1 ml-2"
                    />
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-brand-500/[0.08] border border-brand-500/20 text-brand-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
