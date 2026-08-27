import { useState } from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';
import { approvalProfiles, type ApprovalProfile } from '@/data/approvals';
import { useRouter } from '@/router';

export function AdminApprovalsPage() {
  const { navigate } = useRouter();
  const [selectedId, setSelectedId] = useState<string>(approvalProfiles[0].id);
  const [search, setSearch] = useState('');

  const selected = approvalProfiles.find((p) => p.id === selectedId) ?? approvalProfiles[0];
  const filtered = approvalProfiles.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar activeRoute="admin-approvals" />
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between bg-surface-container px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="font-display text-xl text-on-surface">Approval Queue</span>
            <span className="rounded-full bg-primary-container px-2 py-0.5 text-[11px] font-bold text-white">
              {approvalProfiles.length} PENDING
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center rounded-lg bg-surface-container-lowest px-3 py-1.5">
              <span className="material-symbols-outlined text-sm text-on-surface-variant">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search profiles..."
                className="w-64 border-none bg-transparent text-sm text-on-surface focus:ring-0 focus:outline-none placeholder:text-on-surface-variant/40"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary">notifications</span>
              <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary">mail</span>
              <button
                onClick={() => navigate({ name: 'admin-users' })}
                className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary"
              >
                settings
              </button>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* List */}
          <section className="w-1/3 overflow-y-auto bg-surface-container-low/30 scrollbar-hide">
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Priority Queue
                </span>
                <span className="material-symbols-outlined cursor-pointer text-sm text-on-surface-variant">
                  filter_list
                </span>
              </div>
              {filtered.map((profile) => (
                <PendingCard
                  key={profile.id}
                  profile={profile}
                  active={profile.id === selectedId}
                  onClick={() => setSelectedId(profile.id)}
                />
              ))}
            </div>
          </section>

          {/* Detail */}
          <section className="relative flex flex-1 flex-col bg-surface-container-lowest/50">
            {/* Action banner */}
            <div className="sticky top-0 z-10 flex h-16 items-center justify-between bg-surface-container-high px-8">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Moderating Profile:
                </span>
                <span className="font-bold text-on-surface">{selected.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-lg bg-error/10 px-6 py-2 text-sm font-bold text-error transition-all hover:bg-error/20">
                  REJECT
                </button>
                <button className="rounded-lg bg-primary-container px-6 py-2 text-sm font-bold text-white transition-all hover:shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                  APPROVE PROFILE
                </button>
              </div>
            </div>

            {/* Detail content */}
            <div className="flex-1 overflow-y-auto p-10 scrollbar-hide">
              <div className="mx-auto max-w-4xl space-y-12">
                {/* Header */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl md:w-72">
                    <img
                      src={selected.thumbnail}
                      alt={selected.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6">
                      <div className="flex gap-2">
                        <span className="rounded bg-white/20 px-2 py-1 text-[10px] text-white backdrop-blur-md">
                          Primary Photo
                        </span>
                        <span className="rounded bg-green-500/20 px-2 py-1 text-[10px] text-green-400 backdrop-blur-md">
                          No Nudity Detected
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-display text-4xl text-secondary">{selected.name}</span>
                        <span className="rounded bg-secondary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary">
                          {selected.tier === 'PREMIUM' ? 'Premium Member' : 'Basic Member'}
                        </span>
                      </div>
                      <p className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {selected.location}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-surface-container p-4">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">
                          Hourly Rate
                        </p>
                        <p className="text-lg font-bold text-on-surface">{selected.rate}</p>
                      </div>
                      <div className="rounded-xl bg-surface-container p-4">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">
                          Status
                        </p>
                        <p className="flex items-center gap-2 text-lg font-bold text-green-400">
                          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-green-500" />
                          {selected.status}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Profile Bio
                      </h4>
                      <p className="rounded-xl bg-surface-container/50 p-4 text-sm leading-relaxed text-on-surface">
                        {selected.bio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Gallery ({selected.gallery.length} Photos)
                    </h4>
                    <button className="text-xs font-bold text-primary">Flag All</button>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    {selected.gallery.concat(Array.from({ length: Math.max(0, 5 - selected.gallery.length) }).map(() => '')).slice(0, 5).map((img, i) => (
                      <div
                        key={i}
                        className={
                          'aspect-square cursor-zoom-in overflow-hidden rounded-xl transition-transform hover:scale-105 ' +
                          (img ? '' : 'flex items-center justify-center bg-surface-container opacity-40 grayscale')
                        }
                      >
                        {img ? (
                          <img src={img} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
                        ) : (
                          <span className="material-symbols-outlined text-on-surface-variant">visibility_off</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verification table */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Identity & Verification
                  </h4>
                  <div className="overflow-hidden rounded-2xl bg-surface-container">
                    <table className="w-full text-left text-sm">
                      <tbody className="divide-y divide-white/5">
                        <tr>
                          <td className="px-6 py-4 font-medium text-on-surface-variant">Real Name</td>
                          <td className="px-6 py-4 font-semibold text-on-surface">{selected.realName}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="material-symbols-outlined fill text-sm text-green-400">check_circle</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-on-surface-variant">ID / Passport</td>
                          <td className="px-6 py-4 font-semibold text-on-surface">
                            {selected.idVerified ? 'Verified via Onfido' : 'Not Verified'}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className={'material-symbols-outlined text-sm ' + (selected.idVerified ? 'fill text-green-400' : 'text-error')}>
                              {selected.idVerified ? 'check_circle' : 'cancel'}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-on-surface-variant">Phone Number</td>
                          <td className="px-6 py-4 font-semibold text-on-surface">{selected.phone}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="material-symbols-outlined fill text-sm text-green-400">check_circle</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-on-surface-variant">Account Linked</td>
                          <td className="px-6 py-4 font-semibold text-on-surface">{selected.accountLinked}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="material-symbols-outlined text-sm text-on-surface-variant">open_in_new</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="h-20" />
              </div>
            </div>

            {/* Floating moderation note bar */}
            <div className="glass-panel absolute bottom-6 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-full px-6 py-3 shadow-2xl">
              <div className="flex flex-1 items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">comment</span>
                <input
                  type="text"
                  placeholder="Add internal moderation note..."
                  className="w-full border-none bg-transparent text-sm text-on-surface focus:ring-0 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="mx-2 h-4 w-[1px] bg-white/10" />
                <button className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-white/5">
                  <span className="material-symbols-outlined">flag</span>
                </button>
                <button className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-white/5">
                  <span className="material-symbols-outlined">history</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function PendingCard({
  profile,
  active,
  onClick,
}: {
  profile: ApprovalProfile;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={
        'cursor-pointer rounded-xl p-4 transition-all duration-150 ' +
        (active
          ? 'glass-panel ring-1 ring-primary/30'
          : 'bg-surface-container hover:bg-surface-container-high')
      }
    >
      <div className="flex gap-4">
        <div className={'h-20 w-16 shrink-0 overflow-hidden rounded-lg ' + (active ? '' : 'grayscale group-hover:grayscale-0')}>
          <img src={profile.thumbnail} alt={profile.name} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className={'truncate font-display text-xl ' + (active ? 'text-secondary' : 'text-on-surface')}>
            {profile.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[12px]">schedule</span>
            Submitted {profile.submitted}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span
              className={
                'rounded px-2 py-0.5 text-[10px] font-bold ' +
                (profile.tier === 'PREMIUM'
                  ? 'bg-secondary/10 text-secondary'
                  : 'bg-surface-container-highest text-on-surface-variant')
              }
            >
              {profile.tier}
            </span>
            <button
              className={
                'text-[11px] font-bold uppercase tracking-wider ' +
                (active ? 'text-primary hover:underline' : 'text-on-surface-variant')
              }
            >
              {active ? 'Reviewing Now' : 'Review'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
