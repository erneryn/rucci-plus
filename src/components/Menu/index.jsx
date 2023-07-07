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
          <Button name={"Open Menu"} path={"https://cdn.qr-code-generator.com/account26986109/38121237_1.pdf?Expires=1688447552&Signature=XlaxLFDq9MEy5SxAeCegICw18DG0EOuatT20n0OxGZvIqHI5zHJUT8kvTakCMWOKuf3lceJHjDpRrMgmBxLkBDBrAaPbpCXWKuPLfse16szdUsIC7JA1U7uGZSdIh6HAzkYesbkDCgM72h9RiPFtiCwWuxcU3yfAw9dNRIuGa8vjlmC-oCM6M3FnxTUc5QtKLFS7MNhEzgdhi7ZuZKyKqbk62r4dUKdfnUL1tQhOYHYgMa~KGLRMFV7-pHZosBlLgXcE44jyjIBvUHMYuLtORuPk9rdsFBpTR4bWjAupOlhUgdlfeFZVkd76coswkiISp51Z5kOiOc-C2-UawjXg8g__&Key-Pair-Id=KKMPOJU8AYATR"}/>

        </div>
      </div>
    </div>
  );
}

export default Menu;