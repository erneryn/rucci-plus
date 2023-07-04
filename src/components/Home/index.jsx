import Image from 'next/image';
import cn from 'classnames';
import {useEffect} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import styles from './styles.module.scss';

const Home = ({ info }) => {
  
  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className={cn(styles.gradient, styles.inset)}/>
  };


  const background = {
    image:info?.metadata?.picture?.imgix_url,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1, 1.20, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const overlay = {
    children: (
      <div className={cn(styles.overlay)}/>
    )
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className={cn(styles.wrapper_info)}>
        <div className={styles.wrapper_item}>
          <SubHeading title={info?.metadata?.subtitle} />
          <h1 className={styles.header_h1}>{info?.metadata?.title}</h1>
        </div>
      </div>
    )
  };

  

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (<ParallaxBanner
    layers={[background,gradientOverlay,overlay, headline]}
    className={styles.header}
  />)
  };

export default Home;

 