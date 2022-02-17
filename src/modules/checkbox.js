const updateLocalStorage = (getList) => {
  localStorage.clear();
  localStorage.setItem('to-do', JSON.stringify(getList));
};

export default updateLocalStorage;
