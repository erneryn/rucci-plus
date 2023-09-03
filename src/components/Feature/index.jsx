import Image from 'next/image';
import cn from 'classnames';
import { motion, useInView, useAnimation } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'
import HTMLReactParser from 'html-react-parser';
import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';


const Picture = ({ data }) => {

  const background = {
    image:data,
    translateY: [0, 100],
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
    <div className={cn(styles.features)} id="about">
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>{info?.metadata?.title}.</h1>
      </div>
      <div className={styles.left_item}>
        <Picture data={info?.metadata?.picture?.imgix_url}/>
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
          <p className={styles.left_content}>{info?.metadata?.subtitle}</p>
        
        <h1 className={styles.right_content}>{HTMLReactParser(info?.metadata?.content)}</h1>
      </motion.div>
    </div>
  );
}

export default Features;