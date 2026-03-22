'use client';

import { useRouter } from 'next/navigation';
import { quickFilters } from '@/data/mock';
import styles from './QuickFilters.module.css';

export default function QuickFilters() {
  const router = useRouter();

  const handleClick = (label: string) => {
    router.push(`/jobs?q=${encodeURIComponent(label)}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {quickFilters.map((filter) => (
          <button
            key={filter.label}
            className={styles.chip}
            onClick={() => handleClick(filter.label)}
          >
            <span className={styles.chipIcon}>{filter.icon}</span>
            <span className={styles.chipLabel}>{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
