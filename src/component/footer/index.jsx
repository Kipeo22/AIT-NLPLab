import React from 'react'
import styles from './footer.module.css'
// import './index.css' // グローバルスタイルをインポート

function Index() {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.header}>
        <h1 className={styles.title}>愛知工業大学 自然言語処理研究室</h1>
      </div>
      <nav className={styles.nav}>
        <a href='#' className={styles.link}>
          HOME
        </a>
        <a href='#' className={styles.link}>
          ABOUT
        </a>
        <a href='#' className={styles.link}>
          MEMBER
        </a>
        <a href='#' className={styles.link}>
          ACHIEVEMENTS
        </a>
        <a href='#' className={styles.link}>
          CONTACT
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
