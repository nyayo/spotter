import { useState } from 'react';
import { PublicFooter } from '@/components/PublicFooter';
import { useRouter } from '@/router';

const wizardPhotos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC8b_Pb0WmKgpIq_zL5DNBJM5dpbCUnok--4xcK2u6XHD70jBTrF0kWg6UPazNCGTpjAAHOL1MIp3fYt3Ep3YdkHRqU5nIGMH51EQIwpKzBdaozZ6iXubxlT3GFurUSjit_7G9CPZfskL4GqUjgg_fKP7RDo6QhQBodaLUyojpbyp9bm88o06RzSB7jwROg-ixqHOjGdl8EoyE8c8HoKA4eQUX6oAIOpYK-3nbotkN2pkDONLj4tCaXQhwwsZX9s3dhpOIsr0vyvkmB',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBwXSoz9TODkGQMbD0HqOkS11HqcEzbBouwArffA6AtQgoNe3Ra8G_9Zqj_IWV5MYq8h8MxbjTxsBbj2mDWMZUh2acO68B_ftDKKxmtF0kwgMcfb1lDtp35TlqObwFeLj_gbTzWp8PGxPCREEUIl21n2kSiy4ZBFCE54Zvwodt8YRwg0phuzmfvnCGdtH3l-XtQ0gKv3gXA94SxJ0stDTw_1Ivkj-EaGWfdg6Bq8onj2LFKTb8GUQ-aVq-CZYEm3Oxycx9aJ11Z0Z5N',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA9Gw3VsQCZr1U1UdgxF_YWJwwB1K1Gmsa5zVcgbCLUrK5xxYw97Vu1g_rS8hMuHdDrsWhpDuArLaUsX4zGHqx50c3J7KT2geDaN7V9ybbLgRId2hk1Ys-hxFpxgQrI__yB7l442jrSaT3lL8ASwHUWWsXS6Brva1PLcEMtu70VUT0kDPpUX1w-OUfBxusAFocLKsdVwNvgqvSADYv6sDgEF3J1yPzkJcUYyZoX2ouDtL0NWBr1LbBskfSSnqnpifm1QyGPvOa5hdmA',
];

