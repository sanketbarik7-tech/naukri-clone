'use client';

import { useState } from 'react';
import styles from './AppDownload.module.css';

export default function AppDownload() {
  const [mobile, setMobile] = useState('');

  const handleGetLink = () => {
    if (mobile.trim().length >= 10) {
      alert('App download link sent to ' + mobile);
      setMobile('');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              10M+ users are on the Naukri app
            </h2>
            <p className={styles.subtitle}>
              Available on both Android and iOS apps
            </p>

            <div className={styles.inputRow}>
              <div className={styles.inputWrapper}>
                <span className={styles.countryCode}>+91</span>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  maxLength={10}
                />
              </div>
              <button
                className={styles.getLinkBtn}
                onClick={handleGetLink}
                type="button"
              >
                Get link
              </button>
            </div>

            <div className={styles.storeBadges}>
              <a href="#" className={styles.storeBadge}>
                <div className={styles.badgeContent}>
                  <span className={styles.badgeIcon}>&#9654;</span>
                  <div className={styles.badgeText}>
                    <span className={styles.badgeSmall}>GET IT ON</span>
                    <span className={styles.badgeLarge}>Google Play</span>
                  </div>
                </div>
              </a>
              <a href="#" className={styles.storeBadge}>
                <div className={styles.badgeContent}>
                  <span className={styles.badgeIcon}>&#63743;</span>
                  <div className={styles.badgeText}>
                    <span className={styles.badgeSmall}>Download on the</span>
                    <span className={styles.badgeLarge}>App Store</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.phoneMockup}>
              <div className={styles.mockupScreen}>
                <div className={styles.mockupNotch} />
                <span className={styles.mockupLabel}>Naukri App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
