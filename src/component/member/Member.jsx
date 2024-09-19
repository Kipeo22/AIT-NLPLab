import MemberList from './MemberList';

export default function Member() {
  const teachers = [
    {
      title: '教授',
      name: '教員名：徳久良子',
      image: '/member_img/professor.jpg',
      description: (
        <>
          <strong>徳久良子(Ryoko TOKUHISA) </strong>
          <ul>
            <li>研究活動
              <ul>
              <li>愛知工業大学情報科学部 教授</li>
              <li>理化学研究所客員研究員</li>
              <li>言語処理学会理事</li>
              <li>人工知能学会対話システムシンポジウム実行委員長</li>
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
      link: 'https://sites.google.com/view/ryokotokuhisa/%E3%83%9B%E3%83%BC%E3%83%A0', // 教員ページのURL
    },
  ];

  const students = [
    {
      name: '市川淳貴',
      image: '/member_img/ichikawa.jpg',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://example.com/url', // 個人ページURL
    },
    {
      name: '大塚晴貴',
      image: '/member_img/Otsuka.jpg',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://example.com/url', // 個人ページURL
    },
　　{
      name: '岡島史周',
      image: '/member_img/Okajima.jpg',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://example.com/url', // 個人ページURL
    },
    {
      name: '柴田翔空',
      image: '/member_img/shibata.jpg',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://example.com/url', // 個人ページURL
    },
    {
      name: '清水綾太',
      image: '/member_img/shimizu.jpg',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://example.com/url', // 個人ページURL
    },
　  {
      name: '長谷川騎平',
      image: '/member_img/kippei.png',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://example.com/url', // 個人ページURL
    },
　　{
      name: '肥田京佳',
      image: '/member_img/hida.jpg',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://kyoka-hida.github.io', // 個人ページURL
    },
    {
      name: '増井辰真',
      image: '/member_img/masui.jpg',
      /* description: '氏名の下に何かひとこと書きたい人はここに書いてコメントを外してください', */
      link: 'https://example.com/url', // 個人ページURL
    },

  ];

  return (
    <section id='member'>
      <MemberList teachers={teachers} students={students} />
    </section>
  );
}
