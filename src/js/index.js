import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import reducer from "./reducer";

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "LOCATION_SEARCH":
//         return {
//           ...state,
//           locationsearch: action.search
//         };
//       default:
//         return state;
//     }
//   };

const myStore = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
