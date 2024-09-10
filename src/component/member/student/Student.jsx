import Image from 'next/image';
import styles from './staticMain.module.css';

export default function Student({ student }) {
  return (
    <div className={styles.MemberItem}>
      <div className={styles.MemberImage}>
        <Image
          src={student.image}
          alt={student.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h4>{student.name}</h4>
      <p>{student.description}</p>
    </div>
  );
}
