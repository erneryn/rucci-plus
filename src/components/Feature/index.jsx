import Image from 'next/image';
import cn from 'classnames';
import { motion, useInView, useAnimation } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'

import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';


const Picture = ({ data }) => {

  const background = {
    image:data,
    translateY: [0, 40],
    opacity: [1],
    shouldAlwaysCompleteAnimation: true
  };

  return (<ParallaxBanner
    layers={[background]}
    className={styles.directory}
  />
  );
};

const Features = ({ info }) => {
  const control = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once : false})

  useEffect(()=> {
    if(inView){
      control.start('visible')
    }
  }, [inView])

  return (
    <div className={cn(styles.features, "section_padding")} id="about">
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>{info?.metadata?.title}</h1>
      </div>
      <div className={styles.left_item}>
        <Picture data={info?.metadata?.picture?.imgix_url}/>
          {/* <Image
            src={info?.metadata?.picture?.imgix_url}
            layout='fill'
            objectFit='cover'
          /> */}
        </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={styles.content_wrapper}
      >
          <p>{info?.metadata?.subtitle}</p>
        
        <h1 className={styles.right_content}>{info?.metadata?.intro}</h1>
      </motion.div>
    </div>
  );
}

export default Features;