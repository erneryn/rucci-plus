import LineBreak from 'components/SubHeading/LineBreak';
import cn from 'classnames'
import styles from './styles.module.scss';

const SubHeading = ({ title, image, css }) => (
  <div className={cn(styles.sub_heading, css)}>
    <p className='cormorant'>{title}</p>
  </div>
);

export default SubHeading;