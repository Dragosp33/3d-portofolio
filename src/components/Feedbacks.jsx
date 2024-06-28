import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { personal_github, personal_linkedin } from '../constants';
import { github, linkedin } from '../assets';

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect & More</p>
          <h2 className={styles.sectionHeadText}>Links and Certificates </h2>
        </motion.div>
        <div className='flex items-center'>
          <div
            onClick={() => window.open(personal_github, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer me-2'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <div
            onClick={() => window.open(personal_linkedin, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={linkedin}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
