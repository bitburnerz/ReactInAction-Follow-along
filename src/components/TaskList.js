import React from "react";
import Task from "./Task";
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header } from 'semantic-ui-react'

const TaskList = (props) => {
  return (
    <div className="task-list">

      <Segment inverted className="task-list-title">
        <Header>{props.status}</Header>
      </Segment>
      {props.tasks.map(task => (<Task key={task.id} task={task} onEditTask={props.onEditTask} />))}
    </div>
  );
};

export default TaskList;
