import Link from 'next/link';
import SearchBar from '@/components/SearchBar/SearchBar';
import QuickFilters from '@/components/QuickFilters/QuickFilters';
import TopCompanies from '@/components/TopCompanies/TopCompanies';
import FeaturedCompanies from '@/components/FeaturedCompanies/FeaturedCompanies';
import CampusBanner from '@/components/CampusBanner/CampusBanner';
import PopularRoles from '@/components/PopularRoles/PopularRoles';
import SponsoredCompanies from '@/components/SponsoredCompanies/SponsoredCompanies';
import EventsSection from '@/components/EventsSection/EventsSection';
import InterviewQuestions from '@/components/InterviewQuestions/InterviewQuestions';
import PremiumServices from '@/components/PremiumServices/PremiumServices';
import AppDownload from '@/components/AppDownload/AppDownload';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <SearchBar />
      </div>

      <div className={styles.section}>
        <QuickFilters />
      </div>

      <div className={styles.section}>
        <TopCompanies />
      </div>

      <div className={styles.section}>
        <FeaturedCompanies />
      </div>

      <Link href="/companies" className={styles.viewAllLink}>
        View all companies &rarr;
      </Link>

      <div className={styles.videoBanner}>
        <div className={styles.videoBannerContent}>
          <span className={styles.videoBannerLogo}>Kyndryl</span>
          <span className={styles.videoBannerTagline}>We stand by We</span>
          <a href="#" className={styles.videoBannerLink}>
            Learn more &rarr;
          </a>
        </div>
        <div className={styles.playButton}>
          <div className={styles.playIcon} />
        </div>
      </div>

      <div className={styles.section}>
        <CampusBanner />
      </div>

      <div className={styles.section}>
        <PopularRoles />
      </div>

      <div className={styles.section}>
        <SponsoredCompanies />
      </div>

      <div className={styles.section}>
        <EventsSection />
      </div>

      <div className={styles.section}>
        <InterviewQuestions />
      </div>

      <div className={styles.section}>
        <PremiumServices />
      </div>

      <div className={styles.section}>
        <AppDownload />
      </div>
    </div>
  );
}
