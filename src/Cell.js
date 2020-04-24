import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    //When do you also need to pass props to super?
    super(props)
    this.state = {
      color: this.props.color
    }
  }//constructor

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor 
    })
  }
  
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}