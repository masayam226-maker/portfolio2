import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainvisualText.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  y?: number;
  duration?: number;
};

export const KramoText = ({
  text,
}: Props) => {
  const wrapperRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
  const el = wrapperRef.current;
  if (!el) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 100%",
      once: true,
    }
  });

  // ① 最初は透明にしておく
  tl.set(el, { opacity: 0 });

  // ② 2秒間待機（透明のまま）
  tl.to(el, { opacity: 0, duration: 2.5 });

  // ③ ふわっと可視化
  tl.to(el, { opacity: 1, duration: 0.4 });


}, []);

  return (
    <span ref={wrapperRef} className="reveal-line">
      {text}
    </span>
  );
};