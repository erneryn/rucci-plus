import cn from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Tenant = ({ data }) => {
  return (
    <div className={cn(styles.tenant)}>
      <div className={styles.image_container}>
        <Image
          src={
            "https://imgix.cosmicjs.com/3249f000-3e56-11ee-be3f-55e1752361d4-WebPhotoEditor.jpeg"
          }
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </div>
      <div className={styles.content_wrapper}>
        <h1 className={styles.title}>Teams Behind Rucci+</h1>
        <p className={styles.description}>	In <strong>Rucci+ ClubHouse</strong>, we are making sure to have a proper and professional team to 
	ensure seamless operations, exceptional customer service, and a dynamic
 	atmosphere for every member’s experience. We are always trying to elevate our
 	ClubHouse to new heights of success and prestige. 
</p>
       {
        data?.map((team) => <div key={team.slug} className={cn(styles.tenant_wrapper)}>
        <div className={styles.tenant_image}>
          {
        team?.metadata?.image?.imgix_url && <Image
            src={team?.metadata?.image.imgix_url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          }
        </div>
        <div className={styles.wrap_tenant_desc}>
        <h1 className={styles.tenant_title}>{team?.metadata?.name}</h1>
        <p className={styles.tenant_desc}>{HTMLReactParser(team?.metadata?.description)}</p>
        </div>
      </div>  )
       }      
      </div>
    </div>
  );
};

export default Tenant

