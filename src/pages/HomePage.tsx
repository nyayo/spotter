import { useState } from 'react';
import { videos } from '@/data/videos';
import { PublicHeader } from '@/components/PublicHeader';
import { PublicFooter } from '@/components/PublicFooter';
import { useRouter } from '@/router';

const heroImage =
  'https://images.pexels.com/photos/37397334/pexels-photo-37397334.jpeg?auto=compress&cs=tinysrgb&w=1600';

const cities = ['Kampala', 'Entebbe', 'Jinja', 'Nairobi', 'Accra', 'Lagos', 'Johannesburg'];

const stats = [
  { value: '2,400+', label: 'Verified Companions' },
  { value: '180+', label: 'Cities Covered' },
  { value: '15k+', label: 'Happy Clients' },
  { value: '99.8%', label: 'Verification Rate' },
];

export function HomePage() {
  const { navigate } = useRouter();
  const [activeCity, setActiveCity] = useState('Kampala');

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Hero */}
      <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
          <span className="mb-6 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Africa's Premier Companion Directory
          </span>
          <h1 className="mb-6 font-display text-5xl leading-tight text-on-surface md:text-6xl">
            Discover Elegance,
            <br />
            <span className="text-secondary">Discretion &amp; Luxury</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            Browse verified, high-end companions across Africa. Every profile is identity-checked
            and curated for discerning clients who value quality.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => navigate({ name: 'videos' })}
              className="rounded-xl bg-primary-container px-8 py-4 font-bold text-white transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,90,31,0.3)] active:scale-95"
            >
              Browse Companions
            </button>
            <button
              onClick={() => navigate({ name: 'auth' })}
              className="rounded-xl bg-white/5 px-8 py-4 font-bold text-on-surface backdrop-blur-md transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              Join as Escort
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="font-display text-4xl text-secondary md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* City filter */}
      <section className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-display text-3xl text-on-surface">Explore by City</h2>
          <p className="text-sm text-on-surface-variant">Find companions in your area</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ' +
                (activeCity === city
                  ? 'bg-secondary text-on-secondary shadow-lg shadow-secondary/10'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high')
              }
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Featured companions */}
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-on-surface">Featured Companions</h2>
            <p className="mt-1 text-sm text-on-surface-variant">Hand-picked profiles from {activeCity}</p>
          </div>
          <button
            onClick={() => navigate({ name: 'videos' })}
            className="flex items-center gap-1 text-sm font-bold text-secondary transition-colors hover:text-secondary-fixed"
          >
            View All
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {videos.slice(0, 8).map((companion) => (
            <div
              key={companion.id}
              onClick={() => navigate({ name: 'profile' })}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-surface-container-high transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={companion.thumbnail}
                alt={companion.name}
                className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {companion.online && (
                <div className="absolute right-3 top-3">
                  <span className="flex items-center gap-1.5 rounded-full bg-green-500/20 px-2.5 py-1 text-[10px] font-bold text-green-400 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-green-500" />
                    Online
                  </span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-xl text-secondary">{companion.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">visibility</span>
                    {companion.views}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-outline-variant" />
                  <span>{companion.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-on-surface">How It Works</h2>
          <p className="mt-2 text-sm text-on-surface-variant">A simple, discreet process from browse to booking</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: 'search', title: 'Browse & Discover', desc: 'Filter by city, services, and availability to find your ideal companion.' },
            { icon: 'verified', title: 'Verified Profiles', desc: 'Every companion undergoes identity verification for your safety and peace of mind.' },
            { icon: 'chat', title: 'Connect Discreetly', desc: 'Reach out through our secure messaging system to arrange your engagement.' },
          ].map((step, i) => (
            <div key={step.title} className="flex flex-col items-center rounded-2xl bg-surface-container-low p-8 text-center transition-colors hover:bg-surface-container">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
              </div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Step {i + 1}</div>
              <h3 className="mb-3 font-display text-xl text-on-surface">{step.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-container-high to-surface-container-low p-12 text-center">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="mb-4 font-display text-3xl text-on-surface md:text-4xl">
              Ready to Join AfroHot?
            </h2>
            <p className="mb-8 max-w-lg text-sm text-on-surface-variant">
              Whether you're a companion looking to grow your clientele or a client seeking premium
              experiences, AfroHot is your trusted platform.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => navigate({ name: 'auth' })}
                className="rounded-xl bg-secondary px-8 py-4 font-bold text-on-secondary transition-all duration-200 hover:shadow-[0_0_30px_rgba(226,196,111,0.2)] active:scale-95"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate({ name: 'videos' })}
                className="rounded-xl bg-white/5 px-8 py-4 font-bold text-on-surface transition-all duration-200 hover:bg-white/10 active:scale-95"
              >
                Explore Directory
              </button>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
