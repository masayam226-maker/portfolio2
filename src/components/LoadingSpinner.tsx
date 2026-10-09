import { motion } from "motion/react";
import "./LoadingSpinner.css";

export function LoadingSpinner({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="spinner-container">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: false,
        }}
        onAnimationComplete={onFinish}
      />
    </div>
  );
}