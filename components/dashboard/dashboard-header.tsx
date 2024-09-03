"use client";

import Link from "next/link";
import { signOut } from 'next-auth/react';
import { Icon } from "@/components/icon/icon";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeaderProps {
  title: string;
}

const DashboardHeader: React.FC<HeaderProps> = ({ title }) => {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <header className="container flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link href="#" className="lg:hidden" prefetch={false}>
        <Icon.Package2Icon className="h-6 w-6" />
        <span className="sr-only">ホーム</span>
      </Link>
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{title}</h1>
      </div>
      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Icon.SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="検索..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image
                src="/people1.png"
                alt="アバター"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="sr-only">ユーザーメニューを切り替える</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>設定</DropdownMenuItem>
            <DropdownMenuItem>サポート</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>ログアウト</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
