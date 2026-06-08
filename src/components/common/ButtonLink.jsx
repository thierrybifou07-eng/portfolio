import { Link } from 'react-router'

function ButtonLink({ children, to, variant = 'primary' }) {
  return (
    <Link className={`button button-${variant}`} to={to}>
      {children}
    </Link>
  )
}

export default ButtonLink
