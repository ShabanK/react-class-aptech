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
    }
  }


  render(){
    return <div className="App">
            <Navbar />
            <List listItems={this.state.blogs}/>
          </div>
  }
}

export default App;
