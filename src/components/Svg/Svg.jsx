import React from 'react';
import rushi from '../../assets/img/rushi.png'

const Svg = () => {
  return (
    <svg id="sw-js-blob-svg" viewBox="-100 0 300 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(255, 0, 190.062, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(0, 235.334, 230.949, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <mask id='mask1' mask-type='alpha'>
      <path fill="url(#sw-gradient)" d="M17.1,-30.6C23.1,-26.1,29.4,-23.4,32.3,-18.6C35.1,-13.8,34.3,-6.9,31.9,-1.4C29.5,4.1,25.5,8.3,22.1,12.1C18.7,15.9,16,19.5,12.4,24C8.9,28.5,4.4,33.9,-1.9,37.2C-8.3,40.5,-16.5,41.7,-23.1,39C-29.8,36.3,-34.8,29.6,-37.9,22.5C-41,15.3,-42.2,7.7,-41.3,0.5C-40.3,-6.6,-37.3,-13.2,-33.1,-18.4C-28.8,-23.6,-23.4,-27.4,-17.7,-32C-12,-36.7,-6,-42.1,-0.2,-41.7C5.6,-41.3,11.1,-35.1,17.1,-30.6Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>

      </mask>
      <g mask='url(#mask1)'>
      <path fill="url(#sw-gradient)" d="M17.1,-30.6C23.1,-26.1,29.4,-23.4,32.3,-18.6C35.1,-13.8,34.3,-6.9,31.9,-1.4C29.5,4.1,25.5,8.3,22.1,12.1C18.7,15.9,16,19.5,12.4,24C8.9,28.5,4.4,33.9,-1.9,37.2C-8.3,40.5,-16.5,41.7,-23.1,39C-29.8,36.3,-34.8,29.6,-37.9,22.5C-41,15.3,-42.2,7.7,-41.3,0.5C-40.3,-6.6,-37.3,-13.2,-33.1,-18.4C-28.8,-23.6,-23.4,-27.4,-17.7,-32C-12,-36.7,-6,-42.1,-0.2,-41.7C5.6,-41.3,11.1,-35.1,17.1,-30.6Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
      <image xlinkHref={rushi} width="100" height="100" x="-2" y="10" />
      </g>
    </svg>
  );
}

export default Svg;
