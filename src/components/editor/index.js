import React from 'react'
import connect from '../../lib/connect.js'

const Editor = React.createClass({
  getInitialState: function () {
    return{
      postKey: null,
      note: ''
    }
  }
  changeNote: function(e){
    this.setState({note: e.target.value})
  }
  setPostKey: function(key){
    this.setState({postKey: key})
  }
  componentWillReceiveProps: function(){
    const id = nextProps.params.noteId
    if (id) {
        connect.child('note').child(connect.getAuth().auth.uid).child(id).once('value', snapshot:function(){
            this.setState({
                postKey: snapshot.key(),
                note: snapshot.val().note
            })
        })
    } else {
      this.setState({
        note: '',
        postKey: null
      })
    }
  }
  componentDidMount: function(){
      if (this.props.params.noteId) {
          connect.child('note').child(connect.getAuth().auth.uid).child(this.props.params.noteId).once('value', snapshot => {
              this.setState({
                  postKey: snapshot.key(),
                  note: snapshot.val().note
              })
          })
      }
  }
  render() {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header note={this.state.note} postKey={this.state.postKey} setPostKey={this.setPostKey} router={this.context.router}/>
      </StatusBar>
      <Card>
        <CardActions>
          <TextField
              hintText="&nbsp;Enter markdown text here."
              fullWidth={true}
              underlineShow={false}
              multiLine={true}
              onChange={this.changeNote}
              value={this.state.note}
            />
        </CardActions>
      </Card>
      </div>
    );
  }
}

})
