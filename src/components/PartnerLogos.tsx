// Partner logo SVG components
export const BinanceLogo = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="8" fill="#F3BA2F" />
    <path
      d="M25.3 33.6L35 23.9l9.7 9.7 5.7-5.7L35 12.5 19.6 27.9l5.7 5.7zm-7.1 7.1L23.9 35l5.7 5.7-5.7 5.7L12.5 35l11.4-11.4 5.7 5.7zm16.8 16.8L35 67.5l15.4-15.4-5.7-5.7L35 56.1l-9.7-9.7 5.7-5.7zm25.5-16.8L67.5 35 56.1 23.6l-5.7 5.7L56.1 35l-5.7 5.7 5.7 5.7z"
      fill="white"
    />
    <path
      d="M44.3 35L35 25.7 30.4 30.3l4.6 4.7-4.6 4.7L35 44.3 44.3 35z"
      fill="white"
    />
  </svg>
);

export const CoinbaseLogo = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="8" fill="#0052FF" />
    <path
      d="M40 20C51.05 20 60 28.95 60 40C60 51.05 51.05 60 40 60C28.95 60 20 51.05 20 40C20 28.95 28.95 20 40 20ZM40 32C35.58 32 32 35.58 32 40C32 44.42 35.58 48 40 48C44.42 48 48 44.42 48 40C48 35.58 44.42 32 40 32Z"
      fill="white"
    />
  </svg>
);

export const BitstampLogo = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="8" fill="#00D924" />
    <path d="M25 25h30v8H35v22h-10V25zm20 12h10v18H45V37z" fill="white" />
  </svg>
);

export const BitfinexLogo = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="8" fill="#24B38A" />
    <path
      d="M20 25h40v6H20v-6zm0 12h30v6H20v-6zm0 12h35v6H20v-6zm0 12h25v6H20v-6z"
      fill="white"
    />
  </svg>
);

export const BithumbLogo = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="8" fill="#FF6B35" />
    <circle cx="30" cy="30" r="8" fill="white" />
    <circle cx="50" cy="50" r="8" fill="white" />
    <rect x="22" y="42" width="36" height="6" rx="3" fill="white" />
  </svg>
);

export const BitbankLogo = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="8" fill="#1A73E8" />
    <path
      d="M25 20h15v15H25V20zm20 0h15v15H45V20zM25 45h15v15H25V45zm20 0h15v15H45V45z"
      fill="white"
    />
  </svg>
);

export const BitkubLogo = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="8" fill="#19A6FB" />
    <path
      d="M20 30h15v5H20v-5zm25 0h15v5H45v-5zM20 40h40v5H20v-5zM20 50h15v5H20v-5zm25 0h15v5H45v-5z"
      fill="white"
    />
  </svg>
);

