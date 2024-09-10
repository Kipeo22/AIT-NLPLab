import styles from './staticMain.module.css';

export default function Contact() {
  return (
    <section id='contact' className={styles.section}>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>こちらのメールアドレスにご連絡ください。</p>
      </div>
    </section>
  );
}
