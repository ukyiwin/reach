import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Rate, Row, Switch } from 'antd'
import Header from './Header'

const { SubMenu } = Menu
const { Content, Footer, Sider } = Layout
const users = ['周老师', '小波老师', 'JimmyLv', '阿沐', '林水强']
const categories = ['取势', '明道', '优术', '…', 'Proposal']

export default function ({ children }) {
  return (
    <Layout>
      <Header />
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
              defaultSelectedKeys={['JimmyLv']}
              defaultOpenKeys={['sub1', 'sub2']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="solution" />积分榜</span>}>
                {users.map(u => <Menu.Item key={u}>{u}</Menu.Item>)}
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="rocket" />分类</span>}>
                {categories.map(c => <Menu.Item key={c}>{c}</Menu.Item>)}
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
}