import React from 'react';

import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-20 h-20 bg-white rounded-[40px] flex align-center p-5'
          key={technology.name}
          style={{
            background: 'radial-gradient(transparent 30%, #ffffffad)',
            backdropFilter: 'blur(1px) ',
          }}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            style={{ alignSelf: 'center' }}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
