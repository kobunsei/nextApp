import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "ドキュメント",
      href: "/docs",
    },
    {
      title: "サポート",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "ダッシュボード",
      href: "/dashboard",
      icon: "Home",
    },
    {
      title: "売上",
      href: "/sales",
      icon: "ShoppingCartIcon",
    },
    {
      title: "イベント",
      href: "/events",
      icon: "CalendarIcon",
    },
    {
      title: "プロフィール",
      href: "/profile",
      icon: "UserIcon",
    },
    {
      title: "通知",
      href: "/notifications",
      icon: "BellIcon",
    },
    {
      title: "サポート",
      href: "/support",
      icon: "HeadphonesIcon",
    },
  ],
};
