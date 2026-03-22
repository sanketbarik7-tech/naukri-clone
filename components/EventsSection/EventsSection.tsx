import Link from 'next/link';
import { upcomingEvents } from '@/data/mock';
import styles from './EventsSection.module.css';

const bannerStyles = [styles.bannerBlue, styles.bannerPurple];

export default function EventsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>🏆</span>
        <h2 className={styles.sectionTitle}>Upcoming events and challenges</h2>
      </div>

      <div className={styles.scrollContainer}>
        {upcomingEvents.map((event, index) => (
          <div key={event.title} className={styles.eventCard}>
            <div className={bannerStyles[index % bannerStyles.length]}>
              <span className={styles.closingBadge}>
                Entry closes in {event.daysLeft}d
              </span>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventCompany}>{event.company}</p>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.tags}>
                {event.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}>👥</span>
                  {event.applicants} applicants
                </span>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}>💰</span>
                  {event.salary}
                </span>
              </div>

              <Link href="#" className={styles.viewDetails}>
                View details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
