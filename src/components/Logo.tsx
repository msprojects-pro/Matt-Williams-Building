import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true, lightText = false }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: 'w-10 h-10',
      text: 'text-lg font-black',
      title: 'text-sm font-bold letter-spacing-1',
      subtitle: 'text-[9px] tracking-[0.2em]',
    },
    md: {
      container: 'w-14 h-14',
      text: 'text-2xl font-black',
      title: 'text-lg font-bold tracking-tight',
      subtitle: 'text-[10px] tracking-[0.25em]',
    },
    lg: {
      container: 'w-24 h-24',
      text: 'text-4xl font-black',
      title: 'text-2xl font-black tracking-tight',
      subtitle: 'text-xs tracking-[0.3em]',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 ${className}`} id="logo-component">
      {/* Circular Emblem with Bold M */}
      <div 
        className={`${currentSize.container} relative flex items-center justify-center rounded-full bg-slate-950 border-2 border-[#DACEB5] shadow-md flex-shrink-0`}
        style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
      >
        {/* Subtle inner accent ring */}
        <div className="absolute inset-[3px] rounded-full border border-dashed border-[#DACEB5]/30" />
        
        {/* Bold M Emblem */}
        <span className={`${currentSize.text} text-white font-sans relative z-10 select-none tracking-tight`}>
          M<span className="text-[#53BADD]">.</span>
        </span>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`${currentSize.title} font-sans ${lightText ? 'text-white' : 'text-slate-950'} font-bold leading-tight uppercase transition-colors duration-300`}>
            Matt Williams
          </span>
          <span className={`${currentSize.subtitle} font-mono text-[#DACEB5] font-semibold uppercase leading-none`}>
            Building Co.
          </span>
        </div>
      )}
    </div>
  );
}
