'use client';

import { useState } from 'react';
import { topCompanyCategories } from '@/data/mock';
import styles from './TopCompanies.module.css';

const COLORS = ['#275df5', '#f05537', '#1a8a5c', '#8b5cf6', '#e67e22'];

function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLORS[Math.abs(hash) % COLORS.length];
}

export default function TopCompanies() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = topCompanyCategories[activeTab];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top companies hiring now</h2>

        <div className={styles.tabs}>
          {topCompanyCategories.map((cat, idx) => (
            <button
              key={cat.name}
              className={`${styles.tab} ${idx === activeTab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className={styles.tabName}>{cat.name}</span>
              <span className={styles.tabCount}>{cat.count} are hiring</span>
            </button>
          ))}
        </div>

        <div className={styles.companyRow}>
          {activeCategory.companies.map((company) => (
            <div key={company} className={styles.companyCircle}>
              <div
                className={styles.circle}
                style={{ backgroundColor: getColor(company) }}
              >
                {company.charAt(0)}
              </div>
              <span className={styles.companyName}>{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
