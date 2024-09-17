import React from 'react';
import styles from './staticMain.module.css';

export default function About() {
  return (
    <section id='about' className={styles.section}>
      <div className={styles.about}>
        {/* <h2>About</h2> */} 
        <p>
          <a href="https://www.ait.ac.jp/faculty/info-science/">愛知工業大学情報科学部情報科学科</a>自然言語処理研究室（徳久研究室）のホームページです。
        </p>
      </div>
    </section>
  );
}
