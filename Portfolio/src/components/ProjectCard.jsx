import { ExternalLink, Github } from 'lucide-react';

/**
 * ProjectCard - Reusable project card with hover overlay effect
 * Props: title, description, image, tags, githubUrl, liveUrl
 */
const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }) => {
    return (
        <div className="group relative glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
            {/* Project image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={`${title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay (always slightly visible, stronger on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent group-hover:via-indigo-950/60 transition-all duration-300" />

                {/* Hover action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-zinc-900/90 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            <Github size={15} />
                            Code
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-sm font-medium text-white hover:from-indigo-400 hover:to-purple-500 transition-all"
                        >
                            <ExternalLink size={15} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Card body */}
            <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:gradient-text transition-colors">
                    {title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-indigo-300"
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
