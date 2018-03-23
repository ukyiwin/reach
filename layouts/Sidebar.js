import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Rate, Row, Switch } from 'antd'
import Link from 'umi/link'

const { SubMenu } = Menu
const { Sider } = Layout

const rankings = [
  { type: 'word', text: '巅峰造极' },
  { type: 'piece', text: '学富五车' },
  { type: 'teach', text: '好为人师' },
  { type: 'edit', text: '精益求精' },
]
const categories = ['取势', '明道', '优术', '…', 'Proposal']

export default () => (
  <Sider width={200} style={{ background: '#fff' }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['/']}
      defaultOpenKeys={['sub1', 'sub2']}
      style={{ height: '100%' }}
    >
      <Menu.Item key="/"><Link to={`/`}>我的想法</Link></Menu.Item>
      <Menu.Item key="/get"><Link to={`/get`}>最新想法</Link></Menu.Item>
      <SubMenu key="sub1" title={<span><Icon type="solution" />积分榜</span>}>
        {rankings.map(r => <Menu.Item key={r.type}><Link to={`/rankings?type=${r.type}`}>{r.text}</Link></Menu.Item>)}
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="rocket" />分类</span>}>
        {categories.map(c => <Menu.Item key={c}>{c}</Menu.Item>)}
      </SubMenu>
    </Menu>
  </Sider>
)