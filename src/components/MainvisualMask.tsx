import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainvisualMask.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  mask: string;
};

export function MainvisualMask ({ mask }: Props) {
  const maskRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!maskRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: maskRef.current,
        start: "top 80%",
      }
    });

tl.set(maskRef.current, { opacity: 0 });

tl.to(maskRef.current, { opacity: 1, duration: 0.3 }, 2);

tl.fromTo(
  maskRef.current,
  { y: "100%" },
  { y: "0%", duration: 0.4, ease: "power4.out" },
  2 
);

// ③ そのまま上に抜けて消える
tl.to(
  maskRef.current,
  { 
    y: "-100%", 
    duration: 0.4, 
    ease: "power4.inOut" 
  },
  ">0.1"
);

// 少し遅れて透明化
tl.to(
  maskRef.current,
  { opacity: 0, duration: 0.3 },
  ">0.2"
);
  }, []);

  return (
    <div className="mask-wrapper">
      <span ref={maskRef} className="mask">
        {mask}
      </span>
    </div>
  );
}