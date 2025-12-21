import React from 'react'

export default function StyleGuide() {
  const swatches = [
    { name: 'Brand Green', var: 'var(--brand-green)' },
    { name: 'Brand Amber', var: 'var(--brand-amber)' },
    { name: 'Brand Blue', var: 'var(--brand-blue)' },
    { name: 'Brand Indigo', var: 'var(--brand-indigo)' },
    { name: 'Brand Cyan', var: 'var(--brand-cyan)' },
    { name: 'Neutral BG', var: 'var(--neutral-bg)' },
    { name: 'Neutral Surface', var: 'var(--neutral-surface)' },
    { name: 'Neutral Text', var: 'var(--neutral-text)' },
    { name: 'Neutral Muted', var: 'var(--neutral-muted)' },
    { name: 'Neutral Border', var: 'var(--neutral-border)' },
  ]
  return (
    <div className="space-y-8">
      <section className="surface-card ios-shadow rounded-2xl p-6">
        <h1 className="text-2xl font-bold">Style Guide</h1>
        <p className="text-sm opacity-80">Color palette variables and sample components demonstrating usage in light/dark modes.</p>
      </section>

      <section className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">Palette Swatches</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {swatches.map((s) => (
            <div key={s.name} className="rounded-2xl border border-edu overflow-hidden">
              <div style={{ background: s.var, height: 64 }} />
              <div className="p-3 text-xs">
                <div className="font-medium">{s.name}</div>
                <div className="opacity-70">{s.var}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn">Default</button>
        </div>
      </section>

      <section className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">Chips</h2>
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill pill-active">Active</span>
          <span className="pill">Default</span>
        </div>
      </section>

      <section className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">Surfaces & Text</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-surface border border-default">
            <div className="font-semibold">Card Title</div>
            <p className="text-muted text-sm">Muted description text</p>
          </div>
          <div className="p-4 rounded-2xl bg-brand-blue-10 border border-default">
            <div className="font-semibold text-brand-blue">Blue Accent Title</div>
            <p className="text-sm">Body text using neutral text color.</p>
          </div>
          <div className="p-4 rounded-2xl bg-brand-indigo-10 border border-default">
            <div className="font-semibold text-brand-indigo">Indigo Accent Title</div>
            <p className="text-sm">Body text using neutral text color.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

