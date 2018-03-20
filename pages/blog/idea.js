import { Helmet } from 'react-helmet'
import Link from 'umi/link'

export default () => (
	<div>
		<Helmet>
      <title>Super Idea</title>
	  </Helmet>
		<Link to="/list">Gogo List</Link>
	</div>
)