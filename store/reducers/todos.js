import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actionTypes';
import apiService from '../api';

const initialState = {
  ids: [],
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { content } = action.payload;
      const id = Math.round(Math.random() * 10000);

      console.log('***ADD TODO');
      console.log(apiService);

      apiService
        .addTodo(content)
        .then(response => {
          return {
            ...state,
            ids: [...state.ids, id],
            todos: {
              ...state.todos,
              [id]: {
                content,
                completed: false,
              }
            }
          }
        })
        .catch(error => {
          console.log('***ADD TODO ERROR');
          console.log(error);
        });

      return state;
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;

      apiService
        .toggleTodo(id)
        .then(response => {
          return {
            ...state,
            ids: [...state.ids],
            todos: {
              ...state.todos,
              [id]: {
                ...state.todos[id],
                completed: !state.todos[id].completed,
              }
            }
          };
        })
        .catch(error => {
          console.log('***TOGGLE TODO ERROR');
          console.log(error);
        });

      return state;
    }
    case REMOVE_TODO: {
      const { id } = action.payload;

      apiService
        .removeTodo(id)
        .then(response => {
          return {
            ...state,
            ids: state.ids.filter(todoId => todoId != id),
            todos: {
              ...state.todos,
              [id]: null,
            }
          }
        })
        .catch(error => {
          console.log('***REMOVE TODO ERROR');
          console.log(error);
        });
      
      return state;
    }
    default:
      return state;
  }
}

export default todos;
