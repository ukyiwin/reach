import { Checkbox, Steps, Divider } from 'antd'
import { Component } from 'react'

const CheckboxGroup = Checkbox.Group
const Step = Steps.Step

const plainOptions = ['去沃尔玛买三个 Apple', '练习 TypeScript 五十分钟', '总结「融合π」学习内容，字数 1000']
const defaultCheckedList = ['去沃尔玛买三个 Apple']

export default class TodoList extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  }

  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全部完成
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
        <Divider />
        <Steps size="small" current={1}>
          <Step title="Finished" />
          <Step title="In Progress" />
          <Step title="Waiting" />
        </Steps>
      </div>
    )
  }

  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    })
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    })
  }
}
