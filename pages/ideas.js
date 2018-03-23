import { Avatar, Card, Col, Icon, Row, Divider } from 'antd'
import Link from 'umi/link'

const { Meta } = Card

const ideas = [
  {
    meta: {
      id: '123456778',
      title: '改变世界的点子！💡',
      picture: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      description: '👨‍💻‍就差一个程序员了！',
      content: 'xxxxxxxxxxxx',
    },
    user: {
      name: 'Unknown',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
  },
  {
    meta: {
      id: '0000000000',
      title: '改变世界的点子！💡',
      picture: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      description: '👨‍💻‍就差一个程序员了！',
      content: 'xxxxxxxxxxxx',
    },
    user: {
      name: 'JimmyLv',
      avatar: 'https://o7mw3gkkh.qnssl.com/blog/public/img/gavatar.jpg',
    },
  },
]

export default () => (
  <div>
    <h1>「得」：想法，是可以被规整的。</h1>
    <Row type="flex" justify="start">
      {[...ideas, ...ideas, ...ideas].map(({ meta, user }) =>
        <Col span={8}>
          <Card
            key={meta.id}
            style={{ width: 300 }}
            cover={<img alt={meta.title} src={meta.picture} />}
            actions={[<Icon type="heart" />, <Icon type="edit" />,
              <Link to={`idea/${meta.id}`}><Icon type="ellipsis" /></Link>]}
          >
            <Meta
              avatar={<Avatar src={user.avatar} />}
              title={meta.title}
              description={meta.description}
            />
          </Card>
          <Divider />
        </Col>,
      )}
    </Row>
  </div>
)