---
title: "Easy Redux Toolkit Tutorial for First-Time React Developers"
seoTitle: "Easy Redux Toolkit Tutorial for First-Time React Developers"
seoDescription: "Learn how Redux Toolkit simplifies state management in React applications. This beginner-friendly guide covers setup, creating slices, connecting components"
datePublished: Sat Jul 20 2024 15:37:23 GMT+0000 (Coordinated Universal Time)
cuid: clyualsd0000009jv9qx578u9
slug: easy-redux-toolkit-tutorial-for-first-time-react-developers
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1721488083145/e157f34d-1959-40ac-9be3-5bd29abbd617.jpeg
tags: react-router, frontend, developer, reactjs, redux, frontend-development, redux-toolkit, reacthooks

---

Hey Coders👩‍💻👨‍💻!" In this blog post, we're going to explore how Redux Toolkit can simplify state management in your React applications." to "In this blog post, we're going to explore how Redux Toolkit can simplify state management in your React applications." for clarity and conciseness.

### **🎇Introduction:**

In the world of React development, managing state can often feel chaotic. Enter Redux Toolkit, your reliable helper for organized and scalable state management. Think of it as an assistant who not only fetches your data but also keeps everything tidy, handling your requests smoothly.

![Celebrity gif. Leaves whip around Adele as she sings charismatically. Text, "Hello from the other side."](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJnMTFldG8wY2podnU4czlyZWN6cm0xcW1ydml6NGVyOGd1MDh1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sg4DwEJrCpGIU/giphy.gif align="center")

### Why Use Redux Toolkit?

Imagine you have a React app with lots of components that need to share and update the same data. Managing all these states can get messy. Redux Toolkit comes to the rescue by providing a set of tools and best practices to streamline your Redux code.

![Season 5 Omg GIF by Friends](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmVmZGEycGoyNm96MGRvYWQzMWRibnQ4MWk3M3A3NHBwaHp3bXFxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XF3lU8cWrv4JcUeEmM/giphy.gif align="center")

### Setting Up Redux Toolkit

First things first, let's look at how Redux Toolkit is set up in a React project:

### Redux Toolkit Documentation

You can access the official documentation for Redux Toolkit to learn more about its features, API, and usage patterns:

[Documentation Link: Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)

**Folder Structure**

Here’s the updated folder structure:

![Season 3 Dancing GIF by Friends](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHRtN2FjazZnbzd1MXZpeTJ6NGVyMjFzMmI5ZjI5a2lvNW45cGh5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VgNN9GNF1jtjHtW4PA/giphy.gif align="center")

```css
src/
├── components/
├── pages/
│   ├── counter/
│   │   ├── counter.slice.js
│   ├── table/
│   │   ├── table.slice.js
│   │   ├── table.css
│   │   ├── Table.js
├── store/
│   ├── store.js
├── router/
│   ├── router.js
├── App.js
├── App.css
```

