import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';
import Button from 'components/Button';
import Merchant from 'components/Merchant';

const Menu = ({ info }) => {
  const PATH_QR = process.env.QR_CODE ||'https://qrco.de/be6Lm5' 

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
        <h1 className={styles.title}>Menu</h1>
        <p className={styles.content}><strong>Rucci+ Cafe</strong> comes with an idea to serve you and awaken your culinary sense. Here we present to you our chosen selections of classic appetizers and a complemented menu which is adapted by various cuisines across the world and Archipelago.</p>
        <div className={cn(styles.menu_wrapper,"flex_center")}>
          <Button name={"Open Menu"} path={PATH_QR}/>

        </div>
      </div>
    </div>
  );
}

export default Menu;