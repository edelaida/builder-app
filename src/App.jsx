import { useDispatch } from 'react-redux';
import { TodoList } from './components/Todolist.jsx';
import { fetchTodos } from './redux/taskOps.js';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <TodoList />
    </>
  );
};


