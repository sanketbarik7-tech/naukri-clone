'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [experience, setExperience] = useState('experienced');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Registration functionality is for demonstration purposes only.');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Naukri</span>
        </div>

        <h1 className={styles.title}>Create your Naukri profile</h1>
        <p className={styles.subtitle}>
          Search &amp; apply to jobs from India&apos;s No.1 Job Site
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="What is your name?"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email ID</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Tell us your Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Mobile Number</label>
            <div className={styles.mobileWrapper}>
              <span className={styles.mobilePrefix}>+91</span>
              <input
                type="tel"
                className={styles.mobileInput}
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Work Experience</label>
            <div className={styles.experienceGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="experience"
                  value="experienced"
                  checked={experience === 'experienced'}
                  onChange={(e) => setExperience(e.target.value)}
                />
                Experienced
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="experience"
                  value="fresher"
                  checked={experience === 'fresher'}
                  onChange={(e) => setExperience(e.target.value)}
                />
                Fresher
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Resume</label>
            <div className={styles.dropzone}>
              <div className={styles.dropzoneIcon}>&#128196;</div>
              <div className={styles.dropzoneText}>
                Drag &amp; drop your resume here or <strong>browse</strong>
              </div>
              <div className={styles.dropzoneHint}>
                Supported formats: doc, docx, rtf, pdf (max 2MB)
              </div>
            </div>
          </div>

          <p className={styles.terms}>
            By clicking Register, you agree to the{' '}
            <a href="#" className={styles.termsLink}>
              Terms and Conditions
            </a>{' '}
            &amp;{' '}
            <a href="#" className={styles.termsLink}>
              Privacy Policy
            </a>{' '}
            of Naukri.com
          </p>

          <button type="submit" className={styles.registerBtn}>
            Register
          </button>
        </form>

        <div className={styles.loginLink}>
          Already registered? <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
