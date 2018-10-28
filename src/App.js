import React, { Component } from "react";
import { connect } from 'react-redux';
import TasksPage from './components/TasksPage';
import { createTask, editTask } from './actions';

class App extends Component {

  onCreateTask = (title, description) => {
    console.log(
      'dispatch called from App! with title ' + title + 
      ' and description ' + description);
    this.props.dispatch(createTask(title, description));
  };

  onEditTask = (taskid, newtaskstatus) => {
    console.log('editing task ' + taskid + 
      'by updating its status to ' + newtaskstatus);
    this.props.dispatch(editTask(taskid, newtaskstatus));
  };

  render() {
    console.log('props from App:', this.props);
    return (
      <div className='main-content'>
        <TasksPage 
        tasks={this.props.tasks} 
        onCreateTask={this.onCreateTask} 
        onEditTask={this.onEditTask}
        />
      </div>
    );
  }

}

// the following function can be named anything really
function JFMapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(JFMapStateToProps)(App);