import MemberList from './MemberList';

export default function Member() {
  const teachers = [
    {
      title: '教授',
      name: '教員名',
      image: '/member_img/professor.jpg',
      description: 'ここに教員情報を記入する。ここに教員情報を記入する。',
    },
  ];

  const students = [
    {
      name: 'ライオン',
      image: '/member_img/hida.jpg',
      description: 'がおーーーーーーーーーーーーーーー',
    },
    {
        name: 'ライオン',
        image: '/member_img/ichikawa.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },
      {
        name: 'ライオン',
        image: '/member_img/kippei.png',
        description: 'がおーーーーーーーーーーーーーーー',
      },
      {
        name: 'ライオン',
        image: '/member_img/masui.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },
      {
        name: 'ライオン',
        image: '/member_img/Okajima.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },
      {
        name: 'ライオン',
        image: '/member_img/Otsuka.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },
      {
        name: 'ライオン',
        image: '/member_img/shibata.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },
      {
        name: 'ライオン',
        image: '/member_img/shimizu.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },

  ];

  return (
    <section id='member'>
      <MemberList teachers={teachers} students={students} />
    </section>
  );
}
