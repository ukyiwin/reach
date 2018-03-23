import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Rate, Row, Switch } from 'antd'
import { Helmet } from 'react-helmet'
import { withState } from 'recompose'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'
import logo from '../assets/hatching-chick.png'
// import Music from '../components/Music'
import styles from './index.less'

const menus = [
  { text: '得', url: '/ideas' },
  { text: '能', url: '/practice' },
  { text: '用', url: '/apply' },
  { text: '达', url: '/reach' },
]

export default withRouter(withState(
  'isLightTheme',
  'updateTheme',
  true,
)(function ({ isLightTheme, updateTheme, location }) {
  return (
    <Layout.Header className="header" style={{ backgroundColor: `${isLightTheme ? '#fff' : '#011529'}` }}>
      <Helmet>
        <title>Reach: 从「得到」到「达到」</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Row>
        <Col span={1}>
          <Avatar src={logo} size="small" />
        </Col>
        <Col span={14}>
          <Divider orientation="left">
            <div className={styles.slogan}>
              敬想法：从<span className={styles.keyword}>「得到」</span>到<span className={styles.keyword}>「达到」</span>
            </div>
          </Divider>
        </Col>
        <Col span={6} offset={2}>
          <Menu
            theme={isLightTheme ? 'light' : 'dark'}
            mode="horizontal"
            defaultSelectedKeys={['1']}
            selectedKeys={[location.pathname]}
            style={{ lineHeight: '64px' }}
          >
            {menus.map(m => <Menu.Item key={m.url}>
              <Link to={m.url}>「{m.text}」</Link>
            </Menu.Item>)}
          </Menu>
        </Col>
        <Col span={1}>
          <Switch checkedChildren="黑" unCheckedChildren="白" defaultChecked checked={!isLightTheme}
                  onChange={(t) => updateTheme(!t)} />
        </Col>
      </Row>
    </Layout.Header>
  )
}))