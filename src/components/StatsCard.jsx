import React, { useState } from 'react';
import { TrendingUpIcon } from './Icons';

export const StatsCard = ({ title, baseValue, prefix = "", suffix = "", data, color = "#6366f1" }) => {
  const [timeframe, setTimeframe] = useState('month');

  const timeframeMultipliers = {
    day: 0.15,
    week: 0.45,
    month: 1,
    year: 12.2,
  };

  const calculatedValue = Math.round(baseValue * timeframeMultipliers[timeframe]);
  const formattedValue = prefix + calculatedValue.toLocaleString() + suffix;

  // Mini Sparkline SVG
  const sparklineData = data[timeframe] || [10, 25, 40, 30, 60, 55, 80, 95];
  const max = Math.max(...sparklineData);
  const min = Math.min(...sparklineData);
  const range = max - min || 1;
  const width = 120;
  const height = 40;

  const points = sparklineData
    .map((val, idx) => {
      const x = (idx / (sparklineData.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(' ');

  const growth = timeframe === 'day' ? '+3.4%' : timeframe === 'week' ? '+8.7%' : timeframe === 'month' ? '+19.2%' : '+42.5%';

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {title}
        </span>
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '2px', border: '1px solid var(--border-color)' }}>
          {['day', 'week', 'month', 'year'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              style={{
                padding: '3px 8px',
                fontSize: '0.7rem',
                textTransform: 'capitalize',
                borderRadius: '6px',
                background: timeframe === tf ? 'var(--accent-primary)' : 'transparent',
                color: timeframe === tf ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: timeframe === tf ? 600 : 500,
                transition: 'all 0.2s',
              }}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '0.25rem' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            {formattedValue}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.25rem', color: 'var(--success)', fontSize: '0.825rem', fontWeight: 600 }}>
            <TrendingUpIcon size={14} />
            <span>{growth}</span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 400, marginLeft: '0.25rem' }}>vs previous {timeframe}</span>
          </div>
        </div>

        {/* SVG Sparkline */}
        <div style={{ width: `${width}px`, height: `${height}px` }}>
          <svg width={width} height={height} style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id={`grad-${title}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points={`0,${height} ${points} ${width},${height}`}
              fill={`url(#grad-${title})`}
            />
            <polyline
              fill="none"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
