import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircleIcon, PlusIcon, TrashIcon, SparklesIcon, CopyIcon } from './Icons';

export const InteractiveWidget = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Initialize Vite React component framework', tag: 'Core', priority: 'High', completed: true },
    { id: 2, text: 'Design responsive glassmorphism UI architecture', tag: 'Design', priority: 'High', completed: true },
    { id: 3, text: 'Connect GitHub repository jayadeepika301/asas', tag: 'DevOps', priority: 'High', completed: true },
    { id: 4, text: 'Configure automated production deploy on Vercel', tag: 'Deployment', priority: 'High', completed: true },
    { id: 5, text: 'Add interactive animations and confetti interactions', tag: 'UI/UX', priority: 'Medium', completed: false },
    { id: 6, text: 'Perform cross-device responsiveness verification', tag: 'QA', priority: 'Normal', completed: false }
  ]);

  const [filter, setFilter] = useState('all');
  const [newText, setNewText] = useState('');
  const [newCategory, setNewCategory] = useState('Core');
  const [newPriority, setNewPriority] = useState('Medium');
  const [copied, setCopied] = useState(false);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const nextState = !t.completed;
        if (nextState) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        }
        return { ...t, completed: nextState };
      }
      return t;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newText.trim(),
      tag: newCategory,
      priority: newPriority,
      completed: false
    };
    setTasks([newTask, ...tasks]);
    setNewText('');
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    if (filter === 'high') return t.priority === 'High';
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(tasks, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header and Progress */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Component Control Center</h2>
            <span style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))',
              color: '#818cf8',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '999px',
              padding: '2px 10px',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}>
              Interactive v1.0
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            Full state management, event hooks, and reactive milestone tracking.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={triggerCelebration}
            className="glow-effect"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--accent-gradient)',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            <SparklesIcon size={16} />
            Celebrate
          </button>
          <button
            onClick={handleCopyJSON}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              padding: '0.5rem 0.85rem',
              borderRadius: '10px',
              fontWeight: 500,
              fontSize: '0.85rem'
            }}
          >
            <CopyIcon size={16} />
            {copied ? 'Copied!' : 'Export JSON'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          <span style={{ color: 'var(--text-secondary)' }}>Milestone Execution Progress</span>
          <span style={{ color: 'var(--accent-primary)' }}>{progressPercent}% Complete ({completedCount}/{tasks.length})</span>
        </div>
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
          <div
            style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'var(--accent-gradient)',
              borderRadius: '999px',
              transition: 'width 0.4s ease-out'
            }}
          />
        </div>
      </div>

      {/* Add Task Form */}
      <form onSubmit={addTask} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '0.5rem' }}>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Add a new feature, component task, or deliverable..."
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            padding: '0.65rem 1rem',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            padding: '0.65rem 0.85rem',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            outline: 'none',
          }}
        >
          <option value="Core">Core</option>
          <option value="Design">Design</option>
          <option value="DevOps">DevOps</option>
          <option value="Deployment">Deployment</option>
          <option value="UI/UX">UI/UX</option>
          <option value="QA">QA</option>
        </select>
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            padding: '0.65rem 0.85rem',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            outline: 'none',
          }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Normal">Normal</option>
        </select>
        <button
          type="submit"
          style={{
            background: 'var(--accent-primary)',
            color: '#fff',
            borderRadius: '10px',
            padding: '0.65rem 1.25rem',
            fontWeight: 600,
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'background 0.2s',
          }}
        >
          <PlusIcon size={16} />
          Add
        </button>
      </form>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
        {[
          { key: 'all', label: `All (${tasks.length})` },
          { key: 'active', label: `In Progress (${tasks.filter(t => !t.completed).length})` },
          { key: 'completed', label: `Completed (${completedCount})` },
          { key: 'high', label: `High Priority (${tasks.filter(t => t.priority === 'High').length})` },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.825rem',
              fontWeight: filter === tab.key ? 700 : 500,
              background: filter === tab.key ? 'rgba(99,102,241,0.15)' : 'transparent',
              color: filter === tab.key ? 'var(--accent-primary)' : 'var(--text-secondary)',
              border: filter === tab.key ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {filteredTasks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
            No items in this filter view.
          </div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className="animate-fade-in"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.15rem',
                borderRadius: '12px',
                background: task.completed ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-color)',
                opacity: task.completed ? 0.75 : 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1 }}>
                <button
                  onClick={() => toggleTask(task.id)}
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '6px',
                    border: task.completed ? 'none' : '2px solid var(--text-muted)',
                    background: task.completed ? 'var(--success)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0
                  }}
                >
                  {task.completed && <CheckCircleIcon size={16} />}
                </button>
                <span
                  style={{
                    fontSize: '0.95rem',
                    color: task.completed ? 'var(--text-muted)' : 'var(--text-primary)',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    fontWeight: 500,
                  }}
                >
                  {task.text}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: 'rgba(255,255,255,0.06)',
                  color: 'var(--text-secondary)',
                }}>
                  {task.tag}
                </span>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: task.priority === 'High' ? 'rgba(239, 68, 68, 0.15)' : task.priority === 'Medium' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                  color: task.priority === 'High' ? 'var(--danger)' : task.priority === 'Medium' ? 'var(--warning)' : 'var(--success)',
                }}>
                  {task.priority}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    padding: '4px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Remove task"
                >
                  <TrashIcon size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
