import MemberList from './MemberList';

export default function Member() {
  const teachers = [
    {
      title: '教授',
      name: '教員名：徳久良子',
      image: '/member_img/professor.jpg',
      description: (
        <>
          徳久良子(Ryoko TOKUHISA)
          <ul>
            <li>言語処理学会理事</li>
            <li>対話システムシンポジウム実行委員長</li>
          </ul>
        </>
      ),
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
