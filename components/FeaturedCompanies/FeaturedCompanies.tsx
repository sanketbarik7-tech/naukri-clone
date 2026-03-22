'use client';

import { useRouter } from 'next/navigation';
import { featuredCompanies } from '@/data/mock';
import styles from './FeaturedCompanies.module.css';

export default function FeaturedCompanies() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured companies actively hiring</h2>

        <div className={styles.scrollRow}>
          {featuredCompanies.map((company) => (
            <div key={company.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.logo}>{company.logo}</span>
                <div className={styles.companyInfo}>
                  <span className={styles.companyName}>{company.name}</span>
                  <span className={styles.rating}>
                    <span className={styles.star}>&#9733;</span>
                    {company.rating}
                    <span className={styles.reviewCount}>
                      ({company.reviews} reviews)
                    </span>
                  </span>
                </div>
              </div>

              <p className={styles.desc}>{company.desc}</p>

              <button
                className={styles.viewJobsBtn}
                onClick={() =>
                  router.push(
                    `/jobs?q=${encodeURIComponent(company.name)}`
                  )
                }
              >
                View jobs
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
