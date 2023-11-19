import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variats
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Junior Web Developer',
    description:
    "I obtained a Junior Web Developer certificate upon completing the Grade Advancement Exam (Ujian Kenaikan Kelas or UKK) while being a student at SMK Informatika Utama Depok from 2020 to 2023.",
    link: 'Learn more',
  },
  {
    name: 'Operator Komputer Madya',
    description:
      'I obtained this certificate upon completing the Intermediate Computer Operator training, which took place from September 25 to September 29 at the BPSDMP Kominfo Surabaya office, located at Sidoarjo - East Java.',
    link: 'Learn more',
  },
  {
    name: 'Prakerin PT. Taharica',
    description:
      'I received this certificate upon completing my internship (Prakerin) at PT. Taharica Indonesia from August 22 to October 22.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>My Certificate</h2>
            <h4 className='h4 max-w-[455px] mb-16'>
            I have obtained several certificates in the field of technology, starting from my time in vocational school (SMK) until now as a college student at PeTIK Jombang.
            </h4>
            <a href='#work'><button className='btn btn-sm'>See my work</button></a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destucture service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
