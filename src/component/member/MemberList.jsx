import styles from './staticMain.module.css';
import Student from './student/Student';
import Teacher from './teacher/Teacher';


export default function MemberList({ teachers, students_b4, students_b3 }) {
  return (
    <section id='member' className={styles.section}>
     <div className={styles.member}>
      <h2>Member</h2>
      <div className={styles.professor}>
        <h3>教員情報</h3>
        {teachers.map((teacher, index) => (
          <Teacher key={index} teacher={teacher} />
        ))}
      </div>
      <div className={styles.students}>
      <p className={styles.centerText}>画像をクリックすると各自のホームページが表示されます</p>
      <h3>学部4年生</h3>
        <div className={styles.MemberContainer}>
          {students_b4.map((student, index) => (
            <Student key={index} student={student} />
          ))}
        </div>
      <h3 style={{ marginTop: "4rem" }}>学部3年生</h3>
        <div className={styles.MemberContainer}>
          {students_b3.map((student, index) => (
            <Student key={index} student={student} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
