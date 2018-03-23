import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Rate, Row, Switch } from 'antd'
import { Helmet } from 'react-helmet'
import { withState } from 'recompose'
import Link from 'umi/link'
import logo from '../assets/hatching-chick.png'
// import Music from '../components/Music'
import styles from './index.less'

export default withState(
  'isLightTheme',
  'updateTheme',
  true,
)(function ({ isLightTheme, updateTheme }) {
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
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/ideas">「得」</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/practice">「能」</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/apply">「用」</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/reach">「达」</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={1}>
          <Switch checkedChildren="黑" unCheckedChildren="白" defaultChecked checked={!isLightTheme}
                  onChange={(t) => updateTheme(!t)} />
        </Col>
      </Row>
    </Layout.Header>
  )
})