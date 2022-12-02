'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText, StartSteps } from '../components';

import { newFeatures } from '../constants'


const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: 'false', amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex lg:flex-row-reverse flex-col-reverse gap-8`}>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}>
        <img src="/whats-new.png" alt="Whats New" className='w-[90%] h-[90%] object-contain' />

      </motion.div>
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| How Metaversus Works"></TypingText>
        <TitleText title={<> What's new about Metaversus</>}></TitleText>
        <div className='mt-[31px]  flex flex-col sm:flex-row  max-w-[370px] gap-[24px]'>
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature}></NewFeatures>
          ))}
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
