import { Fragment } from "react";
import Todo from "./components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import './bcg.css';

function App() {
  return (
    <Fragment>
      <ToastContainer position="bottom-right" autoClose={3000}/>
      <Todo/>
    </Fragment>
  );
}

export default App;
