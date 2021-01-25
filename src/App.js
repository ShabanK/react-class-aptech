import React from "react"
import "./App.css";
import Navbar from "./components/Navbar"
import List from "./components/List"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      blogs: [
        {id:1, username: "ShabanK", message: "This is message 1"},
        {id:2, username: "AbdullahQ", message: "This is message 2"},
        {id:3, username: "SherozN", message: "This is message 3"},
      ],
      usernameInput: "",
      messageInput: "",
      newId: 4
    }
    this.handleUsernameChange = (event) => {
      const {value} = event.target
      this.setState({usernameInput: value})
    }
    this.handleMessageChange = (event) => {
      const {value} = event.target
      this.setState({messageInput: value})
    }
    this.handleSubmit = () =>{
      const {usernameInput, messageInput, newId} = this.state
      if (usernameInput && messageInput){
        this.setState({
          blogs: [...this.state.blogs, {id: newId,username:usernameInput, message:messageInput} ],
          newId: newId+1,
          usernameInput: "",
          messageInput: "",
        })
      }
    }
  }


  render(){
    const {blogs, usernameInput, messageInput} = this.state
    return <div className="App">
            <Navbar />
            <div className="content">
              <label>
                <h3>
                  Username
                </h3>
              </label>
              <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>
              <label><h3>
                  Message
                </h3>
                </label>
              <input type="text" value={messageInput} onChange={this.handleMessageChange} />
              <button style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}
                onClick={this.handleSubmit}
                >Submit</button>
              <List listItems={blogs}/>
            </div>
          </div>
  }
}

export default App;
