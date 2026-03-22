'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Login functionality is for demonstration purposes only.');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Naukri</span>
        </div>

        <h1 className={styles.title}>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email ID / Username</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your active Email ID / Username"
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
                placeholder="Enter your password"
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
            <a href="#" className={styles.forgotLink}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerText}>Or</span>
          <div className={styles.dividerLine} />
        </div>

        <button type="button" className={styles.otpBtn}>
          Use OTP to Login
        </button>

        <button type="button" className={styles.googleBtn}>
          <span className={styles.googleIcon}>G</span>
          Sign in with Google
        </button>

        <div className={styles.registerLink}>
          New to Naukri? <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
