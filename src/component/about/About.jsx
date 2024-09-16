import React from 'react';
import styles from './staticMain.module.css';

export default function About() {
  return (
    <section id='about' className={styles.section}>
      <div className={styles.about}>
        <h2>About</h2>
        <p>
          愛知工業大学自然言語処理研究室（徳久研究室）のホームページです。テストをしています。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。
        </p>
      </div>
    </section>
  );
}
