import Link from 'next/link';
import cn from 'classnames'
const Button = ({name, path, className}) => {
  return (
    <Link href={path} passHref >
      <a target='_blank'>
        <button type='button'  className={cn("custom_button", className)}>{name}</button>
      </a>
    </Link>
  )
}

export default Button;