export function AuthPage() {
  const { navigate } = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-background p-6">
      <main className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        {/* Auth panel */}
        <section className="mx-auto flex w-full max-w-md flex-col gap-8 md:mx-0">
          {mode === 'login' ? (
            <div className="glass-panel animate-fade-in rounded-xl p-8 gold-glow">
              <div className="mb-8 flex flex-col items-center">
                <h1 className="mb-2 font-display text-[28px] text-secondary">AfroHot</h1>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Sign in to your account
                </p>
              </div>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate({ name: 'videos' });
                }}
              >
                <div>
                  <label className="mb-2 block text-sm font-medium text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full rounded-lg bg-surface-container-low px-4 py-3 text-on-surface transition-all duration-150 focus:ring-1 focus:ring-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-on-surface-variant">Password</label>
                    <a className="text-xs text-secondary hover:underline" href="#">Forgot?</a>
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-surface-container-low px-4 py-3 text-on-surface transition-all duration-150 focus:ring-1 focus:ring-secondary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-container py-4 font-bold text-white transition-all duration-150 hover:bg-inverse-primary active:scale-95 gold-glow"
                >
                  Login
                </button>
              </form>
              <div className="mt-8 pt-6 text-center">
                <p className="text-sm text-on-surface-variant">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="ml-1 font-bold text-secondary hover:underline"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div className="glass-panel animate-fade-in rounded-xl p-8">
              <div className="mb-8 flex flex-col items-center">
                <h2 className="mb-2 font-display text-[28px] text-secondary">AfroHot</h2>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Join the luxury directory
                </p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => navigate({ name: 'videos' })}
                  className="group flex w-full items-center justify-between rounded-xl bg-surface-container-low p-5 transition-all duration-150 hover:bg-surface-container"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-on-surface">Register as User</span>
                      <span className="block text-xs text-on-surface-variant">
                        Browse and connect with companions
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover:text-secondary">
                    chevron_right
                  </span>
                </button>
                <button
                  onClick={() => navigate({ name: 'videos' })}
                  className="group flex w-full items-center justify-between rounded-xl bg-surface-container-low p-5 transition-all duration-150 hover:bg-surface-container"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">stars</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-on-surface">Register as Escort</span>
                      <span className="block text-xs text-on-surface-variant">
                        Create your profile and start earning
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover:text-primary">
                    chevron_right
                  </span>
                </button>
              </div>
              <div className="mt-8 pt-6 text-center">
                <p className="text-sm text-on-surface-variant">
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="ml-1 font-bold text-secondary hover:underline"
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Wizard preview */}
        <section className="w-full animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="glass-panel overflow-hidden rounded-xl">
            <div className="bg-surface-container-high p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Step 4: Media Assets
                </span>
                <span className="text-xs text-on-surface-variant">4 of 5 Complete</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <div className="h-full w-[80%] rounded-full bg-secondary" />
              </div>
            </div>
            <div className="space-y-8 p-8">
              <div>
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl text-on-surface">Profile Gallery</h3>
                    <p className="text-sm text-on-surface-variant">
                      Drag and drop to reorder. Max 8 high-res photos.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-secondary">3/8 Selected</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {wizardPhotos.map((img, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[4/5] overflow-hidden rounded-lg"
                    >
                      <img
                        src={img}
                        alt={`Upload ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-error">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                      {i === 0 && (
                        <div className="absolute left-2 top-2 rounded bg-secondary px-2 py-1 text-[10px] font-bold text-on-secondary">
                          PRIMARY
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="group flex aspect-[4/5] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-white/10 bg-white/5 transition-all hover:border-secondary/40 hover:bg-secondary/5">
                    <span className="material-symbols-outlined mb-2 text-3xl transition-colors group-hover:text-secondary">
                      add_photo_alternate
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Add Photo</span>
                  </div>
                  <div className="aspect-[4/5] rounded-lg bg-white/[0.02]" />
                  <div className="aspect-[4/5] rounded-lg bg-white/[0.02]" />
                </div>
              </div>
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <h3 className="font-display text-xl text-on-surface">Identity Video</h3>
                  <span className="rounded bg-secondary/10 px-2 py-0.5 text-[10px] font-bold text-secondary">
                    RECOMMENDED
                  </span>
                </div>
                <div className="rounded-xl bg-surface-container-low p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <span className="material-symbols-outlined">videocam</span>
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-on-surface">
                          verification_clip_v1.mp4
                        </span>
                        <span className="block text-xs text-on-surface-variant">
                          12.4 MB • 80% uploaded
                        </span>
                      </div>
                    </div>
                    <button className="text-on-surface-variant transition-colors hover:text-error">
                      <span className="material-symbols-outlined">cancel</span>
                    </button>
                  </div>
                  <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                    <div className="relative h-full w-[80%] overflow-hidden rounded-full bg-primary">
                      <div className="absolute inset-0 animate-shimmer bg-white/20" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    <span>Uploading...</span>
                    <span>2.1s remaining</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-surface-container-high/50 p-6">
              <button className="flex items-center gap-2 text-sm font-bold text-on-surface-variant transition-colors hover:text-on-surface">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back
              </button>
              <button className="rounded-lg bg-secondary px-8 py-3 font-bold text-on-secondary shadow-lg shadow-secondary/10 transition-all hover:bg-secondary-fixed">
                Continue to Step 5
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 mt-20 w-full max-w-[1280px] px-6 py-12 text-center">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="text-left">
            <span className="mb-2 block font-display text-2xl text-secondary">AfroHot</span>
            <p className="max-w-xs text-sm text-on-surface-variant">
              © 2024 AfroHot. All rights reserved. High-end discreet companion directory.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            {['About', 'Blog', 'Help', 'Guide', 'Terms'].map((l) => (
              <a
                key={l}
                className="text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-secondary"
                href="#"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
