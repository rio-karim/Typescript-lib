import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = axios.get(url);
getTodo.then(res => {
  const todo = res.data as Todo;
  const { id, title, completed } = todo;
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}`);
};
