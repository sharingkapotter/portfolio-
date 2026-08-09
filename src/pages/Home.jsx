import { Link } from 'react-router-dom';
import { ArrowRight, GitFork, Link2, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { profile, highlights, focusAreas, frameworks, projects } from '../data/profile';
import photo from '../assets/photo.jpg';

const featured = projects.filter((p) => p.featured).slice(0, 4);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start gap-10 mb-4">
            {/* Photo */}
            <div className="shrink-0">
              <img
                src={photo}
                alt="Sunil Sodhi"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-lg ring-1 ring-slate-200"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg ring-1 ring-slate-200 bg-accent/10 items-center justify-center hidden"
                aria-hidden="true"
              >
                <span className="font-display font-bold text-3xl sm:text-4xl text-gradient">SS</span>
              </div>
            </div>

            <div className="max-w-3xl flex-1">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono mb-8 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
                Open to AI Governance, AI Risk &amp; Model Validation roles
              </div>

              {/* Name */}
              <h1
                className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none mb-4 animate-fade-up opacity-0-init"
                style={{ animationFillMode: 'forwards' }}
              >
                <span className="text-slate-900">Sunil</span>{' '}
                <span className="text-gradient">Sodhi</span>
              </h1>

              {/* Headline */}
              <div className="animate-fade-up opacity-0-init animate-delay-100" style={{ animationFillMode: 'forwards' }}>
                <p className="font-display font-semibold text-xl sm:text-2xl text-slate-700 mb-2">
                  {profile.headline}
                </p>
                <p className="font-mono text-xs sm:text-sm text-accent/80 mb-6 leading-relaxed">{profile.subheadline}</p>
              </div>

              {/* Location */}
              <div
                className="flex items-center gap-1.5 text-slate-500 text-sm mb-8 animate-fade-up opacity-0-init animate-delay-200"
                style={{ animationFillMode: 'forwards' }}
              >
                <MapPin size={13} />
                <span className="font-body">{profile.location}</span>
              </div>

              {/* Summary */}
              <p
                className="font-body text-slate-600 leading-relaxed text-base max-w-2xl mb-6 animate-fade-up opacity-0-init animate-delay-300"
                style={{ animationFillMode: 'forwards' }}
              >
                {profile.summary}
              </p>

              {/* Tagline */}
              <p
                className="font-display font-semibold text-slate-800 text-base max-w-2xl mb-10 border-l-2 border-accent/40 pl-4 animate-fade-up opacity-0-init animate-delay-300"
                style={{ animationFillMode: 'forwards' }}
              >
                {profile.tagline}
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4 animate-fade-up opacity-0-init animate-delay-400"
                style={{ animationFillMode: 'forwards' }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-display font-semibold text-sm rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                >
                  See the Work <ArrowRight size={15} />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-body text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all hover:bg-accent/5"
                >
                  Resume <ChevronRight size={15} />
                </Link>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-600 font-body text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all hover:bg-accent/5"
                >
                  <Link2 size={15} /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-600 font-body text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all hover:bg-accent/5"
                >
                  <GitFork size={15} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map(({ metric, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-extrabold text-2xl text-gradient mb-1">{metric}</div>
                <div className="font-body text-xs text-slate-500 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-display font-bold text-2xl text-slate-900">What I Do</h2>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {focusAreas.map(({ title, description, tags }) => (
            <div key={title} className="glow-border bg-white rounded-xl p-7 shadow-sm hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={16} className="text-accent shrink-0" />
                <h3 className="font-display font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="font-body text-sm text-slate-600 leading-relaxed mb-5">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded border border-slate-200 bg-slate-50 text-slate-600 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-display font-bold text-2xl text-slate-900">Frameworks &amp; Standards</h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((f) => (
              <span
                key={f}
                className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-mono hover:border-accent/40 hover:text-accent transition-all cursor-default shadow-sm"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-display font-bold text-2xl text-slate-900">Selected Work</h2>
          <div className="flex-1 h-px bg-slate-200" />
          <Link to="/projects" className="text-accent text-sm font-body hover:underline flex items-center gap-1">
            All projects <ChevronRight size={13} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((p) => (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group glow-border bg-white rounded-xl p-7 shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-block px-2.5 py-1 rounded border border-accent/20 bg-accent/5 text-accent text-xs font-mono mb-3">
                {p.type}
              </span>
              <h3 className="font-display font-semibold text-slate-900 mb-2 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="font-body text-sm text-slate-500 leading-relaxed line-clamp-4">{p.description}</p>
              <div className="mt-4 flex items-center gap-1 text-accent text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                <GitFork size={12} /> View on GitHub
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { to: '/resume', title: 'Resume', desc: 'Twenty years of independent validation, reframed for AI risk', icon: '📄' },
            { to: '/projects', title: 'Projects', desc: 'Open-source AI governance, LLM security and DevSecOps tooling', icon: '🛠' },
            { to: '/credentials', title: 'Credentials', desc: 'Certifications in progress, completed training, and education', icon: '🎓' },
          ].map(({ to, title, desc, icon }) => (
            <Link
              key={to}
              to={to}
              className="group glow-border bg-white rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="font-display font-semibold text-slate-900 mb-2 group-hover:text-gradient transition-all">{title}</h3>
              <p className="font-body text-sm text-slate-500 leading-relaxed">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-accent text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                View <ChevronRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
