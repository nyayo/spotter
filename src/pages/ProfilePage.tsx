import { useState } from 'react';
import { PublicFooter } from '@/components/PublicFooter';
import { useRouter } from '@/router';

const galleryImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDXthYolWOyE1hDszk9UYwxDrkCqW8BteJXKB9A285v76Bjt_OtYOEQKzIPmns_0LQ5838CSJG6nKvy7TnkiIoNWapSF7Ve4v2d4orzxZbm3nM8pyOjJ2nCCms-OSvqgM8yDFeMLUNHqKS3hdqkoTpyTQKTM1vezhLd_8lsJcGldce-VfutmMw96j0XpHXPRc37VqHlhDjcvYbuE1uBTYPdWE8M1PaMbzg-k8K0TRXs3bxA6N1p-YkftXiVtQOLxuqp3oEr1b9zFWUo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBTuAxgw2i_r5BH4xEcEtZX6FrXnClOGQ4hMc5D92HrguDT025N1W4kYAlCHmon4NoYxIoY_x1DB7e1nleHN3DnNXUKF91IiM5Ycvw9_4QUQzgHWdfaD5JmYVu-IZMekcGSz7PP8iyCM3S9WB6rDichhd0vqZHy_UEemIHULNB6hOxLRIio2om20qXPT7cgYcIfGh9xBBt6pxgZ2EGOpKuBEsRtu1g6NK6NUQbt7z-CIkHDnP3hUzYeDK4AjWF3YHFdStzf11U6mqsB',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA9WcK8dLc0zEP4LD1kxISvVxfw8tM3Vp0HDvJDAf-X2YzbQAS1X2JbVwGsv5brAWseboUuxZy7G93XQgZRl9Z8AdaFNjgzaZL3q8ut0vM1OnJgQQbFHM7kwkmdK92D_7xAW3yRqkBxuRHFp2HSplRMk5qcL2Qyjlhj1YrpueAFeJtWcue3Vc29g7ba_7nkSlrU-ee-7xM8v1__yOQ-5UgCMT1ECMJ8b9Gfg3SJtOKqcg7RfX4D8dY3kOWMNGnQBCOQBZZEZLVE0_Xg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC3IouP6tfkmSB8WeF351OnZjEotCzUNXGNHQpDikVoIBWsw95tsW0nv7dtsGUnZhFgTxf4zTR9aXPNasNb4EXL5itelLfoodbdMCl8sfEs8l309QkrQ3myC604Y_vOAPXHjEtJAfSgq6plvKLZfXIrZ1PdHvB766tgO3Ab_vjzba5iSNGoCG8Lg85BIBUQRZOn4Lt-Sgtth87GfRp5FQzjljKQsG4A70MX4a0IJ6_WQSSOXbsmgbgAKaKyFiroAKOrJV1ezTngVoO',
];

const services = ['BDSM', 'French Kissing', 'Handjob', 'Dinner Dates', 'Massage', 'Travel Companion'];

const attributes = [
  { label: 'Language', value: 'English, Luganda' },
  { label: 'Ethnicity', value: 'Black' },
  { label: 'Age', value: '23 Years' },
  { label: 'Height', value: "5'7\" (170cm)" },
  { label: 'Body Type', value: 'Curvy / Athletic' },
  { label: 'Eye Color', value: 'Dark Brown' },
];

const reviews = [
  {
    initials: 'J.D',
    name: 'James D.',
    time: '2 days ago • Verified Booking',
    rating: 5,
    text: 'Incredible evening. She is punctual, elegant, and truly professional. Highly recommended for anyone seeking quality companionship in the city.',
  },
  {
    initials: 'M.K',
    name: 'Michael K.',
    time: '1 week ago • Verified Booking',
    rating: 5,
    text: 'Absolutely stunning and intelligent. Made the whole evening feel natural and special. Will definitely book again.',
  },
];

