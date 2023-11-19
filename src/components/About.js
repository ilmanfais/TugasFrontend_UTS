import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
           className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>
            Software Developer, UI/UX Designer, Quran Memorizer
            </h3>
            <p className='mb-4 text-justify'>
            Hello! I'm Ilman, a student deeply immersed in technology and spirituality. I excel in software development, specializing in JavaScript and React for dynamic web applications. Simultaneously, I find solace and guidance in memorizing the Quran, bringing a unique balance to my journey. I'm passionate about collaborative projects, contributing technical skills, and creating software solutions that inspire. Let's connect for discussions or shared experiences—I'm eager to learn, contribute, and continue my Quranic memorization journey.
            </p>
            <div className='flex gap-x-8 items-center'>
            <button className="btn btn-lg"><a href="#contact">Contact me</a></button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
