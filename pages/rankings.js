import { Avatar, List, Spin, Table } from 'antd'

import _ from 'lodash'
import withRouter from 'umi/withRouter'

const dataSource = [{
  key: '1',
  name: '周老师',
  piece: 32,
  content: '一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
}, {
  key: '2',
  name: '小波老师',
  piece: 42,
  content: '一段文字一段文字一段一段文字一段文字一段文字一段文字',
}, {
  key: '3',
  name: 'JimmyLv',
  piece: 12,
  content: '一段文字一段文字一段一段文字一段文字一段文字一段文字',
}, {
  key: '4',
  name: '阿沐',
  piece: 10,
  content: '一段文字一段文字一段一段文字一段文字一段文字',
}, {
  key: '5',
  name: '林水强',
  piece: 21,
  content: '一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
}]

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '最高字数',
  dataIndex: 'words',
  key: 'words',
}, {
  title: '最多篇数',
  dataIndex: 'piece',
  key: 'piece',
}]

const MAPS = {
  word: 'words',
  piece: 'piece',
  teach: 'name',
  edit: 'key',
}
export default withRouter(({ location }) => (
  <Table
    dataSource={_.orderBy(
      dataSource.map((user => ({
        ...user,
        words: user.content.length*1024,
      }))),
      MAPS[location.query.type],
      ['desc'],
    )}
    columns={columns} />
))