import { Button } from 'antd'
import { Helmet } from 'react-helmet'
import { withState } from 'recompose'
import Link from 'umi/link'
import router from 'umi/router'

function goto(url = '') {
  router.push(`/${url}`)
  console.info('goto', router.location)
}

export default withState('product', 'setProduct')(
  ({ product, setProduct }) => (
    <div>
      <Helmet>
        <title>Product{product ? `: ${product}` : ' List'}</title>
      </Helmet>
      <h1>Hello UmiJS!!</h1>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ol>
      <Button
        type="primary"
        onClick={() => {
          const newProduct = prompt('Where will u select from list?', product)
          goto(`list?product=${newProduct}`)
          setProduct(() => newProduct)
        }}>Buy {product}</Button>
    </div>
  ),
)