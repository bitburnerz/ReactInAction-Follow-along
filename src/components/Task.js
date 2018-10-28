import React from "react";

const TASK_STATUSES = [
  'Unstarted',
  'In Progress',
  'Completed'
]

const Task = props => {
  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
        <select value={props.task.status} onChange={function (e) { props.onEditTask(props.task.id, e.target.value)}} >
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
      <div className="task-body">{props.task.description}</div>
    </div>
  );
};

export default Task;