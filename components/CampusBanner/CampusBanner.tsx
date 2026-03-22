import Link from 'next/link';
import styles from './CampusBanner.module.css';

const subLinks = [
  { label: 'Expert speak', href: '#' },
  { label: 'Contests', href: '#' },
  { label: 'NGEF', href: '#' },
  { label: 'Pathfinder', href: '#' },
  { label: 'Jobs & Internships', href: '#' },
];

export default function CampusBanner() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <span className={styles.launchedBadge}>Just launched!</span>

        <div className={styles.logo}>
          <span className={styles.logoMain}>
            naukri <span className={styles.logoCampus}>campus</span>
          </span>
        </div>

        <div className={styles.content}>
          <p className={styles.headline}>
            Introducing a career platform for college students &amp; fresh grads
          </p>
          <div className={styles.subLinks}>
            {subLinks.map((link, i) => (
              <span key={link.label}>
                <Link href={link.href} className={styles.subLink}>
                  {link.label}
                </Link>
                {i < subLinks.length - 1 && (
                  <span className={styles.separator}> | </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.action}>
          <button className={styles.exploreBtn}>
            Explore now <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
