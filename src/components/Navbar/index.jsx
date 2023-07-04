import { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "constants/images";

import styles from "./styles.module.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navbarItems = ["Home", "Menu", "Merhants", "About", "Promo", "Blog"];

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <nav className={styles.navbar_container} id="navigation">
      <ul className={styles.navbar_links}>
        <div className={styles.left_item}>
          <li className={cn(styles.menu_item)}>
            <Link
              href={"/"}
              passHref
            >
              <a>Home</a>
            </Link>
          </li>

          <li className={cn(styles.menu_item)}>
            <Link
              href={"menu"}
              passHref
            >
              <a>Menu</a>
            </Link>
          </li>

          <li className={cn(styles.menu_item)}>
            <Link
              href={"#contact"}
              passHref
            >
              <a>Merchants</a>
            </Link>
          </li>
        </div>

        <li className={cn(styles.menu_item)}>
          <Link href="/" passHref>
            <div className={styles.navbar_logo}>
              <Image
                src={images?.logorucci}
                layout="fill"
                objectFit="cover"
                alt="logo"
              />
            </div>
          </Link>
        </li>
        <div className={styles.right_item}>
          <li className={cn(styles.menu_item)}>
            <Link
              href={"#contact"}
              passHref
            >
              <a>About</a>
            </Link>
          </li>

          <li className={cn(styles.menu_item)}>
            <Link
              href={"#contact"}
              passHref
            >
              <a>Promo</a>
            </Link>
          </li>

          <li className={cn(styles.menu_item)}>
            <Link
              href={"#contact"}
              passHref
            >
              <a>Blog</a>
            </Link>
          </li>
        </div>
      </ul>
      <div className={styles.navbar_smallscreen}>
          <Link href="/#home" passHref>
            <div className={styles.navbar_logo}>
              <Image
                src={images?.logorucci}
                layout="fill"
                objectFit="cover"
                alt="logo"
              />
            </div>
          </Link>
        <GiHamburgerMenu
          className={styles.navbar_hamburger}
          onClick={handleToggle}
        />
        {toggleMenu && (
          <div
            className={cn(
              styles.navbar_smallscreen_overlay,
              "slide_bottom",
              "flex_center"
            )}
          >
            <MdOutlineRestaurantMenu
              className={styles.overlay_close}
              onClick={handleToggle}
            />
            <ul className={styles.navbar_smallscreen_links}>
              
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
  return (
    <nav className={styles.navbar_container} id="navigation">
      <Link href="/#home" passHref>
        <div className={styles.navbar_logo}>
          <Image
            src={navbarInfo?.metadata?.logo?.imgix_url || images?.gericht}
            layout="fill"
            objectFit="cover"
            alt="logo"
          />
        </div>
      </Link>
      <ul className={styles.navbar_links}>
        {navbarItems?.map((item, index) => (
          <li className={cn(styles.menu_item, "opensans")} key={index}>
            <Link
              href={navbarInfo ? `/#${item?.toLowerCase()}` : "#contact"}
              passHref
            >
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbar_login}>
        <p className={cn(styles.menu_item, "opensans")}>
          <Link href="#contact" passHref>
            {navbarInfo?.metadata?.action || ""}
          </Link>
        </p>
      </div>
      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu
          className={styles.navbar_hamburger}
          onClick={handleToggle}
        />
        {toggleMenu && (
          <div
            className={cn(
              styles.navbar_smallscreen_overlay,
              "slide_bottom",
              "flex_center"
            )}
          >
            <MdOutlineRestaurantMenu
              className={styles.overlay_close}
              onClick={handleToggle}
            />
            <ul className={styles.navbar_smallscreen_links}>
              {navbarItems?.map((item, index) => (
                <li onClick={handleToggle} key={index}>
                  <Link
                    href={navbarInfo ? `/#${item?.toLowerCase()}` : "#contact"}
                    passHref
                  >
                    <a>{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
