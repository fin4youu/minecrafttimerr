import React from 'react';
import { useTime } from '../hooks/useTime';

export const MinecraftClock: React.FC = () => {
  const time = useTime();

  // Format time as HH:MM:SS AM/PM or HH:MM:SS based on preference.
  // Using standard 12-hour format with AM/PM which is common for overlays.
  const formattedTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  return (
    <div className="flex flex-col items-end">
      <div 
        className="font-['VT323'] text-white text-8xl leading-none select-none"
        style={{
          // Use CSS text-shadow to simulate a heavy pixelated stroke/outline
          // This often looks better than -webkit-text-stroke for pixel fonts
          textShadow: `
            3px 3px 0 #000,
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000
          `,
          // Fallback stroke just in case, or for smoother scaling
          WebkitTextStroke: '2px black',
          paintOrder: 'stroke fill'
        }}
      >
        {formattedTime}
      </div>
      {/* Optional: Add a small date below if desired, keeping it minimal for now based on request */}
    </div>
  );
};