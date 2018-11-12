const initialState = {
  tasks: [],
  isLoading: false,
}

// because of root reducer, "state" below refers to "Store -> tasks" 
export default function tasksReducer(state = initialState, action) {
  console.log("Reducer called with action" + action.type);
  let newstate;
  switch(action.type) {
    case "CREATE_TASK_SUCCEEDED":
      
      newstate = { 
        ...state, 
        tasks: [...state.tasks, action.payload]
      };
      
      break;

    case "EDIT_TASK_SUCCEEDED":
      
      newstate = {
        ...state,
        tasks: 
          state.tasks.map(task => {
            if (task.id === action.payload.id) {
              return action.payload;
            }
            return task;
          }),
      };

      break;

    case 'FETCH_TASKS_SUCCEEDED':
      newstate = {...state, isLoading:false, tasks: [...state.tasks, ...action.payload.tasks]};
      break

    default:
      newstate = state;
      break;
  }
  return newstate;
}
