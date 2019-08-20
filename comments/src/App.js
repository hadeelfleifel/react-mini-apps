import React,{Component} from 'react';
import './App.css'
class App extends React.Component {
    state = {
          commentId: 1,
          userName: "Hadeel Fleifel",
          photo:<img class='pic' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"></img>,
          location: "Amman",
          myComment:
            "my first comment",
          commentTime: "2 minutes ago."
  }



  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-4">Comment</h1>
        <div className='cc'>
        <div className="ph" >{this.state.photo}</div>
        <div className='p'><pre>
          <b>{this.state.userName}</b> . <i>{this.state.location}</i>
          <br/>
          {this.state.myComment}
          <br/>
          <a href='#'>Like</a>.<a href='#'>Replay</a> . 
           <u>{this.state.commentTime}</u> 
          </pre>
          </div></div>
      </div>
    );
  }
}

export default App;
