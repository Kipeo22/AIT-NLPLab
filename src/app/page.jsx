import style from './staticMain.module.css'
import About from '@/component/about/About'
import Contact from '@/component/contact/Contact'
import Footer from '@/component/footer/index'
import Member from '@/component/member/Member'
import Nav from '@/component/navigation/nav'
import News from '@/component/news/News'

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
        <About />
        <News />
        <Member />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
