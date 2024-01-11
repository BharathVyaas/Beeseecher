import { useState } from "react";
import ReactDOM from "react-dom";

import classes from "./CRUD.module.css";
import AddModel from "./AddModel";

const Add = (props) => {
  const [currentPage, setCurrentPage] = useState("0");

  function onClickHandler() {
    setCurrentPage(setCurrentPage("1"));
  }

  let content = false;

  if (currentPage === "0") {
    content = (
      <div className={classes.AddContainer}>
        <button onClick={onClickHandler} className={classes.AddContainer_btn}>
          Create New Project
        </button>
      </div>
    );
  } else {
    content = ReactDOM.createPortal(
      <AddModel setCurrentPage={setCurrentPage} />,
      document.getElementById("model")
    );
  }

  return content;
};

export default Add;
