import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster";
import ClientWrapper from '@/components/ClientWrapper';

const fontNotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ショッピングセンターとテナント管理`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name}はショッピングセンターやテナント管理、売上管理を簡単にするためのアプリケーションです。`,
  keywords: ["ショッピングセンター", "テナント管理", "売上管理"],
  authors: [
    {
      name: "kou",
      url: siteConfig.url,
    },
  ],
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          fontNotoSansJP.className
        )}
      >
        <ClientWrapper>
          {children}
          <Toaster />
        </ClientWrapper>
      </body>
    </html>
  );
}
