import Image from 'next/image';
import styles from './staticMain.module.css';

export default function News() {

  const newsData = [
    {
      image: '/news_img/P1047364.jpg',
      date: '2024/09/05',
      title: '肥田京佳が「YANS2024奨励賞」受賞',
      description: '第19回言語処理学会主催言語処理若手シンポジウム（YANS2024）で、肥田京佳が以下のタイトルで「奨励賞」を受賞しました。',
      presentations: [
        '「ふわふわ」「もったり」ってどう表現するの？ ーエージェントとの豊かなコミュニケーションの実現に向けてー・・・肥田 京佳, 市川 淳貴, 徳久 良子',
      ]
    },
    {
      image: '/news_img/P1047364.jpg',
      date: '2024/09/04',
      title: '大塚晴貴が「大喜利ハッカソン優秀賞」受賞',
      description: '第19回言語処理若手シンポジウム（YANS2024）で行われたハッカソンで、大塚晴貴が「大喜利ハッカソン優秀賞」を受賞しました。',
    },
    {
      image: '/news_img/P1047364.jpg',
      date: '2024年9月4日-9月6日',
      title: '第19回言語処理若手シンポジウム（YANS2024）発表',
      description: '言語処理若手シンポジウム（YANS2024）で、徳久研究室から4件の発表をしました。',
      presentations: [
        '四方向投影システムを用いた子どもたちの協働による「学びの質」の評価方法の検討・・・長谷川 騎平, 増井 辰真, 徳久 良子',
        '四方向投影システムを用いた「協働なぞなぞゲーム」のためのクイズ自動生成に向けて・・・増井 辰真, 長谷川 騎平, 徳久 良子 ',
        '「ふわふわ」「もったり」ってどう表現するの？ ーエージェントとの豊かなコミュニケーションの実現に向けてー・・・肥田 京佳, 市川 淳貴, 徳久 良子',
        '地図情報を用いた「謎解き」の自動生成に向けて・・・大塚 晴貴, 徳久 良子'
      ]
    },
    {
      image: '/news_img/P1047364.jpg',
      date: '2024/06/21',
      title: '徳久研発足会をしました',
      description: '徳久研究室のメンバーで焼肉を食べに行きました！',
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
                <span className ={styles.NewsDate}>{newsItem.date}</span> {/* 各ニュースごとの日付 */}
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
