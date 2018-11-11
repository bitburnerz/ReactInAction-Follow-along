import React, { Component } from "react";
import Task from "./Task";
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header } from 'semantic-ui-react'


class TaskList extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="task-list" >

        <Segment inverted className="task-list-title">
          <Header>{this.props.status}</Header>
        </Segment>
        {this.props.tasks.map(task => (<Task key={task.id} task={task} />))}
      </div>
    );
  };
}

export default TaskList;
