'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { jobListings } from '@/data/mock';
import styles from './page.module.css';

const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Chennai'];
const salaryRanges = ['0-3 LPA', '3-6 LPA', '6-10 LPA', '10-15 LPA', '15-25 LPA', '25+ LPA'];
const companyTypes = ['MNC', 'Startup', 'Indian MNC', 'Foreign MNC'];

function JobsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [keyword, setKeyword] = useState(query);
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    experience: true,
    location: true,
    salary: true,
    companyType: true,
  });
  const [sortBy, setSortBy] = useState('relevance');

  const toggleFilter = (name: string) => {
    setOpenFilters((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filteredJobs = useMemo(() => {
    if (!keyword.trim()) return jobListings;
    const q = keyword.toLowerCase();
    return jobListings.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q))
    );
  }, [keyword]);

  return (
    <div className={styles.pageWrapper}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <input
          type="text"
          placeholder="Search keywords..."
          className={styles.searchInput}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        {/* Experience Filter */}
        <div className={styles.filterSection}>
          <div className={styles.filterHeader} onClick={() => toggleFilter('experience')}>
            <span className={styles.filterTitle}>Experience</span>
            <span
              className={`${styles.filterToggle} ${openFilters.experience ? styles.filterToggleOpen : ''}`}
            >
              &#9662;
            </span>
          </div>
          <div
            className={
              openFilters.experience ? styles.filterContent : styles.filterContentHidden
            }
          >
            {['Fresher', '1-3 Years', '3-5 Years', '5-8 Years', '8-12 Years', '12+ Years'].map(
              (exp) => (
                <label key={exp} className={styles.filterOption}>
                  <input type="radio" name="experience" />
                  {exp}
                </label>
              )
            )}
          </div>
        </div>

        {/* Location Filter */}
        <div className={styles.filterSection}>
          <div className={styles.filterHeader} onClick={() => toggleFilter('location')}>
            <span className={styles.filterTitle}>Location</span>
            <span
              className={`${styles.filterToggle} ${openFilters.location ? styles.filterToggleOpen : ''}`}
            >
              &#9662;
            </span>
          </div>
          <div
            className={
              openFilters.location ? styles.filterContent : styles.filterContentHidden
            }
          >
            {locations.map((loc) => (
              <label key={loc} className={styles.filterOption}>
                <input type="checkbox" />
                {loc}
              </label>
            ))}
          </div>
        </div>

        {/* Salary Filter */}
        <div className={styles.filterSection}>
          <div className={styles.filterHeader} onClick={() => toggleFilter('salary')}>
            <span className={styles.filterTitle}>Salary</span>
            <span
              className={`${styles.filterToggle} ${openFilters.salary ? styles.filterToggleOpen : ''}`}
            >
              &#9662;
            </span>
          </div>
          <div
            className={openFilters.salary ? styles.filterContent : styles.filterContentHidden}
          >
            {salaryRanges.map((range) => (
              <label key={range} className={styles.filterOption}>
                <input type="radio" name="salary" />
                {range}
              </label>
            ))}
          </div>
        </div>

        {/* Company Type Filter */}
        <div className={styles.filterSection}>
          <div className={styles.filterHeader} onClick={() => toggleFilter('companyType')}>
            <span className={styles.filterTitle}>Company Type</span>
            <span
              className={`${styles.filterToggle} ${openFilters.companyType ? styles.filterToggleOpen : ''}`}
            >
              &#9662;
            </span>
          </div>
          <div
            className={
              openFilters.companyType ? styles.filterContent : styles.filterContentHidden
            }
          >
            {companyTypes.map((type) => (
              <label key={type} className={styles.filterOption}>
                <input type="checkbox" />
                {type}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.resultsHeader}>
          <span className={styles.resultsCount}>
            Showing {filteredJobs.length} jobs
          </span>
          <select
            className={styles.sortDropdown}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="date">Sort by: Date</option>
            <option value="salary">Sort by: Salary</option>
          </select>
        </div>

        {filteredJobs.length === 0 && (
          <div className={styles.noResults}>
            No jobs found matching your search. Try different keywords.
          </div>
        )}

        {filteredJobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobCardTop}>
              <Link href={`/jobs/${job.id}`} className={styles.jobTitle}>
                {job.title}
              </Link>
            </div>

            <div className={styles.companyRow}>
              <span className={styles.companyName}>{job.company}</span>
              <span className={styles.companyRating}>
                <span className={styles.ratingStar}>&#9733;</span> {job.rating}
              </span>
              <span className={styles.companyReviews}>{job.reviews} reviews</span>
            </div>

            <div className={styles.metaRow}>
              <span className={styles.metaItem}>&#128188; {job.experience}</span>
              <span className={styles.metaItem}>&#8377; {job.salary}</span>
              <span className={styles.metaItem}>&#128205; {job.location}</span>
            </div>

            <div className={styles.skillTags}>
              {job.skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>

            <p className={styles.jobDescription}>{job.description}</p>

            <div className={styles.jobCardBottom}>
              <span className={styles.postedDate}>{job.posted}</span>
              <div className={styles.jobActions}>
                <button className={styles.applyBtn}>Apply</button>
                <button className={styles.saveBtn}>Save</button>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className={styles.pagination}>
            <button className={styles.pageBtn}>Previous</button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function JobsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading jobs...</div>}>
      <JobsContent />
    </Suspense>
  );
}
