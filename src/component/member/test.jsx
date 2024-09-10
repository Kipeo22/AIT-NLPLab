import Image from 'next/image'
import style from './staticMain.module.css'
import Footer from '@/component/footer/index'
import Nav from '@/component/navigation/nav'

export default function Home() {
  return (
    <>
      <header id='HOME'>
        <Nav />
        <div className={style.firstView}>
          <div className={style.title}>
            <h1>AIT Tokuhisa Lab</h1>
            <p>自然言語処理研究室</p>
          </div>
        </div>
      </header>
      <main>
        <section id='about' className={style.section}>
          <div className={style.about}>
            <h2>About</h2>
            <p>
              ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。
            </p>
          </div>
        </section>
        <section id='news' className={style.section}>
          <div className={style.news}>
            <h2>News</h2>
            <div className={style.NewsContainer}>
              <div className={style.NewsItem}>
                <Image src='/news_img/P1047364.jpg' alt='sample news' width={340} height={230} />
                <h3>タイトル</h3>
                <p>せつめいを書く。１行から、２行程度がでかけるといい</p>
              </div>
              <div className={style.NewsItem}>
                <Image src='/news_img/P1047364.jpg' alt='sample news' width={340} height={230} />
                <h3>タイトル</h3>
                <p>せつめいを書く。１行から、２行程度がでかけるといい</p>
              </div>
              <div className={style.NewsItem}>
                <Image src='/news_img/P1047364.jpg' alt='sample news' width={340} height={230} />
                <h3>タイトル</h3>
                <p>せつめいを書く。１行から、２行程度がでかけるといい</p>
              </div>
            </div>
          </div>
        </section>
        <section id='member' className={style.section}>
          <div className={style.member}>
            <h2>Member</h2>
            <div className={style.professor}>
              <h3>教員情報</h3>
              <div className={style.profInfo}>
                <div className={style.profImage}>
                  <Image
                    src='/member_img/testicon.jpg'
                    alt='メンバー写真'
                    width={200}
                    height={250}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p>
                  ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。
                  ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。ここに教員情報を記入する。
                </p>
              </div>
            </div>
            <h3>学部3年生</h3>
            <div className={style.MemberContainer}>
              <div className={style.MemberItem}>
                <div className={style.MemberImage}>
                  <Image
                    src='/member_img/testicon.jpg'
                    alt='メンバー写真'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4>ライオン</h4>
                <p>がおーーーーーーーーーーーーーーー</p>
              </div>
              <div className={style.MemberItem}>
                <div className={style.MemberImage}>
                  <Image
                    src='/member_img/testicon.jpg'
                    alt='メンバー写真'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4>ライオン</h4>
                <p>がおーーーーーーーーーーーーーーー</p>
              </div>
              <div className={style.MemberItem}>
                <div className={style.MemberImage}>
                  <Image
                    src='/member_img/testicon.jpg'
                    alt='メンバー写真'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4>ライオン</h4>
                <p>がおーーーーーーーーーーーーーーー</p>
              </div>
              <div className={style.MemberItem}>
                <div className={style.MemberImage}>
                  <Image
                    src='/member_img/testicon.jpg'
                    alt='メンバー写真'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4>ライオン</h4>
                <p>がおーーーーーーーーーーーーーーー</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section id='achievement' className={style.section}>
          <div className={style.achievement}>
            <h2>Achievement</h2>

          </div>
        </section> */}
        <section id='contact' className={style.section}>
          <div className={style.contact}>
            <h2>Contact</h2>
            <p>こちらのメールアドレスにご連絡ください。</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}