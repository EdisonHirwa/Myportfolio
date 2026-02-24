import ProjectCard from './ProjectCard';

// Project data — update GitHub/live links to real URLs when ready
const projects = [
    {
        title: 'Real-Time Chat App',
        description:
            'A modern real-time messaging application with user authentication, chat rooms, and responsive design.',
        image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&q=80',
        tags: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
        githubUrl: 'https://github.com/',
        liveUrl: '#',
    },
    {
        title: 'Portfolio Website V1',
        description:
            'My first personal portfolio website built with HTML, CSS and vanilla JavaScript. Clean and minimal design.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
        tags: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/',
        liveUrl: '#',
    },
    {
        title: 'E-Commerce UI',
        description:
            'Modern e-commerce front-end with product listings, cart functionality, and smooth checkout experience.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        tags: ['React', 'Tailwind CSS', 'Context API'],
        githubUrl: 'https://github.com/',
        liveUrl: '#',
    },
    {
        title: 'Weather App',
        description:
            'A beautiful weather application using OpenWeatherMap API with location search and 5-day forecast display.',
        image: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80',
        tags: ['React', 'API Integration', 'CSS'],
        githubUrl: 'https://github.com/',
        liveUrl: '#',
    },
    {
        title: 'Blog Platform',
        description:
            'Full-featured blog platform with markdown support, categories, tags, and a clean reading experience.',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
        tags: ['React', 'JavaScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/',
        liveUrl: '#',
    },
    {
        title: 'Task Manager',
        description:
            'Productivity app with drag-and-drop task boards, priority labels, due dates, and local storage persistence.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
        tags: ['React', 'DnD', 'LocalStorage'],
        githubUrl: 'https://github.com/',
        liveUrl: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-zinc-950">
            <div className="max-container">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-3">
                        What I've built
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mx-auto mb-6" />
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
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-zinc-300 hover:text-white hover:bg-white/5 hover:border-indigo-500/40 font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    >
                        View All on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
