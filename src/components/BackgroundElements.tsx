export const FloatingOrbs = ({ className = "" }) => (
  <div
    className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
  >
    {/* Large floating orbs */}
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-gravity-purple/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-40 -right-32 w-96 h-96 bg-gravity-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-gravity-gold/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

    {/* Small floating particles */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gravity-blue/60 rounded-full animate-bounce delay-300"></div>
    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gravity-purple/60 rounded-full animate-bounce delay-700"></div>
    <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gravity-gold/60 rounded-full animate-bounce delay-1100"></div>
    <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gravity-blue/60 rounded-full animate-bounce delay-1500"></div>
  </div>
);

export const GridPattern = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg
      className="w-full h-full opacity-5"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="url(#gridGradient)"
            strokeWidth="0.5"
          />
        </pattern>
        <linearGradient id="gridGradient">
          <stop offset="0%" stopColor="#665DCD" />
          <stop offset="50%" stopColor="#5FA4E6" />
          <stop offset="100%" stopColor="#D2AB67" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export const GlowingDots = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {/* Randomly positioned glowing dots */}
    <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-gravity-blue rounded-full opacity-60 animate-pulse"></div>
    <div className="absolute top-[25%] left-[85%] w-0.5 h-0.5 bg-gravity-purple rounded-full opacity-40 animate-pulse delay-500"></div>
    <div className="absolute top-[45%] left-[5%] w-1.5 h-1.5 bg-gravity-gold rounded-full opacity-50 animate-pulse delay-1000"></div>
    <div className="absolute top-[65%] left-[90%] w-1 h-1 bg-gravity-blue rounded-full opacity-45 animate-pulse delay-1500"></div>
    <div className="absolute top-[80%] left-[15%] w-0.5 h-0.5 bg-gravity-purple rounded-full opacity-55 animate-pulse delay-2000"></div>
    <div className="absolute top-[35%] left-[70%] w-1 h-1 bg-gravity-gold rounded-full opacity-40 animate-pulse delay-2500"></div>
    <div className="absolute top-[55%] left-[30%] w-0.5 h-0.5 bg-gravity-blue rounded-full opacity-50 animate-pulse delay-3000"></div>
    <div className="absolute top-[75%] left-[60%] w-1.5 h-1.5 bg-gravity-purple rounded-full opacity-35 animate-pulse delay-3500"></div>
  </div>
);

export default { FloatingOrbs, GridPattern, GlowingDots };
