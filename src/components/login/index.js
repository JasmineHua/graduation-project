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
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>显示对话框</Button>
        <Modal title="log in" visible={this.state.visible}>
          <Demo />
        </Modal>
      </div>
    );
  },
});

export {Login}
