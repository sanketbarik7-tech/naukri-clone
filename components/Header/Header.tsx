'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const navItems = [
  { label: 'Jobs', href: '/jobs', hasDropdown: true },
  { label: 'Companies', href: '/companies', hasDropdown: true },
  { label: 'Services', href: '#', hasDropdown: true },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>naukri</span>
            <span className={styles.logoDot}>.</span>
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className={`${styles.chevron} ${activeDropdown === item.label ? styles.chevronActive : ''}`}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {item.hasDropdown && activeDropdown === item.label && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownContent}>
                      {item.label === 'Jobs' && (
                        <>
                          <Link href="/jobs" className={styles.dropdownLink}>Search jobs</Link>
                          <Link href="#" className={styles.dropdownLink}>Browse jobs by category</Link>
                          <Link href="#" className={styles.dropdownLink}>Browse jobs by location</Link>
                          <Link href="#" className={styles.dropdownLink}>Browse jobs by company</Link>
                        </>
                      )}
                      {item.label === 'Companies' && (
                        <>
                          <Link href="/companies" className={styles.dropdownLink}>Explore companies</Link>
                          <Link href="#" className={styles.dropdownLink}>Compare companies</Link>
                          <Link href="#" className={styles.dropdownLink}>Research companies</Link>
                        </>
                      )}
                      {item.label === 'Services' && (
                        <>
                          <Link href="#" className={styles.dropdownLink}>Resume writing</Link>
                          <Link href="#" className={styles.dropdownLink}>Resume display</Link>
                          <Link href="#" className={styles.dropdownLink}>Job search booster</Link>
                          <Link href="#" className={styles.dropdownLink}>Priority applicant</Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.right}>
          <Link href="#" className={styles.employerLink}>
            For employers
          </Link>
          <Link href="/login">
            <button className={styles.loginBtn}>Login</button>
          </Link>
          <Link href="/register">
            <button className={styles.registerBtn}>Register</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
