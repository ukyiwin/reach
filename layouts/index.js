import Music from '../components/Music'
import styles from './index.less'

export default function(props) {
  return (
    <div>
      <header className={styles.header}>
      	Header
      	<Music></Music>
      </header>
      {
        props.children
      }
      <footer>Footer</footer>
    </div>
  );
}