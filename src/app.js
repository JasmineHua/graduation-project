import React from 'react'
import ReactDom from 'react-dom'
import {DatePicker,message, Button, Dropdown} from 'antd'
import '../node_modules/antd/style/index.less'
import {Navigator} from './view/navigator.js'


const Foo = React.createClass({
  getInitialState() {
    return {
      bar: false
    };
  },
  handleClick:function() {
    this.setState({
      bar:!this.state.bar
    })
  },
  render(){
    return <div>
    <div onClick={this.handleClick}>1</div>
    {this.state.bar && <Navigator>2</Navigator>}

    </div>
  }
})

ReactDom.render(
  <div>
  <Foo />

  </div>,
  document.getElementById('app')
)
