const getTasksLocalStorage = () => {
  if (localStorage.getItem('tasksContainer') != null) {
    return JSON.parse(localStorage.getItem('tasksContainer'));
  }
  return [];
};

export default getTasksLocalStorage;
