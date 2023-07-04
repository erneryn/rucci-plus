import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import images from 'constants/images';

import styles from './styles.module.scss';

const Footer = ({children}) => (
    <footer className={cn(styles.footer,"flex_center")}>
      <div className={styles.logo}>
              <Image
                src={images?.logorucci}
                layout="fill"
                objectFit="cover"
                alt="logo"
              />
            </div>
      <div>
        <div className={styles.social_wrapper}>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Merchants</li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.social_wrapper}>
          <Image
            src='/instagram.png'
            height={30}
            width={30}
          />
        </div>
      </div>
    </footer>
);

export default Footer;