import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://67b30bddbc0165def8cfb08a.mockapi.io/api/t1';

export const fetchTodos = createAsyncThunk('fetchData', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/tasks');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkApi) => {
  try {
    const { data } = await axios.delete(`/tasks/${id}`);
    return data.id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkApi) => {
  try {
    const { data } = await axios.post('/tasks', body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const toggleTodoThunk = createAsyncThunk('toggle', async (body, thunkApi) => {
  try {
    const { data } = await axios.put(`/tasks/${body.id}`, { ...body, completed: !body.completed });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});