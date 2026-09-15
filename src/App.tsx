import { Printer, Forklift, MessageSquare, ArrowRight } from 'lucide-react';

// Data for apps
const apps = [
  {
    id: 'fcmm',
    title: 'FCMM System',
    description: 'Fleet & Copier Machine Management. Track photocopier usages and generate detailed audit reports.',
    icon: Printer,
    url: 'https://cg-plantbatam.com/fcmm'
  },
  {
    id: 'ches',
    title: 'CHES Portal',
    description: 'A system for monitoring forklift unit usage.',
    icon: Forklift,
    url: 'https://cg-plantbatam.com/ches/'
  },
  {
    id: 'wa-bot',
    title: 'WA-BOT Management',
    description: 'A system for monitoring all Plant Batam employee data, Integrated with WhatsApp bot.',
    icon: MessageSquare,
    url: 'https://cg-plantbatam.com/wa-bot'
  }
];

function App() {
  return (
    <>
      {/* Crisp geometric dot background instead of mushy gradients */}
      <div className="bg-pattern"></div>

      <main className="portal-container">
        <header className="portal-header">
          <img src="/logo.png" alt="Semen Merah Putih" className="portal-logo" />
          <h1 className="portal-title"> CG - Plant Batam Portal</h1>
          <p className="portal-subtitle">
            Central Control Center for PT Cemindo Gemilang Tbk Internal Operational and Management Applications.
          </p>
        </header>

        <div className="apps-grid">
          {apps.map((app) => (
            <a href={app.url} key={app.id} className="app-card group">
              <div className="app-icon-wrapper">
                <app.icon strokeWidth={1.5} className="app-icon" />
              </div>
              <h2 className="app-title">{app.title}</h2>
              <p className="app-desc">{app.description}</p>

              <div className="card-action">
                <span className="action-text">Buka Aplikasi</span>
                <ArrowRight className="action-arrow" size={16} />
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="portal-footer">
        &copy; {new Date().getFullYear()} PT Cemindo Gemilang (Plant Batam). All rights reserved.
      </footer>
    </>
  );
}

export default App;
