import { Avatar, Card, Col, Divider, Icon, Row, Button } from 'antd'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'

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

export default withRouter(({ location }) => (
  <div>
    <h1>「得」：想法，是可以被规整的。</h1>
    <Row type="flex" justify="start">
      {[...ideas, ...ideas, ...ideas].map(({ meta, user }) =>
        <Col span={8}>
          <Card
            key={meta.id}
            style={{ width: 300 }}
            cover={<img alt={meta.title} src={meta.picture} />}
            actions={[
              !location.pathname.includes('get') && <Button type="primary"><Icon type="bulb">得</Icon></Button>,
              !location.pathname.includes('practise') && <Button type="primary"><Icon type="heart-o">能</Icon></Button>,
              !location.pathname.includes('apply') && <Button type="primary"><Icon type="right-circle-o">用</Icon></Button>,
              !location.pathname.includes('reach') && <Button type="primary"><Icon type="check-circle-o">达</Icon></Button>,
              <Link to={`ideas/${meta.id}`}><Button><Icon type="ellipsis" /></Button></Link>,
            ]}
          >
            <Link to={`ideas/${meta.id}`}><Meta
              avatar={<Avatar src={user.avatar} />}
              title={meta.title}
              description={meta.description}
            /></Link>
          </Card>
          <Divider />
        </Col>,
      )}
    </Row>
  </div>
))