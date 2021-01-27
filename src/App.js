import React from "react"
import Axios from "axios"

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      isLoading: true,
      imageURL: "",
      imageCounter: 1
    }
    this.fetchNewImage = () => {
      this.setState({isLoading: true})
      Axios.get(`https://jsonplaceholder.typicode.com/photos/${this.state.imageCounter}`)
      .then(response=>{
        console.log(response.data.url)
        this.setState({imageURL: response.data.url, isLoading: false, imageCounter: this.state.imageCounter+1})
      })
    }
  }

  //import axios for use
  //we get the image src/url
  //we apply that url to our img tag

  //we create a button
  //on click function fires
  //function calls the next image
  //state gets updated accordingly

  componentDidMount(){
    console.log("Component did mount was fired")
    Axios.get(`https://jsonplaceholder.typicode.com/photos/${this.state.imageCounter}`)
    .then(response=>{
      console.log(response.data.url)
      this.setState({imageURL: response.data.url, isLoading: false, imageCounter: this.state.imageCounter+1})
    })

  }




  
  render(){
    return (
    <div className="container">
      <div className="imagediv">


      {this.state.isLoading?
      <p>LOADING...</p> :
      <img src={this.state.imageURL} alt="OH NO" width={300} height={300} ></img>
    }
    </div>
    <div className="buttondiv">
      <button onClick={this.fetchNewImage} disabled={this.state.isLoading} >Fetch New Image</button>
    </div>
    </div>
    )
  }
}


export default App;
