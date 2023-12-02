import React from 'react';
import Tilt from 'react-tilt';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectModal = ({ project, onClose }) => {
  // Event listener for the ESC key

  const handleEscKey = (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Add and remove event listeners when the modal is opened or closed
  useEffect(() => {
    const body = document.body;

    // Add event listener when the modal is opened
    if (project) {
      body.classList.add('modal-open');
      window.addEventListener('keydown', handleEscKey);
    } else {
      body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEscKey);
    }

    // Cleanup function to remove the event listener when the component unmounts or modal is closed
    return () => {
      body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [project]);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='modal-overlay'
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            className='modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Your modal content goes here 
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button onClick={onClose}>Close</button>*/}
            <div class='relative bg-white rounded-lg shadow dark:bg-gray-700 z-20'>
              <div
                class='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'
                //style={{ position: 'absolute', zIndex: '99', top: '10%', width: '100%' }}
              >
                <h3 class='text-xl font-medium text-gray-900 dark:text-white'>
                  {project.modal_description}
                </h3>
                <button
                  type='button'
                  class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  onClick={onClose}
                >
                  <svg
                    class='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span class='sr-only'>Close modal</span>
                </button>
              </div>

              <div class='p-4 md:p-5 space-y-4 text-gray-800 dark:text-white'>
                <h4>Brief:</h4>
                <p class='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  {project.brief}
                </p>
                <h4>Features:</h4>

                <ul className='text-base leading-relaxed text-gray-500 dark:text-gray-400 mt-5 list-disc ml-5 space-y-2'>
                  {project.features.map((point, index) => (
                    <li
                      key={`${project.name}-feature-point-${index}`}
                      className='dark:text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {project.implementation !== '' ? (
                  <>
                    <h4> More on implementation: </h4>
                    <p> {project.implementation}</p>
                  </>
                ) : null}
              </div>

              <div class='flex text-gray-500 dark:text-white-100 items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600'>
                <button onClick={onClose}>Close</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  app_link,
  modal_description,
  brief,
  features,
  implementation,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(isModalOpen);
  return (
    <>
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div
              className='absolute inset-0 flex justify-end m-3 card-img_hover flex justify-between'
              style={{ top: '0' }}
            >
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              <button
                onClick={openModal}
                //  data-modal-target={`medium-modal-${index}`}
                //  data-modal-toggle={`medium-modal-${index}`}
                type='button'
                className='black-gradient w-15 h-10 rounded p-2 flex justify-center items-center cursor-pointer'
              >
                {' '}
                Details
              </button>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 mb-2 text-secondary text-[14px]'>
              {description}
            </p>
            <a href={app_link} target='_blank' className='mt-2 mb-2'>
              {app_link}
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
      {isModalOpen && (
        <ProjectModal
          project={{
            name,
            description,
            tags,
            image,
            source_code_link,
            features,
            modal_description,
            brief,
            implementation,
          }}
          onClose={closeModal}
        />
      )}
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. Click on "Details" for a recorded
          demo and extensive descriptions, view the code on github for each
          project, or test the app yourself at the link attached to each card.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
