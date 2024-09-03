import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerInner}>
        <div className="flex-1">
          <h1 className={styles.headerTitle}>銀座</h1>
        </div>
        <nav>
          <Link
            href={"/login"}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4"
            )}
          >
            ログイン
          </Link>
        </nav>
      </div>
    </header>
  );
}
