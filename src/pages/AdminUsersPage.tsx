import { useState } from 'react';
import { AdminSidebar } from '@/components/AdminSidebar';
import { adminUsers, type AdminUser } from '@/data/users';
import { useRouter } from '@/router';

const roleColors: Record<AdminUser['role'], string> = {
  Escort: 'bg-primary/10 text-primary',
  Client: 'bg-tertiary/10 text-tertiary',
  Partner: 'bg-secondary/10 text-secondary',
};

const statusColors: Record<AdminUser['status'], string> = {
  Online: 'bg-green-500/20 text-green-400',
  Inactive: 'bg-surface-container-highest text-on-surface-variant',
  Pending: 'bg-secondary/20 text-secondary',
};

export function AdminUsersPage() {
  const { navigate } = useRouter();
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(adminUsers[0]);
  const [filter, setFilter] = useState<'All' | 'Escort' | 'Client' | 'Partner'>('All');

  const filtered = adminUsers.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || u.role === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar activeRoute="admin-users" />
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between bg-surface-container px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="font-display text-xl text-on-surface">User Management</span>
            <span className="rounded-full bg-primary-container px-2 py-0.5 text-[11px] font-bold text-white">
              {adminUsers.length} TOTAL
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center rounded-lg bg-surface-container-lowest px-3 py-1.5">
              <span className="material-symbols-outlined text-sm text-on-surface-variant">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search users..."
                className="w-64 border-none bg-transparent text-sm text-on-surface focus:ring-0 focus:outline-none placeholder:text-on-surface-variant/40"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary">notifications</span>
              <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary">settings</span>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* List */}
          <section className="w-1/3 overflow-y-auto bg-surface-container-low/30 scrollbar-hide">
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {(['All', 'Escort', 'Client', 'Partner'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={
                        'rounded-full px-3 py-1 text-xs font-bold transition-colors ' +
                        (filter === f
                          ? 'bg-secondary text-on-secondary'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high')
                      }
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              {filtered.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={
                    'cursor-pointer rounded-xl p-4 transition-all duration-150 ' +
                    (selectedUser?.id === user.id
                      ? 'glass-panel ring-1 ring-primary/30'
                      : 'bg-surface-container hover:bg-surface-container-high')
                  }
                >
                  <div className="flex gap-4">
                    <div className="relative shrink-0">
                      <div className="h-14 w-14 overflow-hidden rounded-full">
                        <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                      </div>
                      {user.status === 'Online' && (
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full ring-2 ring-surface-container bg-green-500" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="truncate font-bold text-on-surface">{user.name}</h3>
                        {user.verified && (
                          <span className="material-symbols-outlined fill text-sm text-secondary">verified</span>
                        )}
                      </div>
                      <p className="truncate text-xs text-on-surface-variant">{user.email}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className={'rounded px-2 py-0.5 text-[10px] font-bold ' + roleColors[user.role]}>
                          {user.role.toUpperCase()}
                        </span>
                        <span className={'rounded px-2 py-0.5 text-[10px] font-bold ' + statusColors[user.status]}>
                          {user.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="py-12 text-center text-sm text-on-surface-variant">No users found.</div>
              )}
            </div>
          </section>

          {/* Detail */}
          <section className="flex flex-1 flex-col overflow-y-auto bg-surface-container-lowest/50 scrollbar-hide">
            {selectedUser ? (
              <div className="p-8">
                <div className="mx-auto max-w-3xl space-y-8">
                  {/* Header */}
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl shadow-2xl">
                      <img src={selectedUser.avatar} alt={selectedUser.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span className="font-display text-3xl text-on-surface">{selectedUser.name}</span>
                          {selectedUser.verified && (
                            <span className="rounded bg-secondary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="flex items-center gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {selectedUser.location}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-surface-container p-4">
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">Bookings</p>
                          <p className="text-lg font-bold text-on-surface">{selectedUser.bookings}</p>
                        </div>
                        <div className="rounded-xl bg-surface-container p-4">
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">Rating</p>
                          <p className="flex items-center gap-1 text-lg font-bold text-secondary">
                            <span className="material-symbols-outlined fill text-sm">star</span>
                            {selectedUser.rating}
                          </p>
                        </div>
                        <div className="rounded-xl bg-surface-container p-4">
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">Status</p>
                          <p className="flex items-center gap-2 text-lg font-bold text-green-400">
                            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-green-500" />
                            {selectedUser.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info table */}
                  <div className="overflow-hidden rounded-2xl bg-surface-container">
                    <table className="w-full text-left text-sm">
                      <tbody className="divide-y divide-white/5">
                        {[
                          { label: 'User ID', value: selectedUser.id },
                          { label: 'Email', value: selectedUser.email },
                          { label: 'Phone', value: selectedUser.phone },
                          { label: 'Account Type', value: selectedUser.accountType },
                          { label: 'Joined', value: selectedUser.joined },
                          { label: 'Last Active', value: selectedUser.lastActive },
                        ].map((row) => (
                          <tr key={row.label}>
                            <td className="px-6 py-4 font-medium text-on-surface-variant">{row.label}</td>
                            <td className="px-6 py-4 font-semibold text-on-surface">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="rounded-lg bg-primary-container px-6 py-2 text-sm font-bold text-white transition-all hover:shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                      Edit User
                    </button>
                    <button className="rounded-lg bg-error/10 px-6 py-2 text-sm font-bold text-error transition-all hover:bg-error/20">
                      Suspend
                    </button>
                    <button
                      onClick={() => navigate({ name: 'admin-approvals' })}
                      className="rounded-lg bg-surface-container px-6 py-2 text-sm font-bold text-on-surface-variant transition-all hover:bg-surface-container-high"
                    >
                      View Approvals
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-on-surface-variant">
                Select a user to view details
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
