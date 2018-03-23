import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Rate, Row, Switch } from 'antd'
import Link from 'umi/link'
import Header from './Header'
import Sidebar from './Sidebar'

const { Content, Footer } = Layout

export default function ({ children }) {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/">主页</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/get">想法</Link></Breadcrumb.Item>
          <Breadcrumb.Item>JimmyLv</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sidebar />
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
}