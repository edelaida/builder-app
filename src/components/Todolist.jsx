import { useSelector } from 'react-redux';
//import { AddForm } from './AddForm';
import { List } from './List';
//import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { selectIsError, selectIsLoading, selectUncompletedTodosMemo } from '../redux/taskSlice.js';
//import { Filter } from './Filter';

export const TodoList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const uncompletedTodos = useSelector(selectUncompletedTodosMemo)

  return (
    <div className={s.todoWrapper}>  
      <h1>Quiz Catalog</h1>
      {/*<SearchBar />
      <Filter/> */}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}
      {/* <h2>Uncompleted tasks: {uncompletedTodos}</h2> */}
      <List />
    </div>
  );
};