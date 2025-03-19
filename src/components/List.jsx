import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../redux/taskSlice.js';
import s from './TodoList.module.css';
//import { selectSearchStr } from '../redux/searchSlice.js';
//import { deleteTodoThunk, toggleTodoThunk } from '../redux/taskOps.js';

export const List = () => {
  //const tasks = useSelector(selectFilteredDataMemo);
  //const searchStr = useSelector(selectSearchStr);
  //const sortedData = tasks.filter(task => task.todo.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));
  const tasks = useSelector(selectTasks)

  //const dispatch = useDispatch();
 
  return (
    <div> 
    <ul className='grid grid-cols-3 gap-6 mt-10'>
      {tasks.map(item => (
        <li className='flex items-center justify-between' key={item.id}>
          <span> 
          <p>Quiz {item.name}</p>
            <p>Quiz {item.questions}</p>
            </span>
          <ul className="menu bg-base-200 rounded-box w-16">
  <li><a>edit</a></li>
            <li ><a >run</a></li>
  <li><a>delete</a></li>
      </ul>
        </li>
      ))}
      </ul>
      
    </div>
  );
};


//<input type='checkbox' checked={item.transport} onChange={() => dispatch(toggleTodoThunk(item))} />
{/* <input type='radio'   />
 <p className={s.text} >{item.country}</p>
  <input type='checkbox'  />
  <p className={s.text} >{item.transport}</p>
 <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button> */}

  