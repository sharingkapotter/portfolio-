import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { certifications, education } from '../data/profile';

export default function Credentials() {
  return (
    <main className="pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="mb-14">
          <p className="font-mono text-accent text-xs mb-2 tracking-widest uppercase">Background</p>
          <h1 className="font-display font-extrabold text-4xl text-slate-900 mb-4">Credentials</h1>
          <p className="font-body text-slate-500 text-sm max-w-xl">
            Certifications, education, and professional training.
          </p>
        </div>

        {/* Certifications */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8 pb-3 border-b border-slate-200">
            <Award size={15} className="text-accent" />
            <h2 className="font-display font-bold text-lg text-slate-900">Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
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
