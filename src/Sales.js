import React, {Component} from 'react';
import './App.css';

class Sales extends Component {

sum(price){
  this.setState({total: this.state.total+price});
}

  constructor(props){
    super(props);

    this.state = {total:0};
    this.sum=this.sum.bind(this);
  }
  render(){
    var courses = this.props.items.map((a,i)=>{
      return<Course name={a.name} price={a.price}
      key={i} sum={this.sum} active={a.active}/>
    });

    return(
      <div>

        <h1>I'm from Sales</h1>
        <div id="courses">
        {courses}
        <p id="total">Total : <b>{this.state.total}</b></p>
        </div>

      </div>
    );
  }
}

class Course extends Component {

  clicker(){
    var active=!this.state.active;
    this.setState({active:active});
    this.props.sum(active ? this.props.price:-this.props.price);
  }

  constructor(props){
    super(props);

    this.state = {
      active: false
    };
    this.clicker=this.clicker.bind(this);
  }
  render(){
    return(
      <div>
      <p onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    );
  }
}


export default Sales;
