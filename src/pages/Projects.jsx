import { GitFork, ExternalLink, Tag } from 'lucide-react';
import { projects } from '../data/profile';

const typeColors = {
  "QA Automation": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "AI Security": "text-violet-700 bg-violet-50 border-violet-200",
};

export default function Projects() {
  return (
    <main className="pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="mb-14">
          <p className="font-mono text-accent text-xs mb-2 tracking-widest uppercase">Open Source</p>
          <h1 className="font-display font-extrabold text-4xl text-slate-900 mb-4">Projects</h1>
          <p className="font-body text-slate-500 text-sm max-w-xl">
            Selected projects from my GitHub showcasing QA automation architecture and AI/security engineering work.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <article
              key={i}
              className="glow-border bg-white rounded-xl p-8 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-1 rounded border text-xs font-mono ${typeColors[project.type] || 'text-accent bg-accent/10 border-accent/20'}`}>
                      {project.type}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-slate-900 group-hover:text-gradient transition-all mb-3">
                    {project.title}
                  </h2>
                  <p className="font-body text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded border border-slate-200 bg-slate-50 text-slate-600 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-body text-slate-500 hover:text-accent transition-colors"
                >
                  <GitFork size={15} /> View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-body text-slate-500 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 p-8 rounded-xl border border-slate-200 bg-slate-50 text-center">
          <GitFork size={28} className="text-slate-400 mx-auto mb-3" />
          <h3 className="font-display font-semibold text-slate-900 mb-2">More on GitHub</h3>
          <p className="font-body text-slate-500 text-sm mb-5">
            Additional projects including AI governance tools, adversarial ML labs, and automation frameworks.
          </p>
          <a
            href="https://github.com/sharingkapotter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-body rounded-lg hover:border-accent/40 hover:text-accent transition-all"
          >
            <GitFork size={15} /> github.com/sharingkapotter
          </a>
        </div>

      </div>
    </main>
  );
}
