import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment } from 'semantic-ui-react'

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

const Task = props => {
  return (
    <Segment id={props.task.id} onDragStart={drag} draggable='true' inverted color='blue' className="task">
      <Header>{props.task.title}</Header>
      {props.task.description}
    </Segment>
  );
};

export default Task;
