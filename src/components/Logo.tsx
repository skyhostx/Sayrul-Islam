import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'light'
}) => {
  // Height & Width scaling
  const heights = {
    sm: 28,
    md: 36,
    lg: 44,
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Exact Brand Logo SVG */}
      <svg
        height={heights}
        viewBox="0 0 520 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto max-w-full transition-transform duration-200"
      >
        <defs>
          {/* Cyan to Azure Blue Gradient for Upper S-Ribbon */}
          <linearGradient id="logo-blue-grad" x1="20" y1="10" x2="90" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00C0FF" />
            <stop offset="35%" stopColor="#00A2F7" />
            <stop offset="70%" stopColor="#0077E6" />
            <stop offset="100%" stopColor="#0062CC" />
          </linearGradient>

          {/* Top Blue Highlight */}
          <linearGradient id="logo-blue-highlight" x1="45" y1="5" x2="85" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7EE2FF" />
            <stop offset="100%" stopColor="#0096EB" />
          </linearGradient>

          {/* Electric Lime to Fresh Green Gradient for Lower S-Ribbon */}
          <linearGradient id="logo-green-grad" x1="10" y1="120" x2="85" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C4F500" />
            <stop offset="30%" stopColor="#A4E800" />
            <stop offset="70%" stopColor="#76C400" />
            <stop offset="100%" stopColor="#55A300" />
          </linearGradient>

          {/* Bottom Lime Highlight */}
          <linearGradient id="logo-green-highlight" x1="10" y1="110" x2="45" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EAFF66" />
            <stop offset="100%" stopColor="#9BDD00" />
          </linearGradient>
        </defs>

        {/* --- S-ICON MARK --- */}
        <g id="s-icon-group">
          {/* Top Blue S-Stroke */}
          <path
            d="M 68 12 
               L 82 26 
               C 86 30 86 36 82 40 
               L 52 70 
               C 48 74 42 74 38 70 
               L 28 60 
               C 24 56 24 50 28 46 
               L 52 22 
               C 56 18 62 18 66 22 
               L 68 24 
               L 74 18 
               C 72 14 66 10 60 10 
               L 42 28 
               C 36 34 36 44 42 50 
               L 48 56 
               L 70 34 
               L 62 26 
               Z"
            fill="url(#logo-blue-grad)"
          />

          {/* Upper Crisp Polygon Ribbon Shape */}
          <path
            d="M 52 8 
               L 80 34 
               C 85 39 85 46 80 51 
               L 60 71 
               L 46 57 
               L 66 37 
               L 48 19 
               C 42 13 46 8 52 8 Z"
            fill="url(#logo-blue-highlight)"
          />
          <path
            d="M 46 57 
               L 60 71 
               C 55 76 47 76 42 71 
               L 26 55 
               C 21 50 21 42 26 37 
               L 42 21 
               L 48 27 
               L 34 41 
               C 31 44 31 48 34 51 
               L 46 57 Z"
            fill="url(#logo-blue-grad)"
          />

          {/* Lower Crisp Polygon Ribbon Shape (Green) */}
          <path
            d="M 44 116 
               L 16 90 
               C 11 85 11 78 16 73 
               L 36 53 
               L 50 67 
               L 30 87 
               L 48 105 
               C 54 111 50 116 44 116 Z"
            fill="url(#logo-green-highlight)"
          />
          <path
            d="M 50 67 
               L 36 53 
               C 41 48 49 48 54 53 
               L 70 69 
               C 75 74 75 82 70 87 
               L 54 103 
               L 48 97 
               L 62 83 
               C 65 80 65 76 62 73 
               L 50 67 Z"
            fill="url(#logo-green-grad)"
          />
        </g>

        {/* --- TYPOGRAPHY: Sayrul Islam --- */}
        {showText && (
          <g id="typography-group">
            {/* Sayrul */}
            <text
              x="105"
              y="74"
              fontFamily="'Plus Jakarta Sans', 'Comfortaa', 'Nunito', sans-serif"
              fontWeight="700"
              fontSize="56"
              letterSpacing="-1.5"
              fill={variant === 'dark' ? '#0F172A' : '#FFFFFF'}
            >
              Sayrul
            </text>

            {/* Islam */}
            <text
              x="290"
              y="74"
              fontFamily="'Plus Jakarta Sans', 'Comfortaa', 'Nunito', sans-serif"
              fontWeight="700"
              fontSize="56"
              letterSpacing="-1.5"
              fill={variant === 'dark' ? '#0F172A' : '#FFFFFF'}
            >
              Islam
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
