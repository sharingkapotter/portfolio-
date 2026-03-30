import { GitFork, Link2, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-semibold text-gradient text-sm">Sunil Sodhi</div>
        <p className="text-slate-600 text-xs font-body">
          Senior SDET & QA Manager · Austin, TX
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="text-slate-600 hover:text-accent transition-colors">
            <Mail size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-accent transition-colors">
            <Link2 size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-accent transition-colors">
            <GitFork size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
