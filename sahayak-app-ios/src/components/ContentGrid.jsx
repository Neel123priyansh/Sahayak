import React from 'react'

const items = [
  { title: 'How being engaged helps', meta: '4 mins', image: 'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=800&auto=format&fit=crop' },
  { title: 'The quick guide to sub plans', meta: 'Guide', image: 'https://images.unsplash.com/photo-1544779493-8c18c67cc5c8?q=80&w=800&auto=format&fit=crop' },
  { title: 'New features for study mode', meta: 'For every child', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop' },
  { title: 'AI teaching tips', meta: 'Article', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop' }
]

export default function ContentGrid() {
  return (
    <section aria-label="Useful Content" className="space-y-4 animate-in">
      <h2 className="text-2xl font-bold">Useful Content For Your Check</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <a key={i.title} href="/stories" className="group block">
            <div className="rounded-2xl overflow-hidden ios-shadow surface-card">
              <div
                className="h-36 bg-center bg-cover transform transition-transform duration-300 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${i.image})` }}
              />
            </div>
            <div className="mt-2">
              <div className="text-sm font-semibold">{i.title}</div>
              <div className="text-xs opacity-70">{i.meta}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

