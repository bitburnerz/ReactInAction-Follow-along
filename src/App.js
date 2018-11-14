import React, { Component } from "react";
import { connect } from 'react-redux';
import TasksPage from './components/TasksPage';
import { createTask, editTask, fetchTasks } from './actions';
import 'semantic-ui-css/semantic.min.css';
import { Message, Dimmer, Loader } from 'semantic-ui-react'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  onEditTask = (taskid, newtaskstatus) => {
    console.log('editing task ' + taskid + 
      'by updating its status to ' + newtaskstatus);
    this.props.dispatch(editTask(taskid, newtaskstatus));
  }

  onCreateTask = (title, description) => {
    console.log(
      'dispatch called from App! with title ' + title + 
      ' and description ' + description);
    this.props.dispatch(createTask(title, description));
  }

  render() {
    return (

      <div className='main-content'>
        <Loader active={this.props.isLoading} inline />  
        {this.props.error === true ? <Message negative>Failed to fetch tasks</Message> : '' }
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
    tasks: state.tasks.tasks,
    isLoading: state.tasks.isLoading,
    error: state.tasks.error,
  }
}

export default connect(JFMapStateToProps)(App);
