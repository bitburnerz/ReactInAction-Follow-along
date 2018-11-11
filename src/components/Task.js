import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react'

const TASK_STATUSES = [
  { key: 1, text: 'Unstarted', value: 'Unstarted' },
  { key: 2, text: 'In Progress', value: 'In Progress' },
  { key: 3, text: 'Completed', value: 'Completed' },
]

const Task = props => {
  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
          <Dropdown text="Change Status" onChange={function (e, data) { props.onEditTask(props.task.id, data.value)}} options={TASK_STATUSES} blahbla />
         
      </div>
      <div className="task-body">{props.task.description}</div>
    </div>
  );
};

export default Task;
