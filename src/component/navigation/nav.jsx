import React from 'react'
import styles from './nav.module.css'

function nav() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.hideOnMobile}>
            <a href='#home'>HOME</a>
          </li>
          <li　className={styles.hideOnMobile}>
            <a href='#news'>NEWS</a>
          </li>
          <li>
            <a href='#member'>MEMBER</a>
          </li>
          <li>
            <a href='#publications'>PUBLICATIONS</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default nav
