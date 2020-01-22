import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actionTypes';

const initialState = {
  ids: [],
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { content } = action.payload;
      const id = Math.round(Math.random() * 10000);

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
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;

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
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        ids: state.ids.filter(todoId => todoId != id),
        todos: {
          ...state.todos,
          [id]: null,
        }
      }
    }
    default:
      return state;
  }
}

export default todos;
