import { Avatar, Button, Card, Col, Divider, Icon, Row } from 'antd'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'

const { Meta } = Card

const actions = [
  { type: 'get', icon: 'bulb', text: '得' },
  { type: 'practise', icon: 'heart-o', text: '能' },
  { type: 'apply', icon: 'right-circle-o', text: '用' },
  { type: 'reach', icon: 'check-circle-o', text: '达' },
]

export default withRouter(({ location: { pathname }, ideas }) => (
  <Row type="flex" justify="start">
    {ideas.map(({ meta, user }) =>
      <Col span={8}>
        <Card
          key={meta.id}
          style={{ width: 300 }}
          cover={<img alt={meta.title} src={meta.picture} />}
          actions={[
            ...actions.map(action => (
                <Button disabled={pathname.includes(action.type)} type="primary">
                  <Link to={`/ideas/${action.type}?idea=${meta.id}`}>
                    <Icon type={action.icon}>{action.text}</Icon>
                  </Link>
                </Button>
              ),
            ),
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