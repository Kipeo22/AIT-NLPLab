import Image from 'next/image';
import styles from './staticMain.module.css';

export default function News() {

  const newsData = [
    {
      image: '/news_img/P1047364.jpg',
      date: '2024/09/17',
      title: 'タイトル1',
      description: '説明1を書く。1行から2行程度が望ましい。',
    },
    {
      image: '/news_img/P1047364.jpg',
      date: '2024/09/18',
      title: 'タイトル2',
      description: '説明2を書く。内容は簡潔に。',
    },
    {
      image: '/news_img/P1047364.jpg',
      date: '2024/09/19',
      title: 'タイトル3',
      description: '説明3を書く。詳細を伝える。',
    },
  ];

  return (
    <section id='news' className={styles.section}>
      <div className={styles.news}>
        <h2>News</h2>
        <div className={styles.NewsContainer}>
          {newsData.map((newsItem, index) => (
            <div key={index} className={styles.NewsItem}>
              <Image src={newsItem.image} alt={`news image ${index + 1}`} width={340} height={230} />
              <div className={styles.NewsText}>
                <p>{newsItem.date}</p> {/* 各ニュースごとの日付 */}
                <h3>{newsItem.title}</h3> {/* 各ニュースごとのタイトル */}
                <p>{newsItem.description}</p> {/* 各ニュースごとの説明 */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
