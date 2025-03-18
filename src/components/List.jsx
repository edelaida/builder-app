import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredDataMemo } from '../redux/taskSlice.js';
import s from './TodoList.module.css';
import { selectSearchStr } from '../redux/searchSlice.js';
import { deleteTodoThunk, toggleTodoThunk } from '../redux/taskOps.js';

export const List = () => {
  const tasks = useSelector(selectFilteredDataMemo);
  const searchStr = useSelector(selectSearchStr);
  const sortedData = tasks.filter(task => task.todo.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));
  
  const dispatch = useDispatch();
 
  return (
    <ul className={s.list}>
      {sortedData.map(item => (
        <li className={s.item} key={item.id}>
          <input type='checkbox' checked={item.completed} onChange={() => dispatch(toggleTodoThunk(item))} />
          <p className={s.text} >{item.todo}</p>
          <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};