import { keyframes } from 'styled-components';

export default {
  transitions: {
    basic: 'ease-in-out',
    rubber: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  speed: {
    _100: '0.2s',
    _200: '0.4s',
    _300: '0.8s',
    _400: '1.2s',
    _500: '1.6s',
    _600: '2s',
  },

  rotate360: keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`,

  scale: keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`,

  breathing: keyframes`
  0% { transform: scale(0.96) }
  50% { transform: scale(1) }
  100% { transform: scale(0.96) }
`,

  fadeIn: (start = 0) => keyframes`
  0% { opacity: 0 }
  ${start + '%'} { opacity: 0 }
  100% { opacity: 1 }
  `,

  slideDown: keyframes`
  from { transform: translateY(-100%) }
  to { transform: translateY(0) }
`,

  slideUp: keyframes`
  from { transform: translateY(100%) }
  to { transform: translateY(0) }
`,
};

// animation: 1s ${rotate360} linear infinite;
