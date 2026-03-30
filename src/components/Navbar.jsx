import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GitFork, Link2, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
  { label: 'Credentials', path: '/credentials' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-700 text-lg tracking-tight">
          <span className="text-gradient">SS</span>
          <span className="text-slate-500 ml-2 text-sm font-body font-normal hidden sm:inline">/ Sunil Sodhi</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-200 ${
                  location.pathname === path
                    ? 'text-accent bg-accent/10 font-medium'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10">
            <Link2 size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10">
            <GitFork size={17} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-500 hover:text-slate-900 p-2">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block px-4 py-3 rounded-lg text-sm transition-all ${
                    location.pathname === path
                      ? 'text-accent bg-accent/10 font-medium'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="flex gap-4 px-4 pt-3 border-t border-slate-200 mt-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent">
                <Link2 size={18} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent">
                <GitFork size={18} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
