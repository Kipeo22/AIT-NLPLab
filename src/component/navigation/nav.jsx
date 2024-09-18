import React from 'react'
import React, {useState} from 'react'
import styles from './nav.module.css'

function nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href='#home'>HOME</a>
          </li>
          <li>
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
