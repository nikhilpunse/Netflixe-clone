import React, { Component } from 'react'

export default class 
 extends Component {

  constructor(){
    super();
    this.state={
      count : 0
    }
  }

  componentDidMount(){
    console.log('componentDidMount : it run when component renders first time');
  }

  incr(){
    this.setState({count : this.state.count + 1})
  }

  render() {
    return (
      <>
     <h1>hello  Nikhil</h1>
     <h1>{this.state.count}</h1>
     <button className='border' onClick={()=>this.incr()}>Click me</button>
      </>
    )
  }
}
