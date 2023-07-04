import cn from "classnames";
import styles from "./styles.module.scss";
import { ParallaxBanner } from 'react-scroll-parallax'

import SubHeading from "components/SubHeading";
import Image from 'next/image';
import Link from "next/link";


const FindUs = ({ data }) => {

  const background = {
    image:'https://images.pexels.com/photos/16140812/pexels-photo-16140812/free-photo-of-shopping-modern-district.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    translateY: [0, 40],
    opacity: [1],
    shouldAlwaysCompleteAnimation: true
  };


  const headline = {
    translateY: [0, 20],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className={cn(styles.wrapper_info)}>
        <div className={styles.wrapper_item}>
          <SubHeading title="Find your favorite merchants" />
          <h1 className={styles.header_h1}>Find US</h1>
        </div>
      </div>
    )
  };

  const button = {
    translateY: [0, 20],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className={cn(styles.button_wrapper)}>
        <div className={styles.button}>
          <a target="_blank" href='https://goo.gl/maps/KevdHW6q7uwDSTbC7'>
           Open In Maps
          </a>
        </div>
      </div>
    )
  };



  return (<ParallaxBanner
    layers={[background,headline, button]}
    className={styles.directory}
  />
  );
};

export default FindUs