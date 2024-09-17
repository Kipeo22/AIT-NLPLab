import Image from 'next/image';
import styles from './staticMain.module.css';

export default function Teacher({ teacher }) {
  return (
    <a href={teacher.link} target="_blank" rel="noopener noreferrer"> {/* ここでリンクを設定 */}
      <div className={styles.teacher}>
        <div className={styles.profInfo}>
          <div className={styles.profImage}>
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={200}
              height={250}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p>{teacher.description}</p>
        </div>
      </div>
    </a>
  );
}
