import cn from "classnames";
import styles from "./styles.module.scss";
import SubHeading from "components/SubHeading";
import Slider from "react-slick";
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
            "https://images.pexels.com/photos/16140812/pexels-photo-16140812/free-photo-of-shopping-modern-district.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </div>
      <div className={styles.content_wrapper}>
        <h1 className={styles.title}>Merchants</h1>
       {
        data?.map((tenant) => <div key={tenant.slug} className={cn(styles.tenant_wrapper)}>
        <div className={styles.tenant_image}>
          <Image
            src={tenant?.metadata?.image.imgix_url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles.wrap_tenant_desc}>
        <h1 className={styles.tenant_title}>{tenant?.metadata?.name}</h1>
        <p className={styles.tenant_desc}>{tenant?.metadata?.description}</p>
        </div>
      </div>  )
       }      
      </div>
    </div>
  );
};

export default Tenant

