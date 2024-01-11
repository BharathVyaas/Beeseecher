import { Fragment } from "react";

import classes from "./Item.module.css";

const Itemdetails = (props) => {
  const { item } = props; //Code from Items.js

  // Man Icon	&#xf183 css- content = "\f183" fas fa-male;

  return (
    <Fragment>
      <p className={classes.title}>
        <span>{item?.fundText}</span>
      </p>
      <div className={classes.imgContainer}>
        <img
          className={`${classes.no_grab} ${classes.image}`}
          src={item?.img}
          alt={item?.title}
          width="150"
          height="150"
        />
        <p className={classes.discription}>{item?.discription}</p>
      </div>
    </Fragment>
  );
};

export default Itemdetails;
