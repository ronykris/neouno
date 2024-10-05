'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../../constants';
import { staggerContainer } from '@/lib/motion';

import ExploreCard from './ExploreCard';
import { TypingText, TitleText } from '../typing-text';

export default function Explore() {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} data-testid="explore">
      <motion.div
        variants={staggerContainer(0.5, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Features" textStyles="text-center" />

        <TitleText
          title={<>What we bring to the table: <br className="md:block hidden" /> </>}
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              id={world.id}
              imgUrl={world.imgUrl}
              title={world.title}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        // </div>
      </motion.div>
    </section>
  );
};