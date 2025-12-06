export const colors = {
  // Minimal neutral palette with clean undertones
  neutral: {
    50: '#ffffff',
    100: '#fafafa',
    200: '#f5f5f5',
    300: '#f0f0f0',
    400: '#d4d4d4',
    500: '#a3a3a3',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Vibrant and playful brand colors with complementary harmony
  brand: {
    primary: '#ff6b35',      // Vibrant coral-orange
    primaryLight: '#ff8a65', // Lighter coral
    primaryDark: '#e55100',  // Deeper orange
    secondary: '#4ecdc4',    // Complementary teal-cyan
    accent: '#ffe066',       // Cheerful yellow
    tertiary: '#a8e6cf',    // Soft mint green
  },
  
  // Vibrant semantic colors with playful energy
  semantic: {
    success: '#00c851',      // Bright emerald green
    successLight: '#4caf50', // Lighter green
    warning: '#ffbb33',      // Sunny orange
    warningLight: '#ffc947', // Lighter orange
    error: '#ff4444',        // Vibrant red
    errorLight: '#ff6b6b',   // Softer red
    info: '#33b5e5',         // Bright sky blue
    infoLight: '#5dade2',    // Lighter blue
  },
  
  // Minimal glass morphism with subtle transparency
  glass: {
    background: 'rgba(255, 255, 255, 0.7)',
    backgroundStrong: 'rgba(255, 255, 255, 0.85)',
    border: 'rgba(0, 0, 0, 0.08)',
    borderLight: 'rgba(0, 0, 0, 0.05)',
    playful: 'rgba(0, 0, 0, 0.02)',
    teal: 'rgba(0, 0, 0, 0.03)',
    yellow: 'rgba(0, 0, 0, 0.02)',
  },
  
  // Legacy color mappings for backward compatibility (updated with minimal colors)
  background: '#ffffff',
  backgroundSecondary: '#fafafa',
  backgroundTertiary: '#f5f5f5',
  surface: '#ffffff',
  surfaceElevated: 'rgba(255,255,255,0.95)',
  
  textPrimary: '#404040',
  textSecondary: '#525252',
  textTertiary: '#a3a3a3',
  textQuaternary: '#d4d4d4',
  textInverse: '#ffffff',
  
  primary: '#ff6b35',
  primaryLight: '#ff8a65',
  primaryDark: '#e55100',
  secondary: '#4ecdc4',
  accent: '#ffe066',
  
  success: '#00c851',
  successLight: '#4caf50',
  warning: '#ffbb33',
  warningLight: '#ffc947',
  error: '#ff4444',
  errorLight: '#ff6b6b',
  
  // Vibrant gradients with complementary color harmony
  gradientPrimary: ['#ff6b35', '#ff8a65'],      // Coral gradient
  gradientSecondary: ['#4ecdc4', '#26d0ce'],    // Teal gradient
  gradientAccent: ['#ffe066', '#ffd54f'],       // Yellow gradient
  gradientSuccess: ['#00c851', '#4caf50'],      // Green gradient
  gradientNeutral: ['#f8f9fa', '#ffffff'],      // Clean neutral
  gradientPlayful: ['#ff6b35', '#4ecdc4'],      // Primary to secondary
  gradientSunset: ['#ff8a65', '#ffe066'],       // Warm sunset
  gradientOcean: ['#4ecdc4', '#33b5e5'],        // Ocean breeze
  
  // Playful borders and dividers with subtle color
  border: 'rgba(255, 107, 53, 0.15)',          // Subtle orange tint
  borderLight: 'rgba(78, 205, 196, 0.1)',      // Subtle teal tint
  borderStrong: 'rgba(255, 107, 53, 0.25)',    // Stronger orange
  divider: 'rgba(255, 224, 102, 0.2)',         // Subtle yellow tint
  
  // Interactive states with vibrant colors
  interactive: 'rgba(255, 107, 53, 0.08)',      // Orange interactive
  interactiveHover: 'rgba(255, 107, 53, 0.12)', // Orange hover
  interactivePressed: 'rgba(255, 107, 53, 0.16)', // Orange pressed
  interactiveTeal: 'rgba(78, 205, 196, 0.08)',  // Teal interactive
  interactiveYellow: 'rgba(255, 224, 102, 0.08)', // Yellow interactive
  
  // Skeleton and loading states with warm tints
  skeleton: 'rgba(255, 107, 53, 0.06)',
  skeletonShimmer: 'rgba(255, 255, 255, 0.9)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
  xxxxxl: 48,
  xxxxxxl: 64,
};

export const radii = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  full: 9999,
};

// Professional typography system
export const typography = {
  // Font families
  fontFamily: {
    primary: 'Inter_400Regular',
    primaryMedium: 'Inter_500Medium',
    primarySemiBold: 'Inter_600SemiBold',
    primaryBold: 'Inter_700Bold',
    secondary: 'Poppins_400Regular',
    secondaryMedium: 'Poppins_500Medium',
    secondarySemiBold: 'Poppins_600SemiBold',
    secondaryBold: 'Poppins_700Bold',
  },
  
  // Font sizes with proper hierarchy
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
  },
  
  // Line heights for optimal readability
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing for premium feel
  letterSpacing: {
    tighter: -0.05,
    tight: -0.025,
    normal: 0,
    wide: 0.025,
    wider: 0.05,
    widest: 0.1,
  },
};

// Cross-platform shadow tokens
export const shadows = {
  minimal: {
    elevation: 1,
    ios: {
      color: '#000',
      offset: { width: 0, height: 1 },
      opacity: 0.04,
      radius: 8,
    },
  },
  
  soft: {
    elevation: 2,
    ios: {
      color: '#000',
      offset: { width: 0, height: 2 },
      opacity: 0.06,
      radius: 12,
    },
  },
  
  medium: {
    elevation: 4,
    ios: {
      color: '#000',
      offset: { width: 0, height: 4 },
      opacity: 0.08,
      radius: 16,
    },
  },
  
  strong: {
    elevation: 8,
    ios: {
      color: '#000',
      offset: { width: 0, height: 8 },
      opacity: 0.12,
      radius: 24,
    },
  },
  
  premium: {
    elevation: 12,
    ios: {
      color: '#000',
      offset: { width: 0, height: 12 },
      opacity: 0.15,
      radius: 32,
    },
  },
};

// Animation and transition tokens
export const animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
    slower: 500,
  },
  
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default { colors, spacing, radii, typography, shadows, animations };