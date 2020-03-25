import React, {Component} from 'react';
import './App.css';
import Sales from './Sales.js';

class App extends Component {
  render(){
      var courses = [
        {name:"React  ",price:9099},
        {name:"FireBase  ",price:1150},
        {name:"Node ",price:5050},
        {name:"Mongo",price:8540},
      ]
    return(
      <>
      <div className="App">
      <div className="App-header">
        <h1>Welcome to Cart</h1>
        </div>
        <hr/>
        <h5>click to add , click again to remove</h5>
      </div>
      <div className="App">
        <Sales items={courses} />

      </div>

      </>
    );
  }
}
export default App;
