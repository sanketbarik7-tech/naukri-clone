import styles from './PremiumServices.module.css';

export default function PremiumServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.labelRow}>
              <span className={styles.fastForwardBadge}>
                by Naukri FastForward
              </span>
            </div>
            <h2 className={styles.title}>
              Accelerate your job search with premium services
            </h2>
            <p className={styles.subtitle}>
              Services to help you get hired faster from preparing CV, getting
              recruiter attention, finding the right jobs, and more
            </p>
            <ul className={styles.features}>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>&#10003;</span>
                Resume writing
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>&#10003;</span>
                Priority applicant
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>&#10003;</span>
                Resume display
              </li>
            </ul>
            <span className={styles.paidLabel}>naukripaidservices</span>
          </div>

          <div className={styles.action}>
            <a href="#" className={styles.learnMoreBtn}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
