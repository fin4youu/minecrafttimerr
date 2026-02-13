import React from 'react';
import { MinecraftClock } from './components/MinecraftClock';

const App: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      {/* 
        Positioning container: 
        - Absolute positioning to place it strictly in the top-right.
        - p-6 gives it some breathing room from the edge of the OBS canvas.
      */}
      <div className="absolute top-0 right-0 p-6">
        <MinecraftClock />
      </div>
    </div>
  );
};

export default App;