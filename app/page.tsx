'use client';
import React, { useState } from "react";
import styles from "./page.module.css";
import SliderSphere from "./SideSphere";
import Toggle from "./Toggle";

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.main_div} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.theme_toggle}>
        <span>Dark Mode</span>
        <div 
          className={`${styles.toggle_switch} ${isDarkMode ? styles.dark : ''}`}
          onClick={toggleDarkMode}
        />
      </div>

      <div className={styles.intro_div}>
        <h2>Simple, traffic-based pricing</h2>
        <p>Sign-up for our 30-day trial. No credit card required</p>
      </div>

      <div className={`${styles.card} ${isDarkMode ? styles.dark : ''}`}>
        <div className={styles.card_header}>
          <div className={styles.pageviews}>
            100K Pageviews
          </div>
          <div className={styles.price_container}>
            <h2>$16.00</h2>
            <span>/ month</span>
          </div>
        </div>

        <SliderSphere isDarkMode={isDarkMode} />

        <div className={styles.billing_toggle}>
          <span>Monthly Billing</span>
          <Toggle />
          <span>Yearly Billing</span>
          <span className={styles.discount}>25% discount</span>
        </div>

        <div className={styles.features_container}>
          <div className={styles.features_list}>
            <div className={styles.feature_item}>
              <img src="/icon-check.svg" alt="check" />
              <span>Unlimited websites</span>
            </div>
            <div className={styles.feature_item}>
              <img src="/icon-check.svg" alt="check" />
              <span>100% data ownership</span>
            </div>
            <div className={styles.feature_item}>
              <img src="/icon-check.svg" alt="check" />
              <span>Email reports</span>
            </div>
          </div>

          <button className={styles.trial_button}>
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;