import { createContext, useContext, useState, type ReactNode } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'auth' }
  | { name: 'videos' }
  | { name: 'profile' }
  | { name: 'admin-dashboard' }
  | { name: 'admin-users' }
  | { name: 'admin-profiles' }
  | { name: 'admin-approvals' }
  | { name: 'admin-reviews' }
  | { name: 'admin-locations' }
  | { name: 'admin-services' }
  | { name: 'admin-reports' }
  | { name: 'admin-settings' };

interface RouterContextValue {
  route: Route;
  navigate: (route: Route) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>({ name: 'home' });

  const navigate = (next: Route) => {
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}
