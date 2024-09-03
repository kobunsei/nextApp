import MainNav from "@/components/Marketing/MainNav/MainNav";
import Header from "@/components/Marketing/Header/Header";
import SiteFooter from "@/components/Marketing/SiteFooter/SiteFooter";
import { marketingConfig } from "@/config/marketing";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-[250px] bg-gray-800 min-h-screen flex-shrink-0 text-white">
        <MainNav items={marketingConfig.mainSidebarNav} />
      </nav>
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