export function ProfilePage() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'reviews' | 'questions'>('reviews');

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate({ name: 'videos' })}
              className="flex items-center gap-1 transition-colors duration-150 hover:text-primary active:scale-95"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="hidden text-sm font-medium md:block">Back</span>
            </button>
            <div className="hidden items-center gap-2 text-sm font-medium text-on-surface-variant md:flex">
              <span>Escorts</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span>Kampala</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="font-display text-secondary">Shamirah</span>
            </div>
          </div>
          <h1 className="font-display text-[28px] text-secondary">Shamirah</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 transition-colors hover:text-secondary active:scale-95" title="Bookmark">
              <span className="material-symbols-outlined">bookmark</span>
            </button>
            <button className="hidden text-sm font-medium text-on-surface-variant transition-colors hover:text-primary md:block">
              Support
            </button>
            <button
              onClick={() => navigate({ name: 'auth' })}
              className="text-sm font-bold text-primary"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto min-h-screen max-w-[1280px] px-6 py-8">
        {/* Action bar */}
        <div className="mb-8 flex justify-center gap-4 py-4 md:gap-8">
          {[
            { icon: 'call', label: 'Call Me', color: 'primary' },
            { icon: 'link', label: 'Link', color: 'secondary' },
            { icon: 'chat', label: 'Ask Me', color: 'outline' },
            { icon: 'star_rate', label: 'Rate Me', color: 'outline' },
          ].map((action) => (
            <button key={action.label} className="group flex flex-col items-center gap-2 transition-all duration-150 active:scale-95">
              <div
                className={
                  'flex h-12 w-12 items-center justify-center rounded-full transition-colors ' +
                  (action.color === 'primary'
                    ? 'bg-primary-container/10 text-primary-container group-hover:bg-primary-container group-hover:text-white'
                    : action.color === 'secondary'
                      ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary'
                      : 'bg-surface-container text-outline hover:bg-outline/20')
                }
              >
                <span className="material-symbols-outlined">{action.icon}</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-secondary">
                {action.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left: Gallery */}
          <section className="space-y-4 lg:w-[40%]">
            <div className="grid grid-cols-2 gap-3">
              <div className="group relative col-span-2 aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[0]}
                  alt="Shamirah"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                    <span className="h-2 w-2 animate-pulse-dot rounded-full bg-green-500" />
                    ONLINE NOW
                  </span>
                </div>
              </div>
              {galleryImages.slice(1).map((img, i) => (
                <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`Gallery ${i + 2}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center glass-overlay opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-lg bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                      Verified Media
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex aspect-[4/5] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high">
                <span className="material-symbols-outlined text-4xl">add_photo_alternate</span>
                <span className="text-xs font-bold uppercase tracking-widest">+3 Photos</span>
              </div>
            </div>
            {/* Pricing */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'INCALL', price: 'USh 150,000' },
                { label: 'OUTCALL', price: 'USh 180,000' },
              ].map((p) => (
                <div
                  key={p.label}
                  className="group cursor-pointer rounded-lg bg-surface-container-low p-6 transition-all duration-300 hover:bg-surface-container"
                >
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    {p.label}
                  </span>
                  <div className="font-display text-xl text-secondary transition-colors group-hover:text-secondary-fixed">
                    {p.price}
                  </div>
                  <span className="text-xs text-on-surface-variant">Per Hour</span>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Info */}
          <section className="space-y-8 lg:w-[60%]">
            {/* Video placeholder */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-xl">
              <div className="flex h-full w-full items-center justify-center bg-surface-container">
                <div className="flex flex-col items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-5xl">videocam</span>
                  <span className="text-sm font-bold uppercase tracking-widest">Video Preview</span>
                </div>
              </div>
            </div>

            {/* About */}
            <div>
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl text-on-surface">
                About Shamirah
                <span className="h-2 w-2 rounded-full bg-secondary" />
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                I am a sophisticated and elegant companion dedicated to providing a premium, discreet
                experience. With a focus on intellectual connection as much as physical attraction, I
                ensure every encounter is memorable and tailored to your desires. Whether it's a social
                event or a private evening, my presence brings grace and warmth.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-secondary">
                Services Offered
              </h3>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <span
                    key={s}
                    className="cursor-default rounded-full bg-surface-container-high px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Attributes */}
            <div className="rounded-lg bg-surface-container-low p-6">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-secondary">
                Personal Attributes
              </h3>
              <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
                {attributes.map((attr) => (
                  <div
                    key={attr.label}
                    className="flex items-center justify-between py-2"
                  >
                    <span className="text-sm font-medium text-on-surface-variant">{attr.label}</span>
                    <span className="font-medium">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="pt-4">
              <div className="mb-6 flex gap-8">
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={
                    'pb-4 text-sm font-medium transition-all active:scale-95 ' +
                    (activeTab === 'reviews'
                      ? 'border-b-2 border-secondary font-bold text-secondary'
                      : 'border-b-2 border-transparent text-on-surface-variant hover:text-on-surface')
                  }
                >
                  Reviews (12)
                </button>
                <button
                  onClick={() => setActiveTab('questions')}
                  className={
                    'pb-4 text-sm font-medium transition-all active:scale-95 ' +
                    (activeTab === 'questions'
                      ? 'border-b-2 border-secondary font-bold text-secondary'
                      : 'border-b-2 border-transparent text-on-surface-variant hover:text-on-surface')
                  }
                >
                  Questions
                </button>
              </div>

              {activeTab === 'reviews' ? (
                <div className="space-y-6">
                  {/* Star widget */}
                  <div className="flex items-center gap-6 rounded-lg bg-surface-container-high/50 p-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary">4.8</div>
                      <div className="flex text-secondary-fixed">
                        {[0, 1, 2, 3].map((i) => (
                          <span key={i} className="material-symbols-outlined fill text-sm">star</span>
                        ))}
                        <span className="material-symbols-outlined text-sm">star_half</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[
                        { star: 5, pct: '85%' },
                        { star: 4, pct: '15%' },
                      ].map((r) => (
                        <div key={r.star} className="flex items-center gap-2 text-sm">
                          <span className="w-4">{r.star}</span>
                          <div className="h-1.5 flex-1 rounded-full bg-surface-container-highest">
                            <div className="h-full rounded-full bg-secondary" style={{ width: r.pct }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="rounded-lg bg-primary-container px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:brightness-110 active:scale-95">
                      Write Review
                    </button>
                  </div>

                  {/* Individual reviews */}
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.name} className="space-y-2 rounded-lg bg-surface-container p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-variant font-bold text-on-surface-variant">
                              {review.initials}
                            </div>
                            <div>
                              <div className="text-sm font-medium">{review.name}</div>
                              <div className="text-xs text-on-surface-variant">{review.time}</div>
                            </div>
                          </div>
                          <div className="flex text-secondary">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <span key={i} className="material-symbols-outlined fill text-xs">star</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-on-surface-variant">"{review.text}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined mb-2 text-4xl">forum</span>
                  <p className="text-sm">No questions yet. Be the first to ask.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <PublicFooter />

      {/* WhatsApp floating widget */}
      <a href="#" className="fixed bottom-8 right-8 z-50 group flex items-center gap-3">
        <div className="translate-x-4 rounded-full bg-surface-container px-4 py-2 opacity-0 shadow-2xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <span className="text-sm font-medium text-secondary">Chat with Shamirah</span>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform active:scale-90">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-1.019-.341-1.928-.745-1.547-.687-2.529-2.264-2.606-2.364-.077-.1-.627-.835-.627-1.595 0-.759.4-1.132.541-1.277.145-.144.312-.18.417-.18.104 0 .208.001.301.003.097 0 .227-.037.355.271.132.312.45.1.545.298.096.198.096.396.032.529-.064.133-.16.216-.251.319-.091.104-.199.176-.08.384.119.208.531.876 1.139 1.419.787.702 1.447.92 1.656 1.024.208.104.331.088.455-.054.125-.144.531-.617.672-.828.141-.21.282-.176.47-.104.188.072 1.198.565 1.402.669.204.104.341.156.391.24.049.084.049.488-.095.893z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
