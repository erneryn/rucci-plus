import LineBreak from 'components/SubHeading/LineBreak';

import styles from './styles.module.scss';

const SubHeading = ({ title, image }) => (
  <div className={styles.sub_heading}>
    <p className='cormorant'>{title}</p>
  </div>
);

export default SubHeading;