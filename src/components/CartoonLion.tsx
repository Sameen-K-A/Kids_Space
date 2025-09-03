import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import animationData from '@/assets/lotties/Cute Tiger.json';

const CartoonLion: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: 0, y: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        x: visible ? 0 : 50,
      }}
      transition={{ duration: 0.1 }}
      className="fixed -bottom-2 right-2 z-50 space-y-1 flex flex-col items-end"
    >
      <p className="text-foreground bg-white font-medium text-sm font-playful leading-relaxed px-4 py-2 rounded-2xl shadow-soft max-w-xs">
        Hi there! Welcome to Tumber Town! 🌟
      </p>

      <div className="flex justify-end w-full">
        <Lottie
          options={defaultOptions}
          height={150}
          width={150}
          style={{ transform: "scaleX(-1)", marginRight: "-20px" }}
        />
      </div>
    </motion.div>
  );
};

export default CartoonLion;