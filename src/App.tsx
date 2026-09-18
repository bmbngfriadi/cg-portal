import { useState, useEffect } from 'react';
import { Printer, Forklift, MessageSquare, ArrowRight, Sun, Moon } from 'lucide-react';
import './index.css';

const apps = [
  {
    id: 'fcmm',
    title: 'FCMM System',
    description: 'Fleet & Copier Machine Management.',
    icon: Printer,
    url: 'https://cg-plantbatam.com/fcmm',
    colorClass: 'text-red-500'
  },
  {
    id: 'ches',
    title: 'CHES System',
    description: 'Heavy Equipment System.',
    icon: Forklift,
    url: 'https://cg-plantbatam.com/ches/',
    colorClass: 'text-blue-500'
  },
  {
    id: 'wa-bot',
    title: 'WA-BOT System',
    description: 'Employee Data Plant Batam Integrated via Chatbot WhatsApp.',
    icon: MessageSquare,
    url: 'https://cg-plantbatam.com/wa-bot',
    colorClass: 'text-emerald-500'
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Fix Dark Mode Bug: Target documentElement instead of body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="portal-wrapper">
      <div className="bg-grid"></div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <main className="bento-container">

        {/* Bento Grid Layout */}
        <div className="bento-grid">

          {/* Card 1: Hero (Spans 2 Cols, 1 Row) */}
          <div className="bento-item bento-hero">
            <img src="/plant-hero.jpg" alt="Plant Batam Aerial" className="bento-hero-img" />
            <div className="bento-hero-overlay"></div>
            <div className="bento-hero-content">
              <img src="/logo.png" alt="Logo" className="hero-logo" />
              <h1 className="hero-title">PT Cemindo Gemilang Tbk - Plant Batam</h1>
              <p className="hero-subtitle">Internal Systems</p>
            </div>
          </div>

          {apps.map((app) => {
            const Icon = app.icon;
            // Determine icon wrapper class based on ID
            const iconClass = app.id === 'fcmm' ? 'fcmm-icon' :
              app.id === 'ches' ? 'ches-icon' : 'wa-icon';
            return (
              <a href={app.url} key={app.id} className="bento-item bento-app group">
                <div className={`app-icon-wrapper ${iconClass}`}>
                  <Icon size={24} />
                </div>
                <h2 className="app-title">{app.title}</h2>
                <p className="app-desc">{app.description}</p>
                <ArrowRight className="action-arrow" size={18} />
              </a>
            );
          })}
        </div>
      </main>

      <footer className="portal-footer">
        &copy; {new Date().getFullYear()} PT Cemindo Gemilang Tbk - Plant Batam.
      </footer>
    </div>
  );
}

export default App;
