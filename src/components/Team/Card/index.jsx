import styles from './styles.module.scss';
import Image from 'next/image';
const Card = ({image_url, title}) => {
  return (
    <div className={styles.card_container}>
    <div className={styles.card}>
    <div className={styles.img_container}>
        <div className={styles.img}>
          <Image 
            src={image_url}
            alt='team_image'
            objectFit='cover'
            layout='fill'
            objectPosition='center'
          />
        </div>
        <div className={styles.description}>
            <span className={styles.title}>
                {title}
            </span>
        </div>
    </div>
    </div>
</div>
  )
}

export default Card