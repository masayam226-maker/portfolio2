import './App.css';
import { useState, useEffect, useRef } from 'react'; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from 'lottie-web';
import animationData from './assets/anime.json';
import { KramoText } from "./components/MainvisualText.tsx";
import { MainvisualMask } from "./components/MainvisualMask.tsx";
import "./components/MainvisualText.css";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img1_1 from "./assets/1.1.png";
import img2_1 from "./assets/2.1.png";
import img3 from "./assets/3.png";
import { motion } from "motion/react"
import { LoadingSpinner } from "./components/LoadingSpinner.tsx";


gsap.registerPlugin(ScrollTrigger);

function App() {
  
  const [loading, setLoading] = useState(true);

  const lottieRef = useRef<HTMLDivElement>(null);
  const creationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};

  useEffect(() => {

    // Lottie 読み込み
    if (lottieRef.current) {
      lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: animationData,
      });

      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  
    
    gsap.utils.toArray('.creation-fade').forEach(fade => {
  gsap.to(fade, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: fade,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
});
 gsap.utils.toArray('.contact-fade1').forEach(fade1 => {
  gsap.to(fade1, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: fade1,
      start: "top 88%",
      toggleActions: "play none none none"
    }
  });
});

  }, []);
  useEffect(() => {
  if (!loading) {
    gsap.to(".bodysection", {
      opacity: 1,
      duration: 1.2,
      ease: "power1.out"
    });
  }
}, [loading]);


 return (
  <>
  {loading && (
  <LoadingSpinner onFinish={() => setLoading(false)} />
)}
    <div className="bodysection">

      <div className="menusection"></div>
     <div className="center-mask top">
        </div>
      <div ref={topRef} className="mainsection">
        <div className="mainvisual">
          <div ref={lottieRef} className="lottie-animation"></div>
          <KramoText text={["Portfolio"]} />
          <MainvisualMask mask="" />
        </div>
        <div className="center-wrapper">
        </div>
        <div className="about-me">
               <h2 className="section-title">aboutme
               </h2>
               <div className="aboutme-content">
               <h1 className="aboutme-title">皆藤&nbsp;雅也</h1>
               <p className="text">2004年生まれ、愛知県在住。<br />
               今年の初めごろからwebデザイナーを志すようになり、勉強を始めました。
			   パソコンを使って何かを制作することが好きなので、実際に作りながら学習しています。<br />
               現在webデザイナー志望として就職活動をしています。</p>
               <p className="text">
                過去にクラウドソーシングサイトにてイラスト製作の活動していた経験があり、その時からお客様の要望をくみ取り、細部まで
				こだわったデザインを作成できるようなデザイナーを目指し続けています。<br /></p>
               </div>
               </div>

          <div ref={creationRef} className="creation">

			     <h2 className="section-title">creation</h2>

          <div className="creation-cards">
			     <a href="site.1.html" className="creation-card">
           <div className="creaion-text">
            <h3>販売サイト</h3>
            </div>
            <img src={img4} className="creation-image" alt="サイト１" />
            </a>

			  <div className="creation-fade">
			      <a href="site2.html" className="creation-card">
              <div className="creaion-text">
            <h3>コスメサイト</h3>
            </div>
            <img src={img5} className="creation-image" alt="サイト２" />
            </a>
			
            <a href="ui.html" className="creation-card">
              <div className="creaion-text">
            <h3>UIデザイン</h3>
            </div>
            <img src={img1_1} className="creation-image" alt="UIデザイン" />
            </a>

            <a href="practice.html" className="creation-card">
            <div className="work-text">
            <h3>デザイン練習</h3>
            </div>
            <img src={img2_1} className="creation-image" alt="デザイン練習" />
            </a>
            
            <a href="illust.html" className="creation-card">
            <div className="creation-text2">
            <h3>イラスト</h3>
            </div>
            <img src={img3} className="creation-image" alt="イラスト" />
             </a>
             </div>
        </div></div>

        <div ref={contactRef} className="contact-fade1">

        <h2 className="contact-title">contact</h2>

      <div className="contact-inner">
        <p className="mail-text">masaya.m226@gmail.com</p>
        <button className="copy-btn"
    onClick={() => {
      navigator.clipboard.writeText("masaya.m226@gmail.com");
    }}>
        コピーする
        </button>
        </div></div></div>

      <div className="lastsection">
        <div className="lastsection-menu">
           <div onClick={() => scrollToSection(topRef)} className="lastsection-content">top</div>
           <div onClick={() => scrollToSection(creationRef)} className="lastsection-content">creation</div>
           <div onClick={() => scrollToSection(contactRef)} className="lastsection-content">contact</div>
        </div>
      </div>

    </div>
  </>
);
}

export default App;