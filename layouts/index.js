import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Rate, Row, Switch } from 'antd'

import { Helmet } from 'react-helmet'
import { withState } from 'recompose'
import Link from 'umi/link'
import logo from '../assets/hatching-chick.png'
// import Music from '../components/Music'
import styles from './index.less'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

export default withState(
  'isLightTheme',
  'updateTheme',
  true,
)(function ({ children, isLightTheme, updateTheme }) {
  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: `${isLightTheme ? '#fff' : '#011529'}` }}>
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
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item>想法</Breadcrumb.Item>
          <Breadcrumb.Item>JimmyLv</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['3']}
              defaultOpenKeys={['sub1', 'sub2']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="solution" />积分榜</span>}>
                <Menu.Item key="1">周老师</Menu.Item>
                <Menu.Item key="2">小波老师</Menu.Item>
                <Menu.Item key="3">JimmyLv</Menu.Item>
                <Menu.Item key="4">阿沐</Menu.Item>
                <Menu.Item key="5">林水强</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="rocket" />分类</span>}>
                <Menu.Item key="6">取势</Menu.Item>
                <Menu.Item key="7">明道</Menu.Item>
                <Menu.Item key="8">优术</Menu.Item>
                <Menu.Item key="9">……</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <BackTop />
      <Footer style={{ textAlign: 'center' }}>
        Reach ©2018 Created by JimmyLv.
      </Footer>
    </Layout>
  )
})