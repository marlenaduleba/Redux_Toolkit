// import { createSlice } from "@reduxjs/toolkit";
// import { createReducer } from "@reduxjs/toolkit";
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   setStatusFilter,
// } from "./actions";

//import { statusFilters } from "./constants";

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];

// export const tasksReducer = createReducer(tasksInitialState, (builder) => {
//   builder
//     .addCase(addTask, (state, action) => {
//       state.push(action.payload);
//       console.log(builder);
//     })
//     .addCase(deleteTask, (state, action) => {
//       const index = state.findIndex((task) => task.id === action.payload);
//       state.splice(index, 1);
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       const task = state.find((task) => task.id === action.payload);
//       if (task) {
//         task.completed = !task.completed;
//       }
//     });
// });



// export const filtersReducer = createReducer(filtersInitialState, (builder) => {
//   builder.addCase(setStatusFilter, (state, action) => {
//
//   });
// });
