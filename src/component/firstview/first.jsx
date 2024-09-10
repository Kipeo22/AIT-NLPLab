import React from 'react'
import styles from './first.module.css'

function first() {
  return (
    <div className={styles.headerImage}>
      <div className={styles.headerText}>
        <h1>AIT Tokuhisa Lab</h1>
        <p>自然言語処理研究室</p>
      </div>
    </div>
  )
}

export default first
