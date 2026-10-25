import React, { useState } from 'react';
import { CopyIcon } from './Icons';

export const PropsExplorer = () => {
  const [componentProps, setComponentProps] = useState({
    title: 'Production Pipeline',
    status: 'Operational',
    autoRefresh: true,
    refreshInterval: 15,
    variant: 'gradient',
  });

  const [copied, setCopied] = useState(false);

  const sampleCode = `import { InteractiveWidget } from './components/InteractiveWidget';

export default function MyDashboard() {
  return (
    <InteractiveWidget
      title="${componentProps.title}"
      status="${componentProps.status}"
      autoRefresh={${componentProps.autoRefresh}}
      refreshInterval={${componentProps.refreshInterval}}
      variant="${componentProps.variant}"
    />
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Component Props & Code Playground</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Configure live attributes and generate integration code.</p>
        </div>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            padding: '0.45rem 0.85rem',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}
        >
          <CopyIcon size={16} />
          {copied ? 'Copied Snippet!' : 'Copy React Code'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
            Prop: title
          </label>
          <input
            type="text"
            value={componentProps.title}
            onChange={(e) => setComponentProps({ ...componentProps, title: e.target.value })}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
            Prop: status
          </label>
          <select
            value={componentProps.status}
            onChange={(e) => setComponentProps({ ...componentProps, status: e.target.value })}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
            }}
          >
            <option value="Operational">Operational</option>
            <option value="Degraded">Degraded</option>
            <option value="Syncing">Syncing</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
            Prop: refreshInterval (seconds)
          </label>
          <input
            type="number"
            value={componentProps.refreshInterval}
            onChange={(e) => setComponentProps({ ...componentProps, refreshInterval: Number(e.target.value) })}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1.25rem' }}>
          <input
            type="checkbox"
            id="autoRefresh"
            checked={componentProps.autoRefresh}
            onChange={(e) => setComponentProps({ ...componentProps, autoRefresh: e.target.checked })}
            style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
          />
          <label htmlFor="autoRefresh" style={{ fontSize: '0.875rem', color: 'var(--text-primary)', cursor: 'pointer' }}>
            autoRefresh ({componentProps.autoRefresh ? 'Enabled' : 'Disabled'})
          </label>
        </div>
      </div>

      {/* Code Block Preview */}
      <div style={{ background: '#0b1120', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 1.25rem', overflowX: 'auto' }}>
        <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#38bdf8' }}>
          <code>{sampleCode}</code>
        </pre>
      </div>
    </div>
  );
};
