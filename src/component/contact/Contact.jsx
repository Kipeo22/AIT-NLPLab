import styles from './staticMain.module.css';

export default function Contact() {
  return (
    <section id='access' className={styles.section}>
      <div className={styles.contact}>
        <h2>Access</h2>
        <p>
          <strong>住所：</strong><br />
          〒470-0392<br /> 
          豊田市八草町八千草1247 愛知工業大学情報科学部 14号館708号 徳久研究室</p>
        <p><strong>電話：</strong><br />
        0565-48-8121(内線2416)</p>
      </div>
    </section>
  );
}
