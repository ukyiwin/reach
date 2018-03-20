import Link from 'umi/link'
import styles from './index.css'

export default () => (
	<div>
		<h1 className={styles.header}>Hello UmiJS!!</h1>
		<Link to="/list">Gogo List</Link>
	</div>
)