'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { companyListings } from '@/data/mock';
import styles from './page.module.css';

const tabs = ['All', 'IT Services', 'E-Commerce', 'Fintech', 'Consulting', 'Internet', 'Startup'];

export default function CompaniesPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filteredCompanies = useMemo(() => {
    let list = companyListings;

    if (activeTab !== 'All') {
      list = list.filter(
        (c) =>
          c.industry.toLowerCase() === activeTab.toLowerCase() ||
          c.type.toLowerCase() === activeTab.toLowerCase()
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeTab, search]);

  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.pageTitle}>Top Companies</h1>
          <input
            type="text"
            placeholder="Search companies..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.filterTab} ${activeTab === tab ? styles.filterTabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Company Grid */}
      <div className={styles.companyGrid}>
        {filteredCompanies.length === 0 && (
          <div className={styles.noResults}>No companies found matching your criteria.</div>
        )}

        {filteredCompanies.map((company) => (
          <div key={company.name} className={styles.companyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.logoEmoji}>{company.logo}</div>
              <div className={styles.companyInfo}>
                <div className={styles.companyName}>{company.name}</div>
                <div className={styles.ratingRow}>
                  <span className={styles.ratingStar}>&#9733;</span> {company.rating} | {company.reviews} reviews
                </div>
              </div>
            </div>

            <div className={styles.tags}>
              <span className={styles.tag}>{company.industry}</span>
              <span className={styles.tag}>{company.type}</span>
            </div>

            <div className={styles.details}>
              <span className={styles.detailItem}>&#128101; {company.employees} employees</span>
              <span className={styles.detailItem}>&#128205; {company.hq}</span>
            </div>

            <p className={styles.description}>{company.description}</p>

            <div className={styles.activeJobs}>{company.activeJobs} active jobs</div>

            <Link
              href={`/jobs?q=${encodeURIComponent(company.name)}`}
              className={styles.viewJobsBtn}
            >
              View jobs
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
