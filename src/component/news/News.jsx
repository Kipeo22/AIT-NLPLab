"use client";

import Image from 'next/image';
import styles from './staticMain.module.css';
import { useState } from 'react';


export default function News() {
  const [showMore, setShowMore] = useState(false); // もっと見るの表示を制御
  const newsData = [
    {
      imgSrc: '/news_img/P1047364.jpg',
      date: '2024年9月5日',
      title: '肥田京佳が「YANS2024奨励賞」受賞',
      description: '肥田京佳が「YANS2024奨励賞」を受賞しました',
      presentations: [
        '「ふわふわ」「もったり」ってどう表現するの？ ーエージェントとの豊かなコミュニケーションの実現に向けてー・・・肥田 京佳, 市川 淳貴, 徳久 良子',
      ]
    },
    {
      imgSrc: '/news_img/P1047364.jpg',
      date: '2024年9月4日',
      title: '大塚晴貴が「大喜利ハッカソン優秀賞」受賞',
      description: '大塚晴貴が「大喜利ハッカソン優秀賞」を受賞しました。',
    },
    {
      imgSrc: '/news_img/2024/20240517.jpg',
      date: '2024年9月4日-9月6日',
      title: '第19回言語処理若手シンポジウム（YANS2024）発表',
      description: '言語処理若手シンポジウム（YANS2024）で、徳久研究室から4件の発表をしました。',
      link: 'https://yans.anlp.jp/entry/yans2024', // YANS2024のリンク
      presentations: [
        '四方向投影システムを用いた子どもたちの協働による「学びの質」の評価方法の検討・・・長谷川 騎平, 増井 辰真, 徳久 良子',
        '四方向投影システムを用いた「協働なぞなぞゲーム」のためのクイズ自動生成に向けて・・・増井 辰真, 長谷川 騎平, 徳久 良子 ',
        '「ふわふわ」「もったり」ってどう表現するの？ ーエージェントとの豊かなコミュニケーションの実現に向けてー・・・肥田 京佳, 市川 淳貴, 徳久 良子',
        '地図情報を用いた「謎解き」の自動生成に向けて・・・大塚 晴貴, 徳久 良子'
      ]
    },
    {
      imgSrc: '/news_img/P1047364.jpg',
      date: '2024年6月21日',
      title: '研究室発足会をしました',
      description: '徳久研究室のメンバーで焼肉を食べに行きました！',
    },
    {
      imgSrc: '/news_img/2024/20240517.jpg',
      date: '2024年5月17日',
      title: '徳久研究室がスタートしました',
      description: '研究室に8名の３年生が配属され、徳久研究室がスタートしました。',
    },
    ];

  // 最初の3件だけを表示する
  const initialNews = newsData.slice(0, 3);

  return (
    <section id="news" className={styles.section}>
      <div className={styles.news}>
        <h2>News</h2>
        <div className={styles.NewsContainer}>
          {(showMore ? newsData : initialNews).map((news, index) => (
            <div key={index} className={styles.NewsItem}>
              <Image src={news.imgSrc} alt={news.title} width={340} height={230} />
              <div className={styles.NewsHeader}>
                <span className={styles.NewsDate}>{news.date}</span>
                <h3 className={styles.NewsTitle}>
                  {/* タイトルに外部リンクを追加 */}
                  {news.link ? (
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                      {news.title}
                    </a>
                  ) : (
                    news.title
                  )}

                </h3>
                <p>{news.description}</p>


                {/* presentationsがある場合にリストを表示 */}
                {news.presentations && (
                  <ul className={styles.PresentationList}>
                    {news.presentations.map((presentation, i) => {
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
        <div className={styles.MoreLink}>
          {!showMore ? (
            <button onClick={() => setShowMore(true)}>さらに過去のニュースも見る</button>
          ) : (
            <button onClick={() => setShowMore(false)}>過去のニュースを隠す</button>
          )}
        </div>
      </div>
    </section>
  );
}
