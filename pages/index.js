import Link from 'umi/link'
import styles from './index.css'

export default () => (
  <div>
    <h1 className={styles.header}>Hello UmiJS!!</h1>
    <Link to="/get">得</Link>
    <Link to="/practice">能</Link>
    <Link to="/apply">用</Link>
    <Link to="/reach">达</Link>
  </div>
)