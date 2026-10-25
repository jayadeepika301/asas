import React, { useState, useEffect } from 'react';
import { StatsCard } from './components/StatsCard';
import { InteractiveWidget } from './components/InteractiveWidget';
import { PropsExplorer } from './components/PropsExplorer';
import { SunIcon, MoonIcon, GitHubIcon, VercelIcon, LayersIcon, ActivityIcon, SparklesIcon } from './components/Icons';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('component');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10, 15, 29, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        padding: '0.85rem 2rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(99,102,241,0.4)'
            }}>
              <LayersIcon size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>ASAS</span>
                <span style={{
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--success)',
                  fontWeight: 700,
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} className="pulse-indicator" />
                  LIVE ON VERCEL
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Production React Component Suite</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="https://github.com/jayadeepika301/asas"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-color)',
                padding: '0.5rem 0.95rem',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
            >
              <GitHubIcon size={18} />
              <span>GitHub Repo</span>
            </a>

            <button
              onClick={toggleTheme}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '4px 14px',
            borderRadius: '999px',
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.25)',
            color: 'var(--accent-primary)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            <SparklesIcon size={14} />
            Built & Deployed for jayadeepika301
          </div>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Interactive React Component <br />
            <span className="gradient-text">Engineered for High Performance</span>
          </h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Modern architecture featuring glassmorphism design, real-time KPI sparklines, state-driven workflow management, and zero runtime overhead.
          </p>
        </div>

        {/* Stats KPI Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          <StatsCard
            title="Total Operations"
            baseValue={18420}
            data={{
              day: [120, 145, 130, 170, 195, 230, 260],
              week: [850, 920, 1050, 1180, 1340, 1420],
              month: [3400, 4100, 5200, 6800, 8900, 11400, 14200, 18420],
              year: [45000, 68000, 95000, 120000, 184200],
            }}
            color="#6366f1"
          />
          <StatsCard
            title="Component Render Rate"
            baseValue={99}
            suffix="%"
            data={{
              day: [98.2, 98.7, 99.1, 99.4, 99.8],
              week: [97.5, 98.0, 98.8, 99.2, 99.6],
              month: [96.0, 97.4, 98.2, 99.1, 99.9],
              year: [94.0, 96.5, 98.1, 99.9],
            }}
            color="#10b981"
          />
          <StatsCard
            title="Active State Handlers"
            baseValue={142}
            data={{
              day: [40, 65, 80, 95, 110, 142],
              week: [60, 85, 90, 105, 125, 142],
              month: [30, 50, 75, 90, 115, 142],
              year: [15, 35, 60, 95, 142],
            }}
            color="#ec4899"
          />
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('component')}
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'component' ? 700 : 500,
              background: activeTab === 'component' ? 'rgba(99,102,241,0.18)' : 'transparent',
              color: activeTab === 'component' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              border: activeTab === 'component' ? '1px solid rgba(99,102,241,0.35)' : '1px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <ActivityIcon size={18} />
            Live Component Showcase
          </button>

          <button
            onClick={() => setActiveTab('props')}
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'props' ? 700 : 500,
              background: activeTab === 'props' ? 'rgba(99,102,241,0.18)' : 'transparent',
              color: activeTab === 'props' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              border: activeTab === 'props' ? '1px solid rgba(99,102,241,0.35)' : '1px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <LayersIcon size={18} />
            Props Explorer & Code
          </button>
        </div>

        {/* Dynamic Tab Panels */}
        {activeTab === 'component' && <InteractiveWidget />}
        {activeTab === 'props' && <PropsExplorer />}

        {/* DevOps Info Card */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#000',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <VercelIcon size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>Vercel Edge Network Deployment</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Auto CI/CD branch sync from GitHub repository <code>jayadeepika301/asas</code></div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="https://github.com/jayadeepika301/asas"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                background: 'var(--accent-gradient)',
                color: '#fff',
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Inspect Repository
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-color)',
        padding: '1.5rem 2rem',
        marginTop: 'auto',
        background: 'rgba(10, 15, 29, 0.4)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <p>Built with React + Vite • Deployed on Vercel • Repository: <a href="https://github.com/jayadeepika301/asas" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>jayadeepika301/asas</a></p>
      </footer>
    </div>
  );
}
