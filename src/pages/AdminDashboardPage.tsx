import type { ReactNode } from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';
import { adminUsers } from '@/data/users';
import { approvalProfiles } from '@/data/approvals';
import { videos } from '@/data/videos';
import { useRouter } from '@/router';

const statCards = [
  { label: 'Total Users', value: '2,847', change: '+12.5%', icon: 'group', tone: 'text-tertiary' },
  { label: 'Active Profiles', value: '1,264', change: '+8.2%', icon: 'person_search', tone: 'text-secondary' },
  { label: 'Pending Approvals', value: '24', change: '+4 today', icon: 'pending_actions', tone: 'text-primary' },
  { label: 'Monthly Revenue', value: '$48.6k', change: '+18.4%', icon: 'payments', tone: 'text-green-400' },
];

const activity = [
  { title: 'New profile submitted', detail: 'Maya Entebbe submitted a premium profile', time: '8 min ago', icon: 'person_add', color: 'text-secondary' },
  { title: 'Review reported', detail: 'A review was flagged for moderation', time: '24 min ago', icon: 'flag', color: 'text-primary' },
  { title: 'New user registered', detail: 'Client account created from Kampala', time: '41 min ago', icon: 'how_to_reg', color: 'text-tertiary' },
  { title: 'Profile approved', detail: 'Nora Divine is now live in the directory', time: '1 hr ago', icon: 'verified', color: 'text-green-400' },
];

const bars = [42, 56, 48, 68, 61, 78, 72, 86, 65, 74, 90, 84];

export function AdminDashboardPage() {
  const { navigate } = useRouter();

  return (
    <AdminShell activeRoute="admin-dashboard" title="Dashboard" badge="LIVE OVERVIEW">
      <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm text-on-surface-variant">Welcome back, John. Here’s what’s happening today.</p>
            <h1 className="mt-2 font-display text-3xl text-on-surface">Platform Overview</h1>
          </div>
          <button className="flex items-center gap-2 self-start rounded-lg bg-surface-container px-4 py-2 text-sm font-bold text-on-surface-variant transition-colors hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            Last 30 days
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-surface-container p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <span className={'material-symbols-outlined ' + stat.tone}>{stat.icon}</span>
                <span className="rounded-full bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-400">{stat.change}</span>
              </div>
              <p className="mt-6 text-sm text-on-surface-variant">{stat.label}</p>
              <p className="mt-1 text-3xl font-bold text-on-surface">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
          <section className="rounded-2xl bg-surface-container p-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl text-on-surface">Platform Activity</h2>
                <p className="mt-1 text-xs text-on-surface-variant">New registrations and profile activity</p>
              </div>
              <span className="text-sm font-bold text-secondary">+18.4%</span>
            </div>
            <div className="flex h-56 items-end gap-2 sm:gap-4">
              {bars.map((height, index) => (
                <div key={index} className="group flex flex-1 flex-col items-center gap-3">
                  <div className="relative flex h-48 w-full items-end">
                    <div
                      className="w-full rounded-t-md bg-secondary/70 transition-all duration-300 group-hover:bg-secondary"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-on-surface-variant">{['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F'][index]}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-surface-container p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl text-on-surface">Recent Activity</h2>
                <p className="mt-1 text-xs text-on-surface-variant">Latest platform events</p>
              </div>
              <span className="material-symbols-outlined text-secondary">notifications_active</span>
            </div>
            <div className="space-y-5">
              {activity.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className={'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ' + item.color}>
                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-on-surface">{item.title}</p>
                    <p className="mt-0.5 truncate text-xs text-on-surface-variant">{item.detail}</p>
                    <p className="mt-1 text-[10px] text-on-surface-variant/60">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="rounded-2xl bg-surface-container p-6 lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl text-on-surface">Priority Actions</h2>
                <p className="mt-1 text-xs text-on-surface-variant">Items needing your attention</p>
              </div>
              <span className="rounded-full bg-primary-container px-2 py-1 text-[10px] font-bold text-white">4 ITEMS</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ActionCard icon="verified" title="Review approvals" count={`${approvalProfiles.length} profiles waiting`} onClick={() => navigate({ name: 'admin-approvals' })} />
              <ActionCard icon="rate_review" title="Moderate reviews" count="12 reviews flagged" onClick={() => navigate({ name: 'admin-reviews' })} />
              <ActionCard icon="person_search" title="Manage profiles" count={`${videos.length} featured profiles`} onClick={() => navigate({ name: 'admin-profiles' })} />
              <ActionCard icon="group" title="View users" count={`${adminUsers.length} recent accounts`} onClick={() => navigate({ name: 'admin-users' })} />
            </div>
          </section>
          <section className="rounded-2xl bg-gradient-to-br from-secondary/20 to-surface-container p-6">
            <span className="material-symbols-outlined text-4xl text-secondary">insights</span>
            <h2 className="mt-6 font-display text-2xl text-on-surface">Quick insight</h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">Kampala is currently your fastest-growing location, with 32% more profile views than last month.</p>
            <button onClick={() => navigate({ name: 'admin-reports' })} className="mt-6 text-sm font-bold text-secondary hover:text-secondary-fixed">View full report <span aria-hidden="true">→</span></button>
          </section>
        </div>
      </div>
    </AdminShell>
  );
}

function ActionCard({ icon, title, count, onClick }: { icon: string; title: string; count: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-4 rounded-xl bg-surface-container-low p-4 text-left transition-colors hover:bg-surface-container-high">
      <span className="material-symbols-outlined rounded-lg bg-secondary/10 p-2 text-secondary">{icon}</span>
      <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-on-surface">{title}</span><span className="mt-1 block text-xs text-on-surface-variant">{count}</span></span>
      <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
    </button>
  );
}

export function AdminShell({ children, activeRoute, title, badge }: { children: ReactNode; activeRoute: 'admin-dashboard' | 'admin-users' | 'admin-profiles' | 'admin-approvals' | 'admin-reviews' | 'admin-locations' | 'admin-services' | 'admin-reports' | 'admin-settings'; title: string; badge?: string }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar activeRoute={activeRoute} />
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between bg-surface-container px-6 shadow-sm">
          <div className="flex items-center gap-3"><span className="font-display text-xl text-on-surface">{title}</span>{badge && <span className="rounded-full bg-primary-container px-2 py-0.5 text-[10px] font-bold text-white">{badge}</span>}</div>
          <div className="flex items-center gap-4"><button className="text-on-surface-variant transition-colors hover:text-secondary"><span className="material-symbols-outlined">notifications</span></button><button className="text-on-surface-variant transition-colors hover:text-secondary"><span className="material-symbols-outlined">help</span></button></div>
        </header>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
