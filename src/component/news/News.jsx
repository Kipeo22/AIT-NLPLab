import Image from 'next/image';
import styles from './staticMain.module.css';

export default function News() {
  return (
    <section id='news' className={styles.section}>
      <div className={styles.news}>
        <h2>News</h2>
        <div className={styles.NewsContainer}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.NewsItem}>
              <Image src='/news_img/P1047364.jpg' alt='sample news' width={340} height={230} />
              <h3>タイトル</h3>
              <p>せつめいを書く。１行から、２行程度がでかけるといい</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}