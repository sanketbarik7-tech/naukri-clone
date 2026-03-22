'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { experienceOptions } from '@/data/mock';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (experience) params.set('experience', experience);
    if (location) params.set('location', location);
    router.push(`/jobs?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Find your dream job now</h1>
      <p className={styles.subtitle}>5 lakh+ jobs for you to explore</p>

      <div className={styles.searchBarWrapper}>
        <div className={styles.inputGroup}>
          <span className={styles.icon}>🔍</span>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter skills / designations / companies"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <span className={styles.divider} />

        <select
          className={styles.select}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="">Select experience</option>
          {experienceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <span className={styles.divider} />

        <div className={styles.locationGroup}>
          <span className={styles.icon}>📍</span>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
}