* **store/**: Contains your Redux store configuration.
    
* **pages/**: Contains React components for different pages and slices.
    
* **router/**: Handles routing in your React application.
    
* **components/**: Reusable UI components.
    
    **Creating the Store**
    
    Your Redux store is created using `configureStore` from Redux Toolkit in `store.js`. It combines multiple slices (reducers) into a single store:
    
    * ```javascript
        // store.js
        import { configureStore } from "@reduxjs/toolkit";
        import counterReducer from "../pages/counter/counter.slice";
        import tableReducer from "../pages/table/table.slice";
        
        const store = configureStore({
          reducer: {
            counter: counterReducer,
            tableData: tableReducer,
          },
        });
        
        export default store;
        ```
        
    * ![s reactions share GIF](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazFwa2JqaXoxcG9qb3NvYjRuMWdocjRpeTJ1NzBvNzUxb3psczRqdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Uh1ZPq7mA7xa8/giphy.gif align="center")
        
    * Here's a breakdown of what's happening:
        
        1. **Importing Dependencies:**
            
            ```javascript
            import { configureStore } from "@reduxjs/toolkit";
            import counterReducer from "../pages/counter/counter.slice";
            import tableReducer from "../pages/table/table.slice";
            ```
            
            * We import `configureStore` from `@reduxjs/toolkit`, which is a function provided by Redux Toolkit to create a Redux store with simplified setup.
                
            * We import `counterReducer` and `tableReducer` from their respective locations (`counter.slice.js` and `table.slice.js`). These reducers define how specific parts of the application state should be updated in response to actions.
                
        2. **Creating the Redux Store:**
            
            ```javascript
            const store = configureStore({
              reducer: {
                counter: counterReducer,
                tableData: tableReducer,
              },
            });
            ```
            
            * We use `configureStore()` to create a Redux store. This function accepts an object with a `reducer` property.
                
            * Inside `reducer`, we define key-value pairs where:
                
                * `counter` is the slice of state managed by `counterReducer`.
                    
                * `tableData` is the slice of state managed by `tableReducer`.
                    
            * Each reducer (`counterReducer` and `tableReducer`) specifies how the corresponding part of the state should be updated when actions are dispatched.
                
        3. **Exporting the Store:**
            
            ```javascript
            export default store;
            ```
            
            * Finally, we export the configured Redux store (`store`) so that it can be imported and used in other parts of the application, such as components that need to access or update the application state.
                
        
        ### **Why** `configureStore` is used:
        
        * `configureStore` is used here because it simplifies the setup of a Redux store by automatically configuring Redux Toolkit's recommended middleware, including `redux-thunk` for async logic. It also enables Redux DevTools Extension by default, providing a better development experience.
            
        * By using `configureStore`, we avoid the boilerplate code that would otherwise be required to set up middleware and other store enhancers manually when using plain Redux.
            
        * **Defining Slices (Reducers)**
            
            Slices define how your state can be updated. They include actions and reducers, making it easier to manage immutable state updates:
            
            * ```javascript
                // counter.slice.js
                import { createSlice } from "@reduxjs/toolkit";
                
                const counterSlice = createSlice({
                  name: "counter",
                  initialState: {
                    count: 0,
                    setHidden: false,
                  },
                  reducers: {
                    handleIncrement: (state) => {
                      state.count++;
                    },
                    handleDecrement: (state) => {
                      state.count--;
                    },
                    handleReset: (state) => {
                      state.count = 0;
                    },
                    handleToggle: (state) => {
                      state.setHidden = !state.setHidden;
                    },
                  },
                });
                
                export const {
                  handleIncrement,
                  handleDecrement,
                  handleToggle,
                  handleReset,
                } = counterSlice.actions;
                export default counterSlice.reducer;
                ```
                
                **Importing Dependencies:**
                
                ```javascript
                import { createSlice } from "@reduxjs/toolkit";
                ```
                
                * We import `createSlice` from `@reduxjs/toolkit`, a function that helps to create a Redux slice. A slice in Redux is a piece of state with its own reducers and actions.
                    
                * **Creating the Slice:**
                    
                    ```javascript
                    const counterSlice = createSlice({
                      name: "counter",
                      initialState: {
                        count: 0,
                        setHidden: false,
                      },
                      reducers: {
                        handleIncrement: (state) => {
                          state.count++;
                        },
                        handleDecrement: (state) => {
                          state.count--;
                        },
                        handleReset: (state) => {
                          state.count = 0;
                        },
                        handleToggle: (state) => {
                          state.setHidden = !state.setHidden;
                        },
                      },
                    });
                    ```
                    
                    * `createSlice` is used to create a slice named `"counter"` with initial state defined in `initialState`.
                        
                    * Inside `reducers`, we define functions (`handleIncrement`, `handleDecrement`, `handleReset`, `handleToggle`) that describe how the state should be updated in response to specific actions.
                        
                    * Each reducer function receives the current `state` as a parameter and can modify it directly because `createSlice` uses Immer internally to allow mutable updates.
                        
                * **Exporting Actions and Reducer:**
                    
                    ```javascript
                    export const {
                      handleIncrement,
                      handleDecrement,
                      handleToggle,
                      handleReset,
                    } = counterSlice.actions;
                    export default counterSlice.reducer;
                    ```
                    
                    * `counterSlice.actions` contains the action creators (`handleIncrement`, `handleDecrement`, `handleToggle`, `handleReset`) that are automatically generated by `createSlice`.
                        
                    * `counterSlice.reducer` exports the reducer function that manages how the state changes in response to dispatched actions.
                        
                        **Connecting Components**
                        
                        Use `useSelector` to read from the Redux store and `useDispatch` to dispatch actions. Here’s an example from `Counter` component:
                        
                
                ```javascript
                import React from "react";
                import { useDispatch, useSelector } from "react-redux";
                import {
                  handleIncrement,
                  handleDecrement,
                  handleReset,
                  handleToggle,
                } from "./counter.slice";
                
                const Counter = () => {
                  const data = useSelector((state) => state.counter);
                  const dispatch = useDispatch();
                
                  return (
                    <div>
                      {data.setHidden && (
                        <>
                          <button onClick={() => dispatch(handleIncrement())}>+</button>
                          <button onClick={() => dispatch(handleDecrement())}>-</button>
                          <button onClick={() => dispatch(handleReset())}>reset</button>
                        </>
                      )}
                      <button onClick={() => dispatch(handleToggle())}>toggle</button>
                      <div>{data.count}</div>
                    </div>
                  );
                };
                
                export default Counter;
                ```
                
                ![Goodnight GIF](https://media1.giphy.com/media/Raysj8tkfF2tYO5YiA/200.gif?cid=ecf05e47cakzu8szlxfs2ctspdbb66kw7suopquif9225dhz&ep=v1_gifs_search&rid=200.gif&ct=g align="center")
                
                #### Explanation:
                
                1. **Importing Redux Hooks:**
                    
                    ```javascript
                    import { useDispatch, useSelector } from "react-redux";
                    ```
                    
                    * We import `useSelector` and `useDispatch` hooks from `react-redux`. These hooks are used to access the Redux store state and dispatch actions, respectively.
                        
                2. **Using** `useSelector`:
                    
                    ```javascript
                    const data = useSelector((state) => state.counter);
                    ```
                    
                    * `useSelector` is called with a selector function `(state) => state.counter`. It selects the `counter` slice from the Redux store state (`state.counter`).
                        
                3. **Using** `useDispatch`:
                    
                    ```javascript
                    const dispatch = useDispatch();
                    ```
                    
                    * `useDispatch` returns a reference to the `dispatch` function from the Redux store. This function is used to dispatch actions to update the Redux state.
                        
                4. **Rendering the Component:**
                    
                    ```javascript
                    return (
                      <div>
                        {data.setHidden && (
                          <>
                            <button onClick={() => dispatch(handleIncrement())}>+</button>
                            <button onClick={() => dispatch(handleDecrement())}>-</button>
                            <button onClick={() => dispatch(handleReset())}>reset</button>
                          </>
                        )}
                        <button onClick={() => dispatch(handleToggle())}>toggle</button>
                        <div>{data.count}</div>
                      </div>
                    );
                    ```
                    
                    * ![happy drama GIF by Alia Bhatt](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmY3YW5ieDB5a2trejd0ZzdnbWl0MXpnejRrcm9lMTV0YnprOGpieiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Wq44lgvXWgpuyKxUjD/200.gif align="center")
                        
                    * The component renders buttons and displays the `count` from the Redux state.
                        
                    * When `data.setHidden` is `true`, it renders buttons for incrementing (`+`), decrementing (`-`), and resetting (`reset`) the count. Each button click dispatches the corresponding action (`handleIncrement`, `handleDecrement`, `handleReset`).
                        
                    * The `toggle` button toggles `data.setHidden` state when clicked, dispatching the `handleToggle` action.
                        
                
                ### Jokes
                
                Now, let’s add some fun to the mix! Remember, learning should be enjoyable too. Imagine your Redux state as a pizza that you can add toppings to (actions) and share slices of (reducers). Don’t worry, we’ll avoid over-topping with too much state!
                
            * ![sick mr beans GIF](https://media1.giphy.com/media/8Ik1Eoxt7jnd6/200.gif?cid=ecf05e47cakzu8szlxfs2ctspdbb66kw7suopquif9225dhz&ep=v1_gifs_search&rid=200.gif&ct=g align="center")
                
            
            **Let's dive into how we handle API calls and filter data using Redux Toolkit in** `table.slice.js`.
            
        
        ```javascript
        import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
        import axios from "axios";
        import { current } from "@reduxjs/toolkit";
        export const fetchTableData = createAsyncThunk(
          "table-data/getuserList",
          async () => {
            const response = await axios("https://reqres.in/api/users?page=2");
            return response.data;
          }
        );
        
        const TableSlice = createSlice({
          name: "table-data",
          initialState: {
            userTableData: [],
            filterUserData: [],
            loading: false,
            error: "",
          },
        
          extraReducers: (builder) => {
            builder
              .addCase(fetchTableData.pending, (state, action) => {
                state.loading = true;
              })
              .addCase(fetchTableData.fulfilled, (state, action) => {
                state.userTableData = [...action.payload.data];
                state.filterUserData = [...action.payload.data];
                state.loading = false;
                state.error = "";
              })
              .addCase(fetchTableData.rejected, (state) => {
                state.error = "something went wrong";
                state.loading = false;
              });
          },
          //in memory
        
          reducers: {
            deleteUserData: (state, action) => {
              // console.log(action,"hello state")
              let data = current(state).filterUserData;
              let filterData = data.filter((user) => user.id !== action.payload);
              state.filterUserData = [...filterData];
            },
        
            onFilterUserData: (state, action) => {
              let data = current(state).filterUserData;
              let searchText = action.payload;
              console.log(searchText);
        
              if (searchText) {
                const filtered = data?.filter((user) => {
                  return (
                    user.id.toString().includes(searchText) ||
                    user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                    user.last_name.toLowerCase().includes(searchText.toLowerCase())
                  );
                });
                state.filterUserData = [...filtered];
              } else {
                state.filterUserData = [...state.userTableData];
              }
            },
        
            updateEmloyeer: (state, action) => {
              console.log(current(state), action);
              const { id, first_name, last_name } = action.payload;
              const index = state.filterUserData.findIndex((emp) => emp.id === id);
              if (index !== -1) {
                state.filterUserData[index].first_name = first_name;
                state.filterUserData[index].last_name = last_name;
              }
            },
          },
        });
        
        export const {
          editUserData,
          deleteUserData,
          onFilterUserData,
          updateEmloyeer,
        } = TableSlice.actions;
        
        export default TableSlice.reducer;
        ```
        
        #### Code Explanation:
        
        1. **Imports:**
            
            ```javascript
            import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
            import axios from "axios";
            import { current } from "@reduxjs/toolkit";
            ```
            
            * Imports `createAsyncThunk` and `createSlice` from `@reduxjs/toolkit` for setting up async actions and creating slices.
                
            * Imports `axios` for making HTTP requests.
                
            * `current` is imported for accessing the current state within reducers.
                
        2. **Async Action (**`fetchTableData`):
            
            ```javascript
            export const fetchTableData = createAsyncThunk(
              "table-data/getuserList",
              async () => {
                const response = await axios("https://reqres.in/api/users?page=2");
                return response.data;
              }
            );
            ```
            
            * `createAsyncThunk` generates an async action creator named `fetchTableData`.
                
            * It makes an API call to fetch user data from [`https://reqres.in/api/users?page=2`](https://reqres.in/api/users?page=2).
                
            * The fetched data ([`response.data`](http://response.data)) is returned as the payload.
                
        3. **Slice (**`TableSlice`):
            
            ```javascript
            javascriptCopy codeconst TableSlice = createSlice({
              name: "table-data",
              initialState: {
                userTableData: [],
                filterUserData: [],
                loading: false,
                error: "",
              },
              extraReducers: (builder) => {
                builder
                  .addCase(fetchTableData.pending, (state, action) => {
                    state.loading = true;
                  })
                  .addCase(fetchTableData.fulfilled, (state, action) => {
                    state.userTableData = [...action.payload.data];
                    state.filterUserData = [...action.payload.data];
                    state.loading = false;
                    state.error = "";
                  })
                  .addCase(fetchTableData.rejected, (state) => {
                    state.error = "something went wrong";
                    state.loading = false;
                  });
              },
              reducers: {
                deleteUserData: (state, action) => {
                  let data = current(state).filterUserData;
                  let filterData = data.filter((user) => user.id !== action.payload);
                  state.filterUserData = [...filterData];
                },
                onFilterUserData: (state, action) => {
                  let data = current(state).filterUserData;
                  let searchText = action.payload;
                  if (searchText) {
                    const filtered = data?.filter((user) => {
                      return (
                        user.id.toString().includes(searchText) ||
                        user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                        user.last_name.toLowerCase().includes(searchText.toLowerCase())
                      );
                    });
                    state.filterUserData = [...filtered];
                  } else {
                    state.filterUserData = [...state.userTableData];
                  }
                },
                updateEmloyeer: (state, action) => {
                  const { id, first_name, last_name } = action.payload;
                  const index = state.filterUserData.findIndex((emp) => emp.id === id);
                  if (index !== -1) {
                    state.filterUserData[index].first_name = first_name;
                    state.filterUserData[index].last_name = last_name;
                  }
                },
              },
            });
            ```
            
            * `createSlice` creates a Redux slice named `"table-data"` with initial state containing `userTableData`, `filterUserData`, `loading`, and `error`.
                
            * `extraReducers` handles actions dispatched by `fetchTableData`:
                
                * `pending`: Sets `loading` to `true`.
                    
                * `fulfilled`: Updates `userTableData` and `filterUserData` with fetched data, resets `loading` and clears `error`.
                    
                * `rejected`: Sets `error` message and resets `loading`.
                    
            * `reducers` contains additional synchronous actions:
                
                * `deleteUserData`: Filters out a user based on `action.payload`.
                    
                * `onFilterUserData`: Filters `filterUserData` based on `action.payload`.
                    
                * `updateEmloyeer`: Updates user data based on `action.payload`.
                    
            * **Export Actions and Reducer:**
                
                ```javascript
                export const {
                  deleteUserData,
                  onFilterUserData,
                  updateEmloyeer,
                } = TableSlice.actions;
                export default TableSlice.reducer;
                ```
                
                * Exports action creators (`deleteUserData`, `onFilterUserData`, `updateEmloyeer`) and the reducer function from `TableSlice`.
                    
                * ![Alia Bhatt GIF by Gangubai Kathiawadi](https://media0.giphy.com/media/zTamHkDNrrV7Mog71z/200.gif?cid=790b7611bf7anbx0ykkkz7tg7gmit1zgz4kroe15tbzk8jbz&ep=v1_gifs_search&rid=200.gif&ct=g align="center")
                    
* ### `Table.js`
    
    Now, let's explain the `Table` component which uses Redux for state management and renders data fetched from the API:
    
* ```javascript
    import React, { useEffect, useState } from "react";
    import "./table.css";
    import { useDispatch, useSelector } from "react-redux";
    import {
      deleteUserData,
      fetchTableData,
      onFilterUserData,
      updateEmloyeer,
    } from "./table.slice";
    import { useNavigate } from "react-router-dom";
    const Table = () => {
      const tableDetails = useSelector((state) => state.tableData);
      const [searchInput, setSearchInput] = useState("");
      const dispatch = useDispatch();
    
      React.useEffect(() => {
        dispatch(fetchTableData());
      }, []);
    
      useEffect(() => {
        dispatch(onFilterUserData(searchInput));
      }, [searchInput]);
      const navigate = useNavigate();
    
      const handleRowClick = (uid) => {
        navigate(`/table/${uid}`);
      };
    
      const handleEdit = (editId, newFirstName, newLastName) => {
        console.log(editId);
        const fullName = prompt(
          "Enter new full name (First Last):",
          `${newFirstName} ${newLastName}`
        );
    
        if (fullName !== null) {
          const [newFirstName, newLastName] = fullName.split(" ");
          dispatch(
            updateEmloyeer({
              id: editId,
              first_name: newFirstName,
              last_name: newLastName,
            })
          );
        }
      };
    
      const handleDelete = (userId) => {
        console.log("Deleting user with ID:", userId);
        dispatch(deleteUserData(userId));
      };
    
      return (
        <div className="table-outside-container">
          {tableDetails.loading && <h1>Loding....</h1>}
          {tableDetails.error && <hi>{tableDetails.error}</hi>}
          <div class="wrapper">
            <div class="search-input">
              <input
                type="text"
                placeholder="Type to search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </div>
          </div>
          <section className="table-inside-conatiner">
            {tableDetails.filterUserData.length > 0 && (
              <table style={{ width: "90%" }}>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Full Details</th>
                  <th>Action</th>
                </tr>
                <tbody>
                  {tableDetails?.filterUserData.map((userData, index) => (
                    <tr key={index}>
                      <td>{userData.id}</td>
                      <td>{userData?.first_name}</td>
                      <td>{userData?.last_name}</td>
                      <td onClick={() => handleRowClick(userData.id)}>Detail</td>
                      <td className="button-conatiner">
                        <button
                          className="edit"
                          onClick={() =>
                            handleEdit(
                              userData.id,
                              userData.first_name,
                              userData.last_name
                            )
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="delete"
                          onClick={() => handleDelete(userData.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
    
            {tableDetails?.filterUserData === 0 && (
              <p>No matching records found.</p>
            )}
          </section>
        </div>
      );
    };
    
    export default Table;
    ```
    
    #### Code Explanation:
    
    1. **Imports and Setup:**
        
        ```javascript
        javascriptCopy codeimport React, { useEffect, useState } from "react";
        import "./table.css";
        import { useDispatch, useSelector } from "react-redux";
        import {
          deleteUserData,
          fetchTableData,
          onFilterUserData,
          updateEmloyeer,
        } from "./table.slice";
        import { useNavigate } from "react-router-dom";
        ```
        
        * Imports necessary dependencies including React hooks (`useEffect`, `useState`), Redux hooks (`useDispatch`, `useSelector`), and actions from `table.slice.js`.
            
        * Imports `useNavigate` for programmatic navigation.
            
    2. **Component (**`Table`):
        
        ```javascript
        javascriptCopy codeconst Table = () => {
          const tableDetails = useSelector((state) => state.tableData);
          const [searchInput, setSearchInput] = useState("");
          const dispatch = useDispatch();
        
          React.useEffect(() => {
            dispatch(fetchTableData());
          }, []);
        
          useEffect(() => {
            dispatch(onFilterUserData(searchInput));
          }, [searchInput]);
        
          const navigate = useNavigate();
        
          const handleRowClick = (uid) => {
            navigate(`/table/${uid}`);
          };
        
          const handleEdit = (editId, newFirstName, newLastName) => {
            const fullName = prompt(
              "Enter new full name (First Last):",
              `${newFirstName} ${newLastName}`
            );
        
            if (fullName !== null) {
              const [newFirstName, newLastName] = fullName.split(" ");
              dispatch(
                updateEmloyeer({
                  id: editId,
                  first_name: newFirstName,
                  last_name: newLastName,
                })
              );
            }
          };
        
          const handleDelete = (userId) => {
            dispatch(deleteUserData(userId));
          };
        
          return (
            <div className="table-outside-container">
              {tableDetails.loading && <h1>Loading....</h1>}
              {tableDetails.error && <h1>{tableDetails.error}</h1>}
              <div className="wrapper">
                <div className="search-input">
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </div>
                </div>
              </div>
              <section className="table-inside-container">
                {tableDetails.filterUserData.length > 0 && (
                  <table style={{ width: "90%" }}>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Full Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableDetails.filterUserData.map((userData, index) => (
                        <tr key={index}>
                          <td>{userData.id}</td>
                          <td>{userData.first_name}</td>
                          <td>{userData.last_name}</td>
                          <td onClick={() => handleRowClick(userData.id)}>Detail</td>
                          <td className="button-container">
                            <button
                              className="edit"
                              onClick={() =>
                                handleEdit(
                                  userData.id,
                                  userData.first_name,
                                  userData.last_name
                                )
                              }
                            >
                              Edit
                            </button>
                            <button
                              className="delete"
                              onClick={() => handleDelete(userData.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
        
                {tableDetails.filterUserData.length === 0 && (
                  <p>No matching records found.</p>
                )}
              </section>
            </div>
          );
        };
        ```
        
        * ![sarcastic bollywood GIF by Alia Bhatt](https://media2.giphy.com/media/MAuFh5mo4aPooHjIO4/200.gif?cid=790b7611bf7anbx0ykkkz7tg7gmit1zgz4kroe15tbzk8jbz&ep=v1_gifs_search&rid=200.gif&ct=g align="center")
            
        * `Table` component renders a table with user data fetched from Redux state (`tableDetails.filterUserData`).
            
        * Uses `useState` to manage `searchInput` for filtering users based on search input.
            
        * Uses `useDispatch` to dispatch actions (`fetchTableData`, `onFilterUserData`, `updateEmloyeer`, `deleteUserData`).
            
        * Uses `useEffect` to fetch initial data (`fetchTableData`) when the component mounts and to update filtered data (`onFilterUserData`) when `searchInput` changes.
            
        * Defines functions `handleRowClick` for navigating to detailed user page, `handleEdit` for editing user data, and `handleDelete` for deleting a user.
            
        * Renders table headers (`Id`, `First Name`, `Last Name`, `Full Details`, `Action`) and rows dynamically from `tableDetails.filterUserData`.
            
        * Handles loading state (`tableDetails.loading`) and error state (`tableDetails.error`) for better user experience.
            
        
    
    ### **Conclusion:**
    
    Armed with Redux Toolkit, your React apps gain robustness and maintainability. It streamlines complex state management into a delightful experience, leaving you more time to browse cat memes on a lazy Sunday—because who doesn't love a good laugh between code commits?
    
    ### **🧿Final Words:**
    
    ![Heart Thank You GIF by Alia Bhatt](https://media4.giphy.com/media/lTGnw25SaZwwHETFe2/200.gif?cid=790b7611bf7anbx0ykkkz7tg7gmit1zgz4kroe15tbzk8jbz&ep=v1_gifs_search&rid=200.gif&ct=g align="center")
    
    Whether you're diving into Redux Toolkit for the first time or honing your skills, may your state always be manageable, your components reusable, and your Redux journeys as smooth as a well-oiled machine. **<mark>Happy coding</mark>**, and remember to share your Redux Toolkit tales in the comments below—let's keep the laughter and learning going! 🚀🎉