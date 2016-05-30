import React from 'react'
import { Modal, Button } from 'antd';
import {Demo} from './form.js'

const Login = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>显示对话框</Button>
        <Modal title="log in" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Demo />
        </Modal>
      </div>
    );
  },
});

export {Login}
