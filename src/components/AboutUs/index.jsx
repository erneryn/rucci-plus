import cn from 'classnames';
import { motion, useInView, useAnimation } from 'framer-motion'
import HTMLReactParser from 'html-react-parser';

import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';

const AboutUs = ({ info }) => {
  const control = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once : false})

  useEffect(()=> {
    if(inView){
      control.start('visible')
    }
  }, [inView])

  return (
    <div className={cn(styles.about,"flex_center","section_padding")} id='about'>
      <motion.div 
        ref={ref}
        variants={{
          "hidden": {opacity:0, y: 75},
          "visible": {opacity:1, y: 0},
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5, delay: 0.25}}
        className={styles.content_wrapper}>
        <div className={styles.left_content}>{info?.metadata?.subtitle}</div>
        <h1 className={styles.right_content}>{HTMLReactParser(info?.metadata?.content)}</h1>
      </motion.div>
    </div>
  );
}

export default AboutUs;