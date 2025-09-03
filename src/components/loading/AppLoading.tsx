import React from 'react';
import { ImSpinner9 } from "react-icons/im";
import CartoonLion from './CartoonLion';

const AppLoader: React.FC = () => {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="text-center">
        <h3 className="text-4xl font-bold font-playful mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-foreground">
          Kids Space
        </h3>

        <div className="flex items-center justify-center mb-4">
          <ImSpinner9 className="animate-spin text-primary" />
        </div>
      </div>
      <CartoonLion />
    </div>
  );
};

export default AppLoader;