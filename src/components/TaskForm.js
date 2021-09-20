import React, { Component } from 'react'

export default class TaskForm extends Component {
  state= {
    title: '',
    description: ''
  }


  onSubmit = event => {
    this.props.addTask(this.state.title, this.state.description)
    event.preventDefault()
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }
    )
  }
  render(){
    
    return (
      <div className="divTaskForm">
        <form onSubmit={this.onSubmit}>
          <input
            className="taskInput" 
            type="text"
            name="title" 
            placeholder="Write a Task" 
            onChange={this.onChange} 
            value={this.state.title} />
          <br />
          <br />
          <textarea 
            name="description" 
            placeholder="Write a Description" 
            onChange={this.onChange} 
            value={this.state.description}>
          </textarea>
          <input className="submitTaskButton" type="submit" />
        </form>
      </div>
    )
  }

}