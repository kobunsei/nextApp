import DashboardNav from "@/components/dashboard/dashboard-nav";
import SiteFooter from "@/components/Footer";
import { dashboardConfig } from "@/config/dashboard";
import DashboardHeader from "@/components/dashboard/dashboard-header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <DashboardHeader title="ダッシュボード" />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:flex w-[200px] flex-col">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex flex-col w-full flex-1 overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
