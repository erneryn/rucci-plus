import cn from "classnames";
import styles from "./styles.module.scss";
import SubHeading from "components/SubHeading";
import Slider from "react-slick";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "components/Button";

const Carousel = ({photos}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {
        photos.map((photo,key)=> <div key={key}>
        <div  className={cn(styles.slider_item)}>
          <Image
            src={photo?.item?.imgix_url}
            alt="header_img"
            objectFit="cover"
            layout="fill"
            objectPosition="center"
            priority
          />
        </div>
      </div>
        )
      }
    </Slider>
  );
};

const Merchant = ({ data }) => {
  const control = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once : false})

  useEffect(()=> {
    if(inView){
      control.start('visible')
    }
  }, [inView])

  return (
    <div
      className={cn(styles.merchant, "flex_center", "section_padding")}
      id="about"
    >
      <motion.div 
      ref={ref}
      variants={{
        "hidden": {left:0},
        "visible": {left:"100%" }
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 1.1, delay: 0.2, ease: 'easeIn', staggerChildren: 1}}
      className={styles.box_animation}></motion.div>
      <motion.div 
      style={{backgroundColor: data?.metadata?.background_color}} className={styles.content_box}>
        <SubHeading title={data?.metadata?.subtitle} />
        <h1 className={styles.merchant_h1}>{data?.metadata?.title}</h1>
        <div className={cn(styles.description_container, "flex_center")}>
          <div className={styles.grid}>
            <motion.div 
              variants={{
                "initial": { opacity : 0},
                "visible": { opacity : 1}
              }}
              initial="initial"
              animate={control}
              transition={{ duration: 1.1, delay: 1.1, ease: 'easeIn'}}
              style={{color: data?.metadata?.text_color}} className={styles.paragraph}>
              {HTMLReactParser(data?.metadata?.description)}
              {/* <div className={styles.button_wrapper}>
                {
                  data?.metadata?.button?.status === 'enable' ? <Button className={styles.button} name={data?.metadata?.button?.name} path={data?.metadata?.button?.link} /> : ""
                }
              </div> */}
            </motion.div>
            <div className={styles.wrap_slider_container}>
            <div className={styles.wrap_slider}>
              <Carousel photos={data?.metadata?.photos} />
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Merchant