import axios from 'axios';

let _id = 1;
export function uniqueId() {
  return _id++;
}

// this is an async function, which when completed, well call the
// synchronous "fetchTasksSucceeeded" action
export function fetchTasks() {
  return dispatch => {
    axios.get('http://localhost:3001/tasks')
    .then(resp => { dispatch(fetchTasksSucceeded(resp.data))
    })
  };
}

export function fetchTasksSucceeded(tasks) {
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  };
}

export function createTask(title, description) {
  return {
    type: 'CREATE_TASK',
    payload: {
      id: uniqueId(),
      title: title,
      description: description,
      status: 'Unstarted',
    },
  };
}

export function editTask(taskid, newtaskstatus) {
  return {
    type: 'EDIT_TASK',
    payload: {
      taskid: taskid,
      newtaskstatus: newtaskstatus,
    },
  };
}
