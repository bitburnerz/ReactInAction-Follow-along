export default function tasksReducer(state = { tasks: [] }, action) {
  console.log("Reducer called with action" + action.type);
  let newstate;
  switch(action.type) {
    case "CREATE_TASK_SUCCEEDED":
      newstate = { tasks: [...state.tasks, action.payload]};
      console.log("create tasks with:" + newstate.tasks)
      break;
    case "EDIT_TASK":
      newstate = { tasks: [...state.tasks] };
      newstate.tasks[action.payload.taskid - 1].status = action.payload.newtaskstatus;
      break;
    case 'FETCH_TASKS_SUCCEEDED':
      newstate = { tasks: [...state.tasks, ...action.payload.tasks] };
      break
    default:
      newstate = state;
      break;
  }
  return newstate;
}
