import { AutoComplete, Icon, Input } from 'antd'

import './Search.less'

const Option = AutoComplete.Option
const OptGroup = AutoComplete.OptGroup

const dataSource = [{
  title: '分类',
  children: [{
    title: '取势',
    count: 10000,
  }, {
    title: '明道',
    count: 10600,
  }],
}, {
  title: '想法',
  children: [{
    title: '「得能用达」有多好？',
    count: 60100,
  }, {
    title: '「融核思维」是啥？',
    count: 30010,
  }],
}, {
  title: '文章',
  children: [{
    title: 'Serverless 实战：打造个人阅读追踪系统',
    count: 10000,
  }, {
    title: '基于 GitHub 的敏捷学习方法之道与术',
    count: 100000,
  }],
}]

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=idea2reach"
        target="_blank"
        rel="noopener noreferrer"
      >更多
      </a>
    </span>
  )
}

const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-count">{opt.count} 人 关注</span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a
      href="https://www.google.com/search?q=idea2reach"
      target="_blank"
      rel="noopener noreferrer"
    >
      查看所有结果
    </a>
  </Option>,
])

export default () =>
  <div className="certain-category-search-wrapper" style={{ width: 250 }}>
    <AutoComplete
      className="certain-category-search"
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={false}
      dropdownStyle={{ width: 300 }}
      size="large"
      style={{ width: '100%' }}
      dataSource={options}
      placeholder="搜索想法"
      optionLabelProp="value"
    >
      <Input suffix={<Icon type="search" className="certain-category-icon" />} />
    </AutoComplete>
  </div>