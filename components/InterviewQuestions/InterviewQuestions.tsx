import { interviewByCompany, interviewByRole } from '@/data/mock';
import styles from './InterviewQuestions.module.css';

export default function InterviewQuestions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Left - Illustration + CTA */}
          <div className={styles.left}>
            <div className={styles.illustration}>
              <div className={styles.illustrationCircle}>
                <span className={styles.illustrationIcon}>&#128172;</span>
              </div>
            </div>
            <h2 className={styles.heading}>
              Prepare for your next interview
            </h2>
            <span className={styles.badge}>by ambitionbox</span>
          </div>

          {/* Middle - By Company */}
          <div className={styles.middle}>
            <h3 className={styles.columnTitle}>
              Interview questions by company
            </h3>
            <ul className={styles.list}>
              {interviewByCompany.map((item) => (
                <li key={item.name} className={styles.listItem}>
                  <a href="#" className={styles.listLink}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemMeta}>
                      <span className={styles.count}>
                        {item.interviews} Interviews
                      </span>
                      <span className={styles.arrow}>&#8250;</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className={styles.viewAll}>
              View all companies &rarr;
            </a>
          </div>

          {/* Right - By Role */}
          <div className={styles.right}>
            <h3 className={styles.columnTitle}>
              Interview questions by role
            </h3>
            <ul className={styles.list}>
              {interviewByRole.map((item) => (
                <li key={item.role} className={styles.listItem}>
                  <a href="#" className={styles.listLink}>
                    <span className={styles.itemName}>{item.role}</span>
                    <span className={styles.itemMeta}>
                      <span className={styles.count}>
                        {item.questions} Questions
                      </span>
                      <span className={styles.arrow}>&#8250;</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
