import Link from 'umi/link'
import router from 'umi/router'
import { Button } from 'antd'

function goto(url = '') {
	router.push(`/${url}`)
	console.info('goto', router.location)
}

export default () => (
	<div>
		<h1>Hello UmiJS!!</h1>
		<ol>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/list">List</Link>
			</li>
			<li>
				<Button type="primary" onClick={() => {
					const product = prompt('Where will u select from list?')
					goto(`list?product=${product}`)
				}}>Goto</Button>
			</li>
		</ol>
	</div>
)