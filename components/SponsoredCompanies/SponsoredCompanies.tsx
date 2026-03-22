'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sponsoredCategories, sponsoredCompanies } from '@/data/mock';
import styles from './SponsoredCompanies.module.css';

export default function SponsoredCompanies() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Sponsored companies</h2>

      <div className={styles.tabs}>
        {sponsoredCategories.map((cat) => (
          <button
            key={cat}
            className={activeTab === cat ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {sponsoredCompanies.map((company) => (
          <div key={company.name} className={styles.companyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.companyLogo}>{company.logo}</div>
              <div className={styles.companyInfo}>
                <h3 className={styles.companyName}>{company.name}</h3>
                <div className={styles.ratingRow}>
                  <span className={styles.star}>&#9733;</span>
                  <span className={styles.ratingValue}>{company.rating}</span>
                  <span className={styles.reviewCount}>
                    | {company.reviews} reviews
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.tags}>
              {company.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className={styles.industry}>{company.industry}</p>
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <Link href="/companies" className={styles.viewAllLink}>
          View all companies &rarr;
        </Link>
      </div>
    </section>
  );
}
