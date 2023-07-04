import cn from "classnames";
import styles from "./styles.module.scss";
import SubHeading from "components/SubHeading";
import Image from 'next/image';


const Tenants = ({ data }) => {
  return (
    <div className={cn(styles.tenants, "section_padding")}
      id="tenants">
      <h1 className={styles.tenant_h1}>ALL MERCHANT</h1>
      <div className={styles.items_wrapper}>
        {
          data.map((e, idx) => <div key={idx} >
            <div className={styles.img_container}>
              <Image
                src={e?.metadata?.logo?.imgix_url}
                objectFit="contain"
                objectPosition="center"
                layout="fill"
              />
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Tenants