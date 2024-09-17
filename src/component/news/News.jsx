import Image from 'next/image';
import styles from './staticMain.module.css';

export default function News() {

  const newsData = [
    {
      image: '/news_img/P1047364.jpg',
      date: '2024/09/05',
      title: '肥田京佳が「YANS2024奨励賞」受賞',
      description: '肥田京佳が「YANS2024奨励賞」を受賞しました',
      presentations: [
        '「ふわふわ」「もったり」ってどう表現するの？ ーエージェントとの豊かなコミュニケーションの実現に向けてー・・・肥田 京佳, 市川 淳貴, 徳久 良子',
      ]
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
                {/* presentationsがある場合にリストを表示 */}
                {newsItem.presentations && (
                  <ul className={styles.PresentationList}>
                    {newsItem.presentations.map((presentation, i) => {
                      const [title, author] = presentation.split('・・・'); // タイトルと著者を分割
                      return (
                        <li key={i}>
                          <strong>{title}</strong> {/* タイトル部分を太字に */}
                          <ul className={styles.AuthorList}> {/* 著者部分を別のリストに */}
                            <li>{author}</li>
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
