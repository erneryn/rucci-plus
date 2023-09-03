import Card from "./Card";

import styles from "./styles.module.scss";
import Link from "next/link";

const Contacts = ({ data }) => (
  <div className={styles.content_wrapper}>
    <h1 className={styles.header_h1}>Team Behind</h1>
    <p className={styles.subtitle}>
      <strong>Rucci+ ClubHouse</strong>
    </p>
    <div className={styles.card_list}>
      {
        data.map((e) => <Card
        key={e.slug}
        title={e.title}
        image_url={e.metadata?.image?.imgix_url}
      />)
      }
     
    </div>
    <div className={styles.button_wrapper}>
      <Link href="https://wa.me/6282181937483" passHref>
        <a target="_blank">
          <button
            className={styles.button}
          >
            See Details
          </button>
        </a>
      </Link>
    </div>
  </div>
);

export default Contacts;
