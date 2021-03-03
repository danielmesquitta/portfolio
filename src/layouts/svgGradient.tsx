import React from 'react';

const SvgGradient: React.FC = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <linearGradient id="primary-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop stopColor="#413CC8" offset="0%" />
      <stop stopColor="#D465EF" offset="100%" />
    </linearGradient>
  </svg>
);

export default SvgGradient;
