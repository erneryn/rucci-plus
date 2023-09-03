import cn from "classnames";
import styles from "./styles.module.scss";
import SubHeading from "components/SubHeading";
import Slider from "react-slick";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Tenant = ({ data }) => {
  return (
    <div className={cn(styles.tenant)}>
      <div className={styles.image_container}>
        <Image
          src={
            "https://imgix.cosmicjs.com/8a853020-4169-11ee-82b2-d53af1858037-merhchantbanner.jpeg"
          }
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </div>
      <div className={styles.content_wrapper}>
        <h1 className={styles.title}>Merchants</h1>
        <p className={styles.description}>We make sure every amazing and cool merchant contributes their unique flair to our bustling hub of creativity. Discover artisanal bakers adorned with handcrafted delightful treasures from baking to photographing from Faucille Patisserie and Saturama, all of them pour their hearts creating something that epitomizes the essence of uniqueness. Our merchants will immerse yourself in a realm of visual and taste buds where visionary painters, photographers, and extraordinary talent will leave you mesmerizing experience. 
</p>
       {
        data?.map((tenant) => <div key={tenant.slug} className={cn(styles.tenant_wrapper)}>
          <div className={styles.logo_tenant}>
          {
        tenant?.metadata?.logo?.imgix_url && <Image
            src={tenant?.metadata?.logo.imgix_url}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
          }
          </div>
        <div className={styles.tenant_image}>
          {
        tenant?.metadata?.image?.imgix_url && <Image
            src={tenant?.metadata?.image.imgix_url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          }
        </div>
        <div className={styles.wrap_tenant_desc}>
        <h1 className={styles.tenant_title}>{tenant?.metadata?.name}</h1>
        <p className={styles.tenant_desc}>{tenant?.metadata?.description}</p>
        <div className={styles.opening_hours}>{HTMLReactParser(tenant?.metadata?.opening_hours || '')}</div>
        </div>
      </div>  )
       }      
      </div>
    </div>
  );
};

export default Tenant

