import Image from "next/image";
import cn from 'classnames';
import styles from './styles.module.scss';

const Promo = ({photos}) => {
  return (
    <div className={cn(styles.menu)}>
    <div className={styles.image_container}>
      <Image
        src={
          "https://imgix.cosmicjs.com/4afd6100-12a4-11ee-b164-87f7851b1b7e-photo-grid.webp"
        }
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
    </div>
    <div className={styles.content_wrapper}>
      <h1 className={styles.title}>Promo Of The Month</h1>
      <p className={styles.content}>Any special promos can be found here in <strong>Rucci+ ClubHouse!</strong> Please keep an eye to see any amazing deals for you! 
</p>
      <div className={cn("flex_center", styles.item_container)}>
      <div className={styles.item_images}>
      <Image
        src={
          "https://imgix.cosmicjs.com/4afd6100-12a4-11ee-b164-87f7851b1b7e-photo-grid.webp"
        }
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        />
      </div>
        </div>
    </div>
  </div>
  )
}

export default Promo