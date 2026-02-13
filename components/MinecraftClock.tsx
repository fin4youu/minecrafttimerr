import React from 'react';
import { useTime } from '../hooks/useTime';

export const MinecraftClock: React.FC = () => {
  const time = useTime();

  const timeStr = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const dateStr = time.toLocaleDateString([], {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  // Solid block text-shadow to simulate the "Minecraft Title" border
  // Using multiple layers to ensure full coverage without anti-aliasing artifacts
  const c = '#000000'; // Border color
  
  // A dense shadow generator for a solid pixel border
  const generatePixelBorder = (size: number) => {
    const shadows = [];
    // Cardinals
    shadows.push(`${size}px 0 0 ${c}`);
    shadows.push(`-${size}px 0 0 ${c}`);
    shadows.push(`0 ${size}px 0 ${c}`);
    shadows.push(`0 -${size}px 0 ${c}`);
    // Diagonals
    shadows.push(`${size}px ${size}px 0 ${c}`);
    shadows.push(`-${size}px ${size}px 0 ${c}`);
    shadows.push(`${size}px -${size}px 0 ${c}`);
    shadows.push(`-${size}px -${size}px 0 ${c}`);
    // Intermediates for thicker strokes to prevent gaps in larger fonts
    if (size > 2) {
        const half = Math.floor(size / 2);
        shadows.push(`${half}px ${size}px 0 ${c}`);
        shadows.push(`-${half}px ${size}px 0 ${c}`);
        shadows.push(`${size}px ${half}px 0 ${c}`);
        shadows.push(`-${size}px ${half}px 0 ${c}`);
        shadows.push(`${half}px -${size}px 0 ${c}`);
        shadows.push(`-${half}px -${size}px 0 ${c}`);
        shadows.push(`${size}px -${half}px 0 ${c}`);
        shadows.push(`-${size}px -${half}px 0 ${c}`);
    }
    // Hard drop shadow for depth (bottom-right)
    shadows.push(`${size + 2}px ${size + 2}px 0 #00000055`);
    
    return shadows.join(', ');
  };

  return (
    <div className="flex flex-col items-end select-none">
      <div 
        className="font-['VT323'] text-white leading-none tracking-widest"
        style={{
          fontSize: '7rem', 
          textShadow: generatePixelBorder(4),
          // Ensure crisp rendering
          fontSmooth: 'never',
          WebkitFontSmoothing: 'none'
        }}
      >
        {timeStr}
      </div>
      <div 
        className="font-['VT323'] text-[#FFFF55] leading-none tracking-wider mt-2"
        style={{
          fontSize: '3rem',
          textShadow: generatePixelBorder(3),
          fontSmooth: 'never',
          WebkitFontSmoothing: 'none'
        }}
      >
        {dateStr}
      </div>
    </div>
  );
};