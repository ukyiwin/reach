import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Row } from 'antd'

import { Helmet } from 'react-helmet'
import logo from '../assets/hatching-chick.png'
// import Music from '../components/Music'
import styles from './index.less'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

export default function (props) {
  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: '#fff' }}>
        <Helmet>
          <title>Reach: 从「得到」到「达到」</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Row>
          <Col span={1}>
            <Avatar src={logo} />
          </Col>
          <Col span={16}>
            <Divider orientation="left">
              <div className={styles.slogan}>敬想法：从<span className={styles.keyword}>「得到」</span>到<span className={styles.keyword}>「达到」</span></div>
            </Divider>
          </Col>
          <Col span={4} offset={3}>
            <Menu
              // theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">得</Menu.Item>
              <Menu.Item key="2">能</Menu.Item>
              <Menu.Item key="3">用</Menu.Item>
              <Menu.Item key="4">达</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {
              props.children
            }
          </Content>
        </Layout>
      </Content>
      <BackTop />
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  )
}