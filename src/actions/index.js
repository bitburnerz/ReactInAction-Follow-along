let _id = 1;
export function uniqueId() {
  return _id++;
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