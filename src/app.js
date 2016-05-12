import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router'
import {Menu} from 'antd'
import '../node_modules/antd/style/index.less'
import {Navigator} from './view/navigator.js'
import {Home} from './components/home/index.js'
// const App = React.createClass({
//   render() {
//     return (
//       <div>
//       <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })
const About = React.createClass({
  render(){
    return(
      <div>123</div>
    )
  }
})
const Inbox = React.createClass({
  render(){
    return <div>456</div>
  }
})


ReactDom.render(
  <Router history={hashHistory}>
      <Route path="/" component={Navigator}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox} />
      </Route>
    </Router>,
  document.getElementById('app')
)
