import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending](state, action) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [toggleCompleted.pending](state) {
      state.isLoading = true;
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   addTask: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           text,
  //           id: nanoid(),
  //           completed: false,
  //         }
  //       }
  //     }

  //   },
  //   deleteTask(state, action) {
  //     const index = state.findIndex(task => task.id === action.payload);
  //     state.splice(index, 1);
  //   },
  //   toggleCompleted(state, action) {
  //     const task = state.find((task) => task.id === action.payload);
  //     if (task) {
  //       task.completed = !task.completed;
  //     }
  //   },
  // }
});

//export const {addTask, deleteTask, toggleCompleted, fetchingInProgress, fetchingSuccess, fetchingError} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
