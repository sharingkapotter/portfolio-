import { Link } from 'react-router-dom';
import { ArrowRight, Download, GitFork, Link2, MapPin, ChevronRight } from 'lucide-react';
import { profile, highlights, skills } from '../data/profile';
import photo from '../assets/photo.jpg';

const topSkills = ["Playwright", "C#", "Python", "SpecFlow (BDD)", "Azure DevOps", "RestSharp", "Selenium WebDriver", "JMeter", "OWASP Top 10", "PostgreSQL"];

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
              Open to Senior SDET & QA Manager Opportunities
            </div>

            {/* Name */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none mb-4 animate-fade-up opacity-0-init"
              style={{ animationFillMode: 'forwards' }}>
              <span className="text-slate-900">Sunil</span>{' '}
              <span className="text-gradient">Sodhi</span>
            </h1>

            {/* Headline */}
            <div className="animate-fade-up opacity-0-init animate-delay-100" style={{ animationFillMode: 'forwards' }}>
              <p className="font-display font-semibold text-xl sm:text-2xl text-slate-700 mb-1">
                {profile.headline}
              </p>
              <p className="font-mono text-sm text-accent/80 mb-6">{profile.subheadline}</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-8 animate-fade-up opacity-0-init animate-delay-200"
              style={{ animationFillMode: 'forwards' }}>
              <MapPin size={13} />
              <span className="font-body">{profile.location}</span>
            </div>

            {/* Summary */}
            <p className="font-body text-slate-600 leading-relaxed text-base max-w-2xl mb-10 animate-fade-up opacity-0-init animate-delay-300"
              style={{ animationFillMode: 'forwards' }}>
              {profile.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init animate-delay-400"
              style={{ animationFillMode: 'forwards' }}>
              <Link to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-display font-semibold text-sm rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
                View Resume <ArrowRight size={15} />
              </Link>
              <Link to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-body text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all hover:bg-accent/5">
                See Projects <ChevronRight size={15} />
              </Link>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-600 font-body text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all hover:bg-accent/5">
                <Link2 size={15} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-600 font-body text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all hover:bg-accent/5">
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

      {/* Top Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-display font-bold text-2xl text-slate-900">Core Technologies</h2>
          <div className="flex-1 h-px bg-slate-200" />
          <Link to="/resume" className="text-accent text-sm font-body hover:underline flex items-center gap-1">
            Full skillset <ChevronRight size={13} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {topSkills.map((s) => (
            <span key={s}
              className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-mono hover:border-accent/40 hover:text-accent transition-all cursor-default shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { to: '/resume', title: 'Resume', desc: 'Full work history, skills, and downloadable PDF', icon: '📄' },
            { to: '/projects', title: 'Projects', desc: 'GitHub projects in QA automation and AI security', icon: '🛠' },
            { to: '/credentials', title: 'Credentials', desc: 'Certifications, education, and training', icon: '🎓' },
          ].map(({ to, title, desc, icon }) => (
            <Link key={to} to={to}
              className="group glow-border bg-white rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-sm">
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
