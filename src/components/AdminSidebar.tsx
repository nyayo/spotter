import { useRouter, type Route } from '@/router';

interface NavItem {
  label: string;
  icon: string;
  route: Route;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: { name: 'admin-dashboard' } },
  { label: 'Users', icon: 'group', route: { name: 'admin-users' } },
  { label: 'Profiles', icon: 'person_search', route: { name: 'admin-profiles' } },
  { label: 'Approvals', icon: 'verified', route: { name: 'admin-approvals' } },
  { label: 'Reviews', icon: 'rate_review', route: { name: 'admin-reviews' } },
  { label: 'Locations', icon: 'location_on', route: { name: 'admin-locations' } },
  { label: 'Services', icon: 'layers', route: { name: 'admin-services' } },
  { label: 'Reports', icon: 'assessment', route: { name: 'admin-reports' } },
  { label: 'Settings', icon: 'settings', route: { name: 'admin-settings' } },
];

export type AdminRouteName =
  | 'admin-dashboard'
  | 'admin-users'
  | 'admin-profiles'
  | 'admin-approvals'
  | 'admin-reviews'
  | 'admin-locations'
  | 'admin-services'
  | 'admin-reports'
  | 'admin-settings';

interface AdminSidebarProps {
  activeRoute: AdminRouteName;
}

export function AdminSidebar({ activeRoute }: AdminSidebarProps) {
  const { navigate } = useRouter();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 bg-surface-container-low py-6 md:flex md:flex-col">
      <div className="mb-8 flex items-center gap-3 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
          <span className="material-symbols-outlined fill text-secondary">shield_person</span>
        </div>
        <div>
          <h2 className="font-display text-xl leading-tight text-secondary">Admin Panel</h2>
          <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            Management Console
          </p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-hide px-2">
        {navItems.map((item) => {
          const isActive = item.route.name === activeRoute;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.route)}
              className={
                'flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-150 ' +
                (isActive
                  ? 'border-l-4 border-secondary bg-secondary/10 font-bold text-secondary'
                  : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface')
              }
            >
              <span
                className={'material-symbols-outlined ' + (isActive ? 'fill' : '')}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="mt-auto px-6 py-4">
        <div className="flex items-center gap-3 rounded-xl bg-surface-container-high p-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-xs font-bold text-white">
            JD
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">John Doe</p>
            <p className="text-[10px] text-on-surface-variant">Super Admin</p>
          </div>
          <button className="text-on-surface-variant transition-colors hover:text-primary">
            <span className="material-symbols-outlined text-sm">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
