import { Mail, Link2, GitFork, Phone } from 'lucide-react';
import { profile } from '../data/profile';

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    desc: 'Best way to reach me',
  },
  {
    icon: <Link2 size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sunil-sodhi-30901a81',
    href: profile.linkedin,
    desc: 'Connect professionally',
  },
  {
    icon: <GitFork size={20} />,
    label: 'GitHub',
    value: 'github.com/sharingkapotter',
    href: profile.github,
    desc: 'See my code',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
    desc: 'Available by appointment',
  },
];

export default function Contact() {
  return (
    <main className="pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="mb-14">
          <p className="font-mono text-accent text-xs mb-2 tracking-widest uppercase">Get In Touch</p>
          <h1 className="font-display font-extrabold text-4xl text-slate-900 mb-4">Contact</h1>
          <p className="font-body text-slate-500 text-sm max-w-xl">
            I'm currently open to Senior SDET, QA Lead, and QA Manager opportunities.
            Feel free to reach out via any of the channels below.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map(({ icon, label, value, href, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glow-border bg-white rounded-xl p-6 flex items-start gap-4 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors shrink-0">
                {icon}
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-slate-500 mb-1">{label}</p>
                <p className="font-display font-semibold text-slate-900 text-sm mb-1 truncate group-hover:text-gradient transition-all">
                  {value}
                </p>
                <p className="font-body text-xs text-slate-400">{desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Availability note */}
        <div className="mt-12 p-8 rounded-xl border border-slate-200 bg-slate-50 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
            Available for new roles
          </div>
          <h3 className="font-display font-semibold text-slate-900 mb-2">Let's build something together</h3>
          <p className="font-body text-slate-500 text-sm max-w-sm mx-auto">
            20 years of QA engineering experience across financial services, healthcare, insurance, and retail.
          </p>
        </div>

      </div>
    </main>
  );
}
