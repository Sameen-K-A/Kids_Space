import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@/assets/lotties/Cute Tiger.json';

const CartoonLion: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="fixed -bottom-2 right-2 z-50 space-y-1 flex flex-col items-end">
      <p className="text-foreground font-medium text-sm font-playful leading-relaxed px-4 py-2 rounded-2xl shadow-soft max-w-xs">
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
    </div>
  );
};

export default CartoonLion;