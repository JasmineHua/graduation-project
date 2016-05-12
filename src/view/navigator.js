import React from 'react'
import {Link,IndexLink} from 'react-router'
import {Menu, Breadcrumb} from 'antd';
import './navigator.less'

const Navigator = React.createClass({
  render() {
    return (
      <div className="ant-layout-top">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo">jasmineHua</div>
            <Menu mode="horizontal"
              defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
              <Menu.Item key="1"><IndexLink to="/">Home</IndexLink></Menu.Item>
              <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/inbox">Inbox</Link></Menu.Item>
              <Menu.Item key="4">导航三</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-wrapper">
          <div className="ant-layout-container">
            <div>{this.props.children}</div>
          </div>
        </div>
        <div className="ant-layout-footer">
        yu
        </div>
      </div>
    );
  }
});

export {Navigator}
