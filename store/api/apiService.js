import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { createHttpLink } from 'apollo-link-http';


const getTodosQuery = gql`
  query getTodos {
    getTodos {
      id
      content
      completed
    }
  }
`;

const addTodoMutation = gql`
  mutation addTodo($content: String!) {
    addTodo(content: $content) {
      id
      content
      completed
    }
  }
`;

const toggleTodoMutation = gql`
  mutation toggleTodo($id: String!) {
    toggleTodo(id: $id) {
      id
      content
      completed
    }
  }
`;

const removeTodoMutation = gql`
  mutation removeTodo($id: String!) {
    removeTodo(id: $id) {
      id
    }
  }
`;

class TodoApi {
  client;

  constructor() {
    const url = 'https://281pp.sse.codesandbox.io/graphql';
    const link = createHttpLink({
      uri: url,
    });

    this.client = new ApolloClient({ link });
  }

  onError = (error) => {
    return Promise.reject(error);
  };

  addTodo = (content) => this.client.mutate({
    mutation: addTodoMutation,
    variables: { content },
    fetchPolicy: 'no-cache',
  })
  .catch(this.onError);

  toggleTodo = (id) => this.client.mutate({
    mutation: toggleTodoMutation,
    variables: { id },
    fetchPolicy: 'no-cache',
  })
  .catch(this.onError);

  removeTodo = (id) => this.client.mutate({
    mutation: removeTodoMutation,
    variables: { id },
    fetchPolicy: 'no-cache',
  })
  .catch(this.onError);

  getTodos = () => this.client.query({
    query: getTodosQuery,
    fetchPolicy: 'no-cache',
  })
  .catch(this.onError);
}

const apiService = new TodoApi();

export default apiService;
