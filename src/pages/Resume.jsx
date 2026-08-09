import { Download, Briefcase, Code2, ChevronRight, ShieldCheck } from 'lucide-react';
import { profile, experience, skills, frameworks } from '../data/profile';

const trackStyles = {
  governance: 'bg-violet-400 border-violet-500',
  security: 'bg-rose-400 border-rose-500',
  validation: 'bg-accent/40 border-accent/60',
};

export default function Resume() {
  return (
    <main className="pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-accent text-xs mb-2 tracking-widest uppercase">Resume</p>
            <h1 className="font-display font-extrabold text-4xl text-slate-900 mb-2">{profile.name}</h1>
            <p className="font-body text-slate-600">{profile.headline}</p>
            <p className="font-body text-slate-400 text-sm mt-1">{profile.location}</p>
          </div>
          <a
            href="/Sunil_Sodhi_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-display font-semibold text-sm rounded-lg hover:bg-accent/90 transition-all whitespace-nowrap hover:shadow-lg hover:shadow-accent/20"
          >
            <Download size={15} /> Download PDF
          </a>
        </div>

        {/* Summary */}
        <section className="mb-14">
          <SectionTitle icon={<span className="text-accent">▸</span>} title="Professional Summary" />
          <div className="space-y-4">
            {profile.summaryLong.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-slate-600 leading-relaxed text-sm">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Frameworks */}
        <section className="mb-14">
          <SectionTitle icon={<ShieldCheck size={15} className="text-accent" />} title="Frameworks & Standards" />
          <div className="flex flex-wrap gap-2">
            {frameworks.map((f) => (
              <span
                key={f}
                className="px-3 py-1.5 rounded border border-accent/20 bg-accent/5 text-accent text-xs font-mono"
              >
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <SectionTitle icon={<Code2 size={15} className="text-accent" />} title="Technical Skills" />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <dt className="font-mono text-xs text-accent/80 mb-2 tracking-wide uppercase">{category}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 text-xs font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <SectionTitle icon={<Briefcase size={15} className="text-accent" />} title="Professional Experience" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200" />

            <div className="space-y-12 pl-6">
              {experience.map((job, i) => (
                <article key={i} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-6 top-1.5 w-2 h-2 rounded-full border ${
                      trackStyles[job.track] || trackStyles.validation
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-slate-900 text-base">{job.title}</h3>
                      <p className="font-body text-accent text-sm">
                        {job.company}
                        {job.sub && <span className="text-slate-500 text-xs ml-2">· {job.sub}</span>}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-slate-500">{job.period}</p>
                      <p className="font-body text-xs text-slate-400">{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm font-body text-slate-600 leading-relaxed">
                        <ChevronRight size={13} className="text-accent/50 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <p className="font-body text-xs text-slate-400 mt-12 pt-6 border-t border-slate-200">
          Current engagements are delivered under contract and clients are not named while active. Full detail available on request.
        </p>

      </div>
    </main>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-200">
      {icon}
      <h2 className="font-display font-bold text-lg text-slate-900">{title}</h2>
    </div>
  );
}
