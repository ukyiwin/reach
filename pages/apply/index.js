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
        格物致知，用实践检验真理，知识迁移
      </h1>
      <p>
        (我在写‘用’的时候，就是一种复盘，所以这里只是记录即可？ 这里作为 todo list)
        更重要的是，‘用’可以外包出去，当一个人在某个领域（比如 PPT）积累了‘积分’之后，你在用的时候就可以尝试外包的方式，节省时间！
      </p>
      <IdeaList ideas={ideas} />
      <Button
        type="primary"
        onClick={() => {
          const newProduct = prompt('Where will u select from list?', product)
          goto(`ideas?product=${newProduct}`)
          setProduct(() => newProduct)
        }}>Buy {product}</Button>
    </div>
  ),
)