import { Helmet } from 'react-helmet'

import Music from '../components/Music'
import styles from './index.less'

export default function(props) {
  return (
    <div>
	    <Helmet>
	        <title>Try UmiJS</title>
	        <meta name="description" content="Helmet application" />
	    </Helmet>
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