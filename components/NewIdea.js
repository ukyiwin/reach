import { Form, Row, Input, Button } from 'antd'
import React, { Component } from 'react'
import trim from 'trim'

const { TextArea } = Input

export default class NewIdea extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onKeyup = this.onKeyup.bind(this)
    this.state = {
      idea: '',
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
      let dbCon = this.props.db.database().ref('/ideas')
      dbCon.push({
        idea: trim(e.target.value),
      })
      this.setState({
        idea: '',
      })
    }
  }

  previewText() {

  }

  render() {
    const { type } = this.props
    return (
      <Form onSubmit={this.previewText}>
        <Form.Item>
        <TextArea
          rows={10}
          className="textarea"
          placeholder={type === 'get' ? `😀 输入你的想法` : `恭喜你${type}新的想法`}
          cols="100"
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
        </Form.Item>
      </Form>
    )
  }
}

