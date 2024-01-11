import Add from "./Add";
import Search from "./Search";

import classes from "./CRUD.module.css";

const CRUD = (props) => {
  return (
    <div className={classes.CRUDContainer}>
      <Add />
      <Search getItemId={props.getItemId} />
    </div>
  );
};

export default CRUD;
