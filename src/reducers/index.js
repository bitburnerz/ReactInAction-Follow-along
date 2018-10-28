import { uniqueId } from '../actions/index'

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];

export default function tasksReducer(state = { tasks: mockTasks }, action) {
  console.log("Reducer called with action" + action.type);
  let newstate;
  switch(action.type) {
    case "CREATE_TASK":
      newstate = { tasks: [...state.tasks, action.payload]};

      console.log("create tasks with:" + newstate.tasks)
      break;
    default:
      newstate = state;
  }
  switch (action.type) {
    case "EDIT_TASK":
      newstate = { tasks: [...state.tasks] };
      newstate.tasks[action.payload.taskid - 1].status = action.payload.newtaskstatus;
      break;
    default:
      newstate = state;
  }
  return newstate;
}