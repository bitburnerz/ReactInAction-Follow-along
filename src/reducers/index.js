export default function tasksReducer(state = { tasks: [] }, action) {
  console.log("Reducer called with action" + action.type);
  let newstate;
  switch(action.type) {
    case "CREATE_TASK_SUCCEEDED":
      newstate = { tasks: [...state.tasks, action.payload]};
      break;
    case "EDIT_TASK_SUCCEEDED":
      newstate = { tasks: 
        state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
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
