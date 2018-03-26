import { Button, Form, Input, Mention, Modal, Row, Col } from 'antd'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import trim from 'trim'
import TodoList from '../components/TodoList'
import firebase from '../services/firebase'

const { toString, toContentState } = Mention

const { TextArea } = Input

const users = [
  '周老师',
  '小波老师',
  'JimmyLv',
  '吕靖',
  '吕立青',
  '阿沐',
  '水强',
]
export default class NewIdea extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onKeyup = this.onKeyup.bind(this)
    this.state = {
      idea: '',
      visible: false,
    }
  }

  onChange(e) {
    this.setState({
      idea: e.target.value,
    })
  }

  onKeyup(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== '') {
      e.preventDefault()
      let dbCon = firebase.database().ref('/ideas')
      dbCon.push({
        idea: trim(e.target.value),
      })
    }
  }

  handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })

  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  previewText = (e) => {
    e.preventDefault()
    this.setState({
      visible: true,
    })
  }

  render() {
    const { type } = this.props
    return (
      <Form onSubmit={this.previewText}>
        <Form.Item>
        <TextArea
          rows={10}
          className="textarea"
          placeholder={type === 'get' ? `😀 输入你的新想法` : `🍅 恭喜你开始 ${type} 想法`}
          cols="50"
          onChange={this.onChange}
          onKeyUp={this.onKeyup}
          value={this.state.idea}>
          </TextArea>
        </Form.Item>
        <Form.Item>
          <Row type="flex" justify="end">
            <Button>取消</Button>
            <Button type="primary" htmlType="submit">预览</Button>
          </Row>
          <Modal
            title="预览你的想法"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <ReactMarkdown source={this.state.idea} />
          </Modal>
        </Form.Item>
        {type === 'practise' && <Form.Item>
          <TodoList />
        </Form.Item>}
        <Form.Item>
          <h4>
            {['get', 'edit'].includes(type) ? '「以教为学」你想教给谁？' : '你想请教哪位老师获得反馈？'}
          </h4>
          <Row type="flex" justify="space-between">
            <Col span={10}>
              <Mention
                style={{ width: '100%' }}
                defaultValue={toContentState('@吕')}
                suggestions={users}
              />
            </Col>
            <Col span={2}><Button type="primary">提交</Button></Col>
          </Row>
        </Form.Item>
      </Form>
    )
  }
}

