import React from 'react'
import styles from './footer.module.css'
// import './index.css' // グローバルスタイルをインポート

function Index() {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.header}>
        <h1 className={styles.title}>愛知工業大学 自然言語処理学研究室</h1>
      </div>
      <nav className={styles.nav}>
        <a href='#' className={styles.link}>
          HOME
        </a>
        <a href='#news' className={styles.link}>
          NEWS
        </a>
        <a href='#member' className={styles.link}>
          MEMBER
        </a>
        <a href='#' className={styles.link}>
          PUBLICATIONS
        </a>
        <a href='#access' className={styles.link}>
          ACCESS
        </a>
      </nav>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <footer className={styles.footer}>© 2024 AIT NLP TOKUHISA LAB.</footer>
    </div>
  )
}

export default Index
