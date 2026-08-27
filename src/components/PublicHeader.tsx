import { useRouter } from '@/router';

const navItems = [
  { label: 'Escorts', route: 'home' as const },
  { label: 'Videos', route: 'videos' as const },
  { label: 'Partners', route: 'videos' as const },
  { label: 'More', route: 'videos' as const },
];

export function PublicHeader() {
  const { route, navigate } = useRouter();
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate({ name: 'home' })}
            className="font-display text-[28px] text-secondary"
          >
            AfroHot
          </button>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const isActive =
                (item.label === 'Escorts' && route.name === 'home') ||
                (item.label === 'Videos' && route.name === 'videos');
              return (
                <button
                  key={item.label}
                  onClick={() => navigate({ name: item.route })}
                  className={
                    'text-sm font-medium transition-colors duration-150 hover:text-primary ' +
                    (isActive ? 'font-bold text-secondary' : 'text-on-surface-variant')
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-medium text-on-surface-variant transition-colors hover:text-primary md:block">
            Support
          </button>
          <button
            onClick={() => navigate({ name: 'auth' })}
            className="rounded-lg bg-primary-container px-6 py-2 text-sm font-medium text-white transition-transform active:scale-95"
          >
            Login
          </button>
          <button
            onClick={() => navigate({ name: 'admin-users' })}
            className="text-on-surface-variant transition-colors hover:text-primary"
            title="Admin"
          >
            <span className="material-symbols-outlined">admin_panel_settings</span>
          </button>
        </div>
      </div>
    </header>
  );
}
