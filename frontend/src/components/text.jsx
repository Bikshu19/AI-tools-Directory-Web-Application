import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function TypingEffect() {
  return (
    <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#0000CC',position: 'relative', top: '50%' }} className='text-shadow-lg'>
      <TypeAnimation
        sequence={[
          'Welcome to AI KITT',  // First text
          1000,                  // Wait 1s
          'Your AI Tools Hub',   // Second text
          1000,
          'Explore & Compare',   // Third text
          1000,
          () => {
            console.log('Done typing!');
          }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </div>
  );
}

export default TypingEffect;
