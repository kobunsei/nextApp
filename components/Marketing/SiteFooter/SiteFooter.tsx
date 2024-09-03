import { siteConfig } from "@/config/site";
import Link from "next/link";
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.text}>
          Built by{" "}
          <Link
            href={siteConfig.links.github}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Kou515
          </Link>
          . Hosted on Amplify
        </p>
      </div>
    </footer>
  );
}
