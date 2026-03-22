import Link from 'next/link';
import { popularRoles } from '@/data/mock';
import styles from './PopularRoles.module.css';

export default function PopularRoles() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.illustration}>
            <div className={styles.illustrationIcon}>💼</div>
            <h2 className={styles.title}>
              Discover jobs across<br />popular roles
            </h2>
            <p className={styles.subtitle}>
              Select a role and we&apos;ll show you<br />relevant jobs for it!
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.grid}>
            {popularRoles.map((role) => (
              <Link
                key={role.title}
                href={`/jobs?q=${encodeURIComponent(role.title)}`}
                className={styles.roleItem}
              >
                <div className={styles.roleInfo}>
                  <span className={styles.roleName}>{role.title}</span>
                  <span className={styles.roleCount}>{role.jobs} Jobs</span>
                </div>
                <span className={styles.roleArrow}>&rsaquo;</span>
              </Link>
            ))}
          </div>

          <div className={styles.dots}>
            <span className={styles.dotActive} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      </div>
    </section>
  );
}
