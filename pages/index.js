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
  { id: '123400000', title: '想法 Title 1', description: '每一个想法，都值得被「达到」。'},
  { id: '123400000', title: '想法 Title 2', description: '每一个想法，都值得被「达到」。'},
  { id: '123400000', title: '想法 Title 3', description: '每一个想法，都值得被「达到」。'},
  { id: '123400000', title: '想法 Title 4', description: '每一个想法，都值得被「达到」。'},
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
            title={<Link to={`ideas/?idea=${item.id}`}>{item.title}</Link>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  </div>
)