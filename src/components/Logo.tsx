export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="xcBg"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4A95F0" />
          <stop offset="45%" stopColor="#3070E0" />
          <stop offset="100%" stopColor="#1A42C8" />
        </linearGradient>
        <linearGradient
          id="xcShine"
          x1="100"
          y1="0"
          x2="100"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.28" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="xcBorder"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#9EC4F5" />
          <stop offset="40%" stopColor="#6FA4E8" />
          <stop offset="100%" stopColor="#3A68D8" />
        </linearGradient>
        <clipPath id="xcClip">
          <rect x="12" y="12" width="176" height="176" rx="46" />
        </clipPath>
      </defs>
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        rx="54"
        fill="url(#xcBorder)"
      />
      <rect x="12" y="12" width="176" height="176" rx="46" fill="url(#xcBg)" />
      <rect
        x="12"
        y="12"
        width="176"
        height="176"
        rx="46"
        fill="none"
        stroke="rgba(255,255,255,0.6)"
        stroke-width="2"
      />
      <rect
        x="12"
        y="12"
        width="176"
        height="176"
        rx="46"
        fill="url(#xcShine)"
      />
      <g
        clipPath="url(#xcClip)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1.5"
        fill="none"
      >
        <circle cx="100" cy="100" r="66" />
        <circle cx="100" cy="100" r="44" />
        <circle cx="100" cy="100" r="22" />
        <line x1="16" y1="100" x2="184" y2="100" />
        <line x1="100" y1="16" x2="100" y2="184" />
        <line x1="28" y1="28" x2="172" y2="172" />
        <line x1="172" y1="28" x2="28" y2="172" />
        <line x1="16" y1="56" x2="184" y2="56" />
        <line x1="16" y1="144" x2="184" y2="144" />
        <line x1="56" y1="16" x2="56" y2="184" />
        <line x1="144" y1="16" x2="144" y2="184" />
        <rect x="34" y="34" width="132" height="132" />
      </g>
    </svg>
  );
}
