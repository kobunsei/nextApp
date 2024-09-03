"use client";

import { MainSidebarNavItem } from "@/types";
import Link from "next/link";
import { Icon as Icons } from "../../icon/icon";
import { usePathname } from "next/navigation";
import styles from './MainNav.module.css';

interface MainNavProps {
  items: MainSidebarNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  const path = usePathname();

  if (!items.length) {
    return null;
  }

  return (
    <nav>
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];

        return (
          <Link href={item.href!} key={index}>
            <span
              className={`${styles.navItem} ${
                path === item.href ? styles.active : ""
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
