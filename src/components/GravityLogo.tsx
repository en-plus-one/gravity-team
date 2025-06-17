interface GravityLogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export const GravityLogo = ({
  className = "",
  size = "medium",
}: GravityLogoProps) => {
  const sizeClasses = {
    small: "h-8 w-32",
    medium: "h-10 w-40",
    large: "h-12 w-48",
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center`}>
      <svg
        viewBox="0 0 200 50"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gravity icon */}
        <circle
          cx="20"
          cy="25"
          r="15"
          fill="url(#gravityGradient)"
          className="animate-pulse"
        />
        <circle cx="20" cy="25" r="8" fill="white" opacity="0.9" />
        <circle cx="20" cy="25" r="3" fill="url(#gravityGradient)" />

        {/* Orbital elements */}
        <circle
          cx="35"
          cy="15"
          r="2"
          fill="url(#gravityGradient)"
          opacity="0.7"
        />
        <circle
          cx="5"
          cy="35"
          r="1.5"
          fill="url(#gravityGradient)"
          opacity="0.5"
        />
        <circle
          cx="35"
          cy="35"
          r="1"
          fill="url(#gravityGradient)"
          opacity="0.6"
        />

        {/* Text */}
        <text
          x="50"
          y="20"
          className="text-white font-medium text-base tracking-wider uppercase"
          fill="white"
          fontSize="14"
          fontFamily="Inter, sans-serif"
          letterSpacing="1.2"
        >
          Gravity
        </text>
        <text
          x="50"
          y="35"
          className="text-white font-normal text-sm tracking-wider uppercase"
          fill="white"
          fontSize="12"
          fontFamily="Inter, sans-serif"
          letterSpacing="1.5"
        >
          Team
        </text>

        <defs>
          <linearGradient
            id="gravityGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#665DCD" />
            <stop offset="44.76%" stopColor="#5FA4E6" />
            <stop offset="100%" stopColor="#D2AB67" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GravityLogo;
