import { Button } from 'antd'
import { Helmet } from 'react-helmet'
import { withState } from 'recompose'
import Link from 'umi/link'
import router from 'umi/router'
import IdeaList from '../../components/IdeaList'
import { ideas } from '../../services/mockData'

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
      <h1>
        格物致知，用实践检验真理，知识迁移 (我在写用的时候，就是一种复盘，所以这里只是记录即可？ 这里作为 todo list)
      </h1>
      <IdeaList ideas={ideas} />
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