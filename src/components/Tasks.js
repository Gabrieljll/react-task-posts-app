import React, { Component } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

class Tasks extends Component {
  render() {
    return <div className="divTasks" > <div className="Tasks">{this.props.tasks.map((task) =>
      <Task key = { task.id }
        task = { task }
        deleteTask = { this.props.deleteTask }
        checkDone = { this.props.checkDone }
        />)}
        </div>
      </div>
    }
  }

  Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
  }
  export default Tasks