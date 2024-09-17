import Image from 'next/image';
import styles from './staticMain.module.css';

export default function Teacher({ teacher }) {
  return (
    <div className={styles.teacher}>
      <div className={styles.profInfo}>
        <a href={teacher.link} target="_blank" rel="noopener noreferrer" className={styles.professorLink}> {/* ここでリンクを設定 */}
          <div className={styles.profImage}>
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={200}
              height={250}
              style={{ objectFit: 'cover' }}
            />
          </div>
          </a>
        <p>{teacher.description}</p>
      </div>
    </div>
  );
}
