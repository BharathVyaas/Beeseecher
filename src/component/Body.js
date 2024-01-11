import { useCallback, useEffect, useState } from "react";
import Axios from "axios";

import CRUD from "./model/CRUD";
import Items from "./Body-Container/Items";
import Itemdetails from "./Body-Container/Itemdetails";

import classes from "./Body.module.css";

let items = [];

/* LOAD ? MAIN : DETAILS */

const Body = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);

  // CSSCLASS for nextPage button
  let CSSCLASS = 0;
  if (items.length === props.itemDetails) {
    CSSCLASS = classes.nextPage;
  }

  const fetchItemHandler = useCallback(async () => {
    try {
      const response = await Axios.get("http://localhost:4000/get_items");
      items = [...response.data];
    } catch (err) {
      console.log(err);
      setErr(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchItemHandler();
  }, [fetchItemHandler]);

  function nextPageHandler() {
    // This function handles next page button.
    // props.setItemDetails() needs next page perameters
    if (items.length > props.itemDetails) {
      props.setItemDetails((prevState) => ++prevState);
    }
  }

  let content = isLoading ? "...Loading" : "Something went wrong.";
  if (err) content = "Something went wrong.";
  if (items && props.currentPage === "main") {
    // MAIN PAGE...

    content = (
      <>
        <div className={`${classes.containerMain}`}>
          <Items
            items={items}
            getItemId={props.getItemId}
            currentPage={props.currentPage}
            pageHandler={props.pageHandler}
          />
        </div>
        <CRUD getItemId={props.getItemId} />
      </>
    );
  } else {
    // DETAILS PAGE...

    if (props.itemDetails) {
      content = (
        <div
          className={`${classes.containerDetails} ${classes.custom_scrollbar}`}
        >
          <Itemdetails
            item={items.find((item) => item.id === props.itemDetails)}
          />
          <div className={classes.btnContainer}>
            <button onClick={() => props.pageHandler("main")}>Home</button>
            <button className={CSSCLASS} onClick={nextPageHandler}>
              Next Project
            </button>
          </div>
        </div>
      );
    }
  }

  return <main className={classes.main}>{content}</main>;
};

export default Body;
