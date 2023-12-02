import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Tilt from 'react-tilt';
import {
  personal_github,
  personal_linkedin,
  personal_codecamp,
  certificates,
} from '../constants';
import { github, linkedin } from '../assets';

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  app_link,
}) => {
  return (
    <>
      <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className='bg-black-200 p-2 rounded-3xl'
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
          style={{ maxWidth: '400px' }}
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 mb-2 text-secondary text-[14px]'>
              {description}
            </p>
            <a href={app_link} target='_blank' className='mt-2 mb-2'>
              Verify
            </a>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Certificates = () => {
  return (
    <div
      className={`mt-12 bg-black-100 rounded-[20px] flex`}
      style={{ flexDirection: 'column' }}
    >
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
              alt='linkedin'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div
        className={`-mt-10 pb-14 flex gap-7 flex-wrap`}
        style={{ alignSelf: 'center', justifyContent: 'center' }}
      >
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.name}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, '');
