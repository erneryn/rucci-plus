import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';
import Button from 'components/Button';
import Merchant from 'components/Merchant';

const Menu = ({ info }) => {
  
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
        <p className={styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione aut eos a explicabo et ducimus recusandae itaque rerum ut? Nihil ducimus illo maxime impedit fuga? Ab provident eaque fuga.</p>
        <div className={cn(styles.menu_wrapper,"flex_center")}>
          <Button name={"Open Menu"} path={process.env.QR_CODE}/>

        </div>
      </div>
    </div>
  );
}

export default Menu;