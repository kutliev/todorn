export const isLoggedIn = store => store.account.isLoggedIn;

export const getUserName = store => store.account.userName;

export const getTodoList = store => {
  console.log('***STORE');
  console.log(store);

  return store.todos
    ? store.todos.ids
    : [];
}

export const getTodoById = (store, id) => store.todos
  ? { ...store.todos.todos[id], id }
  : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));
