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
    0%, 100% { transform: scale(0.96) }
    50% { transform: scale(1) }
  `,

  fadeIn: (start = 0, initialScale = 0) => keyframes`
    0%, ${start}% { opacity: 0; transform: scale(${initialScale}) }
    100% { opacity: 1; transform: scale(1) }
  `,

  slideDown: keyframes`
    from { transform: translateY(-100%) }
    to { transform: translateY(0) }
  `,

  slideUp: (start = 0) => keyframes`
    0%, ${start}% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `,

  slideLeft: keyframes`
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  `,

  blinkCursor: keyframes`
    0%, 75% { opacity: 1 }
    76%, 100% { opacity: 0 }
  `,

  typing: (width = '100%') => keyframes`
    0% { width: 0 }
    100% { width: ${width} }
  `,
};
