import { Avatar, Button, List, Spin } from 'antd'
import Link from 'umi/link'
import styles from './index.css'

const menus = [
  { text: '得', url: '/get' },
  { text: '能', url: '/practise' },
  { text: '用', url: '/apply' },
  { text: '达', url: '/reach' },
]

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
]

export default () => (
  <div>
    <h1 className={styles.header}>

    </h1>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item actions={menus.map(m => <Button><Link to={m.url}>{m.text}</Link></Button>)}>
          <List.Item.Meta
            avatar={<Avatar src="https://o7mw3gkkh.qnssl.com/blog/public/img/gavatar.jpg" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="每一个想法，都值得被「达到」。"
          />
        </List.Item>
      )}
    />
  </div>
)