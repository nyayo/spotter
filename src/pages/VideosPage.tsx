import { useState } from 'react';
import { videos } from '@/data/videos';
import { PublicHeader } from '@/components/PublicHeader';
import { PublicFooter } from '@/components/PublicFooter';
import { useRouter } from '@/router';

export function VideosPage() {
  const { navigate } = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      <main className="mx-auto min-h-screen max-w-[1280px] px-6 py-8">
        <nav className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <a className="transition-colors hover:text-secondary" href="#">Home</a>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-secondary">Videos</span>
        </nav>
        <h1 className="mb-8 font-display text-5xl text-on-surface">
          Escort Videos from Uganda
        </h1>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {videos.map((video, i) => (
            <div
              key={video.id}
              className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-xl bg-surface-container-high transition-all duration-300"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate({ name: 'profile' })}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-300 group-hover:from-black/90" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-container/80 shadow-lg backdrop-blur-sm transition-all duration-300"
                  style={{ transform: hoveredCard === i ? 'scale(1.15)' : 'scale(1)' }}
                >
                  <span className="material-symbols-outlined fill text-3xl text-white">play_arrow</span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-30 space-y-2 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-secondary">
                    <img src={video.avatar} alt={video.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="truncate font-display text-lg text-secondary">{video.name}</h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">visibility</span>
                        {video.views}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-outline-variant" />
                      <span>{video.city}</span>
                    </div>
                  </div>
                </div>
              </div>
              {video.online && (
                <div className="absolute right-4 top-4 z-30">
                  <span className="rounded bg-green-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400 backdrop-blur-md">
                    Online
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="mx-auto mt-8 max-w-3xl pt-8 text-center">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Premium Video Directory
          </h2>
          <p className="text-sm leading-relaxed opacity-80 text-on-surface-variant">
            Discover the most exclusive collection of verified escort videos in Uganda. AfroHot
            provides a discreet and premium platform for discerning clients to browse high-definition
            video previews of Kampala's most sought-after companions. Our directory ensures that every
            profile meets the highest standards of elegance and professionalism.
          </p>
        </section>
      </main>
      <PublicFooter />

      {/* Side filter tabs */}
      <div className="fixed left-0 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-1">
        {['filter_list', 'verified'].map((icon) => (
          <div key={icon} className="group flex items-center">
            <div className="cursor-pointer rounded-r-lg bg-surface-container-low p-3 text-secondary transition-all hover:bg-secondary/10">
              <span className="material-symbols-outlined">{icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
