import MemberList from './MemberList';

export default function Member() {
  const teachers = [
    {
      title: '教授',
      name: '教員名：徳久良子',
      image: '/member_img/professor.jpg',
      description: (
        <>
          <strong>徳久良子(Ryoko TOKUHISA)</strong>
          <ul>
            <li>学会活動
              <ul>
                <li>言語処理学会理事</li>
                <li>対話システムシンポジウム実行委員長</li>
              </ul>
            </li>
            <li>研究テーマ
              <ul>
                <li>対話エージェント</li>
                <li>感情推定</li>
                <li>自然言語処理</li>
              </ul>
            </li>
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
