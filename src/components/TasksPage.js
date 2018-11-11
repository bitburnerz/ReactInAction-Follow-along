import React, { Component } from 'react';
import TaskList from './TaskList';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Input, Button, Grid } from 'semantic-ui-react'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: '',
      description: '',
    };
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  resetForm() {
    this.setState({
      showNewCardForm: false,
      title: '',
      description: '',
    });
  }

  onCreateTask = (e) => {
    e.preventDefault();
    this.props.onCreateTask(this.state.title, this.state.description);
    this.resetForm();
  }

   toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm});
  }

  allowdrop = (e) => {
    e.preventDefault();
  }

  drop = (status, e) => {
    e.preventDefault();
    this.props.onEditTask(e.dataTransfer.getData("text"), status);
  }

  renderTaskLists() {
    const { tasks } = this.props;

    return (
      <Grid  textAlign='center' columns={5}>
      <Grid.Row stretched >
        {TASK_STATUSES.map((status, index) => {
            const statusTasks = tasks.filter(task => task.status === status);
            return ( 
              <Grid.Column key={index}>
                <div onDrop={(e) => this.drop(status, e)} onDragOver={this.allowdrop} >
                <Segment>
                  <TaskList key={status} status={status} tasks={statusTasks} />
                </Segment>
                </div>
              </Grid.Column>
            );
          }
        )
        }
      </Grid.Row>
      </Grid>)
  }

  render() {
    return (
      <div>
        <div className='task-lists-header'>
         <Button className='button button-default' onClick={this.toggleForm}>+ New Task</Button>

        </div>
        { this.state.showNewCardForm && (
          <form className="task-list-form" onSubmit={this.onCreateTask}>
            <Input
              className="full-width-input"
              onChange={this.onTitleChange}
              value={this.state.title}
              type="text"
              placeholder="title"
            />
            <Input 
              className="full-width-input"
              onChange={this.onDescriptionChange}
              value={this.state.description}
              type="text"
              placeholder="description"
            />
            <Button type="submit">Save</Button>
          </form>
        )}
        <div className='task-lists'>
        {this.renderTaskLists()}
        </div>
      </div>
    );
  }
}

export default TasksPage;
