import * as api from '../api';
import axios from 'axios';

// this is an async function, which when completed, well call the
// synchronous "fetchTasksSucceeeded" action
export function fetchTasks() {
  return dispatch => {
    api.fetchTasks().then(resp => { dispatch(fetchTasksSucceeded(resp.data))
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
  return dispatch => {
      api.createTask({ title, description, status: 'Unstarted' }).then(response => {
        dispatch(createTaskSucceeded(response.data));
    });
  };
}

export function createTaskSucceeded(task) {
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
    }
  }
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
