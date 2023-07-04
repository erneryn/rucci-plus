import cn from "classnames";
import styles from "./styles.module.scss";
import { ParallaxBanner } from 'react-scroll-parallax'

import SubHeading from "components/SubHeading";
import Image from 'next/image';


const Directory = ({ data }) => {

  const background = {
    image:'https://imgix.cosmicjs.com/70be1370-13fe-11ee-b164-87f7851b1b7e-map.jpg',
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
          <h1 className={styles.header_h1}>DIRECTORY</h1>
        </div>
      </div>
    )
  };


  return (<ParallaxBanner
    layers={[background,headline]}
    className={styles.directory}
  />
  );
};

export default Directory