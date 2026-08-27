import { RouterProvider, useRouter } from '@/router';
import { HomePage } from '@/pages/HomePage';
import { VideosPage } from '@/pages/VideosPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AuthPage } from '@/pages/AuthPage';
import { AdminDashboardPage } from '@/pages/AdminDashboardPage';
import { AdminUsersPage } from '@/pages/AdminUsersPage';
import { AdminProfilesPage } from '@/pages/AdminProfilesPage';
import { AdminApprovalsPage } from '@/pages/AdminApprovalsPage';
import { AdminReviewsPage } from '@/pages/AdminReviewsPage';
import { AdminLocationsPage } from '@/pages/AdminLocationsPage';
import { AdminServicesPage } from '@/pages/AdminServicesPage';
import { AdminReportsPage } from '@/pages/AdminReportsPage';
import { AdminSettingsPage } from '@/pages/AdminSettingsPage';

function CurrentPage() {
  const { route } = useRouter();
  switch (route.name) {
    case 'home': return <HomePage />;
    case 'videos': return <VideosPage />;
    case 'profile': return <ProfilePage />;
    case 'auth': return <AuthPage />;
    case 'admin-dashboard': return <AdminDashboardPage />;
    case 'admin-users': return <AdminUsersPage />;
    case 'admin-profiles': return <AdminProfilesPage />;
    case 'admin-approvals': return <AdminApprovalsPage />;
    case 'admin-reviews': return <AdminReviewsPage />;
    case 'admin-locations': return <AdminLocationsPage />;
    case 'admin-services': return <AdminServicesPage />;
    case 'admin-reports': return <AdminReportsPage />;
    case 'admin-settings': return <AdminSettingsPage />;
    default: return <HomePage />;
  }
}

export default function App() {
  return <RouterProvider><CurrentPage /></RouterProvider>;
}
