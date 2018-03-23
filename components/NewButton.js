import { Button, Icon } from 'antd'
import Link from 'umi/link'
import styles from './NewButton.less'

export default () => (
  <Button type="primary" className={styles.button}>
    <Link to={'/ideas/get'}><Icon type="plus" /></Link>
  </Button>
)