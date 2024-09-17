import Image from 'next/image';
import styles from './staticMain.module.css';

export default function Student({ student }) {
  return (
    <div className={styles.MemberItem}>
      <div className={styles.MemberImage}>
        <a href={student.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={student.image}
            alt={student.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </a>
      </div>
      <h4>{student.name}</h4>
      <p>{student.description}</p>
    </div>
  );
}