// Market making visualization components
export const TradingChart = ({ className = "w-full h-full" }) => (
  <svg
    className={className}
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#665DCD" />
        <stop offset="44.76%" stopColor="#5FA4E6" />
        <stop offset="100%" stopColor="#D2AB67" />
      </linearGradient>
    </defs>

    {/* Grid lines */}
    {Array.from({ length: 5 }, (_, i) => (
      <line
        key={i}
        x1="0"
        y1={60 + i * 48}
        x2="400"
        y2={60 + i * 48}
        stroke="#415572"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
    ))}

    {Array.from({ length: 6 }, (_, i) => (
      <line
        key={i}
        x1={i * 80}
        y1="60"
        x2={i * 80}
        y2="252"
        stroke="#415572"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
    ))}

    {/* Trading volume bars */}
    <rect
      x="40"
      y="120"
      width="20"
      height="80"
      fill="url(#chartGradient)"
      opacity="0.7"
    />
    <rect
      x="80"
      y="100"
      width="20"
      height="100"
      fill="url(#chartGradient)"
      opacity="0.8"
    />
    <rect
      x="120"
      y="140"
      width="20"
      height="60"
      fill="url(#chartGradient)"
      opacity="0.6"
    />
    <rect
      x="160"
      y="90"
      width="20"
      height="110"
      fill="url(#chartGradient)"
      opacity="0.9"
    />
    <rect
      x="200"
      y="130"
      width="20"
      height="70"
      fill="url(#chartGradient)"
      opacity="0.7"
    />
    <rect
      x="240"
      y="110"
      width="20"
      height="90"
      fill="url(#chartGradient)"
      opacity="0.8"
    />
    <rect
      x="280"
      y="100"
      width="20"
      height="100"
      fill="url(#chartGradient)"
      opacity="0.7"
    />
    <rect
      x="320"
      y="85"
      width="20"
      height="115"
      fill="url(#chartGradient)"
      opacity="0.9"
    />

    {/* Price line */}
    <path
      d="M0 150 Q100 120 200 140 T400 110"
      stroke="url(#chartGradient)"
      strokeWidth="3"
      fill="none"
    />

    {/* Data points */}
    <circle cx="50" cy="150" r="4" fill="#5FA4E6" />
    <circle cx="90" cy="130" r="4" fill="#5FA4E6" />
    <circle cx="130" cy="145" r="4" fill="#5FA4E6" />
    <circle cx="170" cy="125" r="4" fill="#5FA4E6" />
    <circle cx="210" cy="140" r="4" fill="#5FA4E6" />
    <circle cx="250" cy="120" r="4" fill="#5FA4E6" />
    <circle cx="290" cy="125" r="4" fill="#5FA4E6" />
    <circle cx="330" cy="110" r="4" fill="#5FA4E6" />
  </svg>
);

export const LiquidityVisualization = ({ className = "w-full h-full" }) => (
  <svg
    className={className}
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="liquidityGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#665DCD" />
        <stop offset="44.76%" stopColor="#5FA4E6" />
        <stop offset="100%" stopColor="#D2AB67" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Central hub */}
    <circle
      cx="200"
      cy="150"
      r="40"
      fill="url(#liquidityGradient)"
      filter="url(#glow)"
    />
    <circle cx="200" cy="150" r="25" fill="#141619" />
    <text
      x="200"
      y="155"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontFamily="Inter"
    >
      Hub
    </text>

    {/* Exchange nodes */}
    <circle
      cx="100"
      cy="80"
      r="20"
      fill="url(#liquidityGradient)"
      opacity="0.8"
    />
    <circle
      cx="300"
      cy="80"
      r="20"
      fill="url(#liquidityGradient)"
      opacity="0.8"
    />
    <circle
      cx="80"
      cy="220"
      r="20"
      fill="url(#liquidityGradient)"
      opacity="0.8"
    />
    <circle
      cx="320"
      cy="220"
      r="20"
      fill="url(#liquidityGradient)"
      opacity="0.8"
    />
    <circle
      cx="50"
      cy="150"
      r="15"
      fill="url(#liquidityGradient)"
      opacity="0.6"
    />
    <circle
      cx="350"
      cy="150"
      r="15"
      fill="url(#liquidityGradient)"
      opacity="0.6"
    />

    {/* Connection lines */}
    <line
      x1="200"
      y1="150"
      x2="100"
      y2="80"
      stroke="url(#liquidityGradient)"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="200"
      y1="150"
      x2="300"
      y2="80"
      stroke="url(#liquidityGradient)"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="200"
      y1="150"
      x2="80"
      y2="220"
      stroke="url(#liquidityGradient)"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="200"
      y1="150"
      x2="320"
      y2="220"
      stroke="url(#liquidityGradient)"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="200"
      y1="150"
      x2="50"
      y2="150"
      stroke="url(#liquidityGradient)"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="200"
      y1="150"
      x2="350"
      y2="150"
      stroke="url(#liquidityGradient)"
      strokeWidth="2"
      opacity="0.7"
    />

    {/* Data flow indicators */}
    <circle cx="150" cy="115" r="3" fill="#5FA4E6">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="250" cy="115" r="3" fill="#5FA4E6">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="2s"
        begin="0.5s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="140" cy="185" r="3" fill="#5FA4E6">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="2s"
        begin="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="260" cy="185" r="3" fill="#5FA4E6">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="2s"
        begin="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);
