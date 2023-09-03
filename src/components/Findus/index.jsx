import cn from "classnames";
import styles from "./styles.module.scss";
import { ParallaxBanner } from 'react-scroll-parallax'
import { FaWhatsapp } from 'react-icons/fa'

import SubHeading from "components/SubHeading";
import Image from 'next/image';
import Link from "next/link";


const FindUs = ({ data }) => {

  const templateChat = 'Hi+there+lovely+customers+of+Rucci%2B+ClubHouse%21%0D%0AThank+you+for+contacting+us%21%0D%0AIf+you+are+going+to+make+a+reservation%2C+please+kindly+fill+this+form+to+ensure+your+place+is+secure.+%0D%0A%0D%0AName+%3A+%0D%0APhone+%3A+%0D%0AGuest+Total+%3A+%0D%0AReservation+Date+%3A+%0D%0AReservation+Time+%3A+%0D%0ARequest+Seating+Areas+%3A+%0D%0A%09%0D%0AWe+can%E2%80%99t+wait+to+serve+you+anytime+soon.%0D%0A%0D%0ARegards%2C%0D%0ARucci%2B+ClubHouse+'

  const overlay = {
    children: (
      <div className={cn(styles.overlay)}/>
    )
  };

  const background = {
    image:'https://imgix.cosmicjs.com/3249f000-3e56-11ee-be3f-55e1752361d4-WebPhotoEditor.jpeg',
    translateY: [0, 40],
    opacity: [1],
    shouldAlwaysCompleteAnimation: true
  };


  const headline = {
    translateY: [0, 0],
    scale: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className={cn(styles.wrapper_info)}>

        <div className={styles.wrapper_item}>
        <div>
          <SubHeading title="Find your favorite merchants" />
          <h1 className={styles.header_h1}>Find US</h1>
          <p className={styles.content}>
            Find us at Jl. KH. Agus Salim No.5, Medan
          </p>
          <Link href="https://goo.gl/maps/KevdHW6q7uwDSTbC7" passHref  >
            <a target="_blank" >
              <button className={styles.button}>
                Open In Maps
              </button>
            </a>
          </Link>
        </div>
        <div className={styles.right_item}>
          <SubHeading title="Chat with us" />
          <h1 className={styles.header_h1}>Reservation</h1>
          <p className={styles.content}>
          For reservations and info, please kindly contact us
</p>
          <Link href={`https://wa.me/6282181937483?text=${templateChat}`} passHref  >
            <a target="_blank" >
              <button className={styles.button} style={{backgroundColor : '#13aa52', border: '1px solid #13aa52' , color: 'white'}} >
              <FaWhatsapp style={{marginRight: '5px'}}/>Whatsapp
              </button>
            </a>
          </Link>
        </div>
        </div>
       
      </div>
    ),
  };

  // const button = {
  //   translateY: [0, 20],
  //   scale: [1, 1.05, "easeOutCubic"],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (
  //     <div className={cn(styles.button_wrapper)}>
        // <div className={styles.button}>
        //   <a target="_blank" href='https://goo.gl/maps/KevdHW6q7uwDSTbC7'>
        //    Open In Maps
        //   </a>
        // </div>
  //     </div>
  //   )
  // };



  return (<ParallaxBanner
    layers={[background,overlay,headline]}
    className={styles.directory}
  />
  );
};

export default FindUs