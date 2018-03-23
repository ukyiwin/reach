import { Avatar, Button, Card, Col, Divider, Icon, Row } from 'antd'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'

const { Meta } = Card

export default withRouter(({ location: { pathname}, ideas }) => (
  <Row type="flex" justify="start">
    {ideas.map(({ meta, user }) =>
      <Col span={8}>
        <Card
          key={meta.id}
          style={{ width: 300 }}
          cover={<img alt={meta.title} src={meta.picture} />}
          actions={[
            <Button disabled={pathname.includes('get')} type="primary"><Icon type="bulb">得</Icon></Button>,
            <Button disabled={pathname.includes('practise')} type="primary"><Icon type="heart-o">能</Icon></Button>,
            <Button disabled={pathname.includes('apply')} type="primary"><Icon type="right-circle-o">用</Icon></Button>,
            <Button disabled={pathname.includes('reach')} type="primary"><Icon type="check-circle-o">达</Icon></Button>,
            <Link to={`ideas/edit?idea=${meta.id}`}><Button><Icon type="ellipsis" /></Button></Link>,
          ]}
        >
          <Link to={`ideas/${pathname.split('/')[1]}?idea=${meta.id}`}><Meta
            avatar={<Avatar src={user.avatar} />}
            title={meta.title}
            description={meta.description}
          /></Link>
        </Card>
        <Divider />
      </Col>,
    )}
  </Row>
))