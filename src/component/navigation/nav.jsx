import React from 'react'
import styles from './nav.module.css'

function nav() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href='#HOME'>HOME</a>
          </li>
          <li>
            <a href='#ABOUT'>ABOUT</a>
          </li>
          <li>
            <a href='#MEMBER'>MEMBER</a>
          </li>
          <li>
            <a href='#ACHIEVEMENT'>ACHIEVEMENT</a>
          </li>
          <li>
            <a href='#CONTACT'>CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default nav
