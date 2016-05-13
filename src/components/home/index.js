import React from 'react'
// import './home.less'

const Home = React.createClass({
  render(){
    return(
      <div>
        <div>qq</div>
        <style>
          {`
            .ant-layout-top .ant-layout-header  {
              background: rgba(0, 0, 0, 0.25);
            }
            .ant-menu{
              background: transparent;
            }
            .ant-menu-horizontal .ant-menu-item a{
              color: #eee
            }
          `}

        </style>
      </div>
    )
  }
})
export {Home}
