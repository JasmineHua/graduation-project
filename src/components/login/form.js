import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

let Demo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },

  render() {
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="用户名：">
          <Input placeholder="请输入账户名" {...getFieldProps('userName')} />
        </FormItem>
        <FormItem {...formItemLayout} label="密码：">
        <Input type="password" placeholder="请输入密码" {...getFieldProps('password')} />
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 4 }}>
          <Button type="primary" htmlType="submit">登录</Button>
        </FormItem>
      </Form>
    );
  },
});

Demo = Form.create()(Demo);

export {Demo}
