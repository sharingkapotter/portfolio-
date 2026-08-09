import { Award, GraduationCap, CheckCircle2, Clock } from 'lucide-react';
import { certifications, certificationsInProgress, education } from '../data/profile';

const groupOrder = ['AI & Security', 'Delivery & Engineering'];

export default function Credentials() {
  return (
    <main className="pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="mb-14">
          <p className="font-mono text-accent text-xs mb-2 tracking-widest uppercase">Background</p>
          <h1 className="font-display font-extrabold text-4xl text-slate-900 mb-4">Credentials</h1>
          <p className="font-body text-slate-500 text-sm max-w-xl leading-relaxed">
            Certifications, training and education. Listed exactly as issued — course completions are named as
            course completions, not as proctored certifications.
          </p>
        </div>

        {/* In progress */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8 pb-3 border-b border-slate-200">
            <Clock size={15} className="text-accent" />
            <h2 className="font-display font-bold text-lg text-slate-900">In Progress</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certificationsInProgress.map((cert, i) => (
              <div
                key={i}
                className="glow-border bg-accent/5 border-accent/20 rounded-xl p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="mt-0.5 shrink-0">
                  <Clock size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-slate-900 text-sm mb-1">{cert.name}</p>
                  <p className="font-mono text-xs text-slate-500">{cert.issuer}</p>
                  {cert.note && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded border border-accent/30 bg-white text-accent text-[10px] font-mono uppercase tracking-wide">
                      {cert.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8 pb-3 border-b border-slate-200">
            <Award size={15} className="text-accent" />
            <h2 className="font-display font-bold text-lg text-slate-900">Certifications & Training</h2>
          </div>

          {groupOrder.map((group) => {
            const items = certifications.filter((c) => c.group === group);
            if (!items.length) return null;
            return (
              <div key={group} className="mb-10 last:mb-0">
                <p className="font-mono text-xs text-accent/80 mb-4 tracking-wide uppercase">{group}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {items.map((cert, i) => (
                    <div
                      key={i}
                      className="glow-border bg-white rounded-xl p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                    >
                      <div className="mt-0.5 shrink-0">
                        <CheckCircle2 size={16} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-slate-900 text-sm mb-1">{cert.name}</p>
                        <p className="font-mono text-xs text-slate-500">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-2 mb-8 pb-3 border-b border-slate-200">
            <GraduationCap size={15} className="text-accent" />
            <h2 className="font-display font-bold text-lg text-slate-900">Education</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="glow-border bg-white rounded-xl p-6 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <h3 className="font-display font-semibold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="font-body text-sm text-accent">{edu.school}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
