import ReactDOM from "react-dom";
import Axios from "axios";

import classes from "./AddModel.module.css";
import { useEffect, useReducer, useState } from "react";

/* 
  ADD MODEL
*/

const AddModel = (props) => {
  /* CODE TO STOP BACKGROUND MOTION */

  useEffect(() => {
    const ele = document.getElementsByTagName("body")[0];
    ele.style.overflow = "hidden";
    return () => {
      ele.style.overflow = "auto";
    };
  }, []);

  /* END BACKGROUND MOTION */

  async function submitHandler(event) {
    event.preventDefault();
    window.location.reload();

    try {
      const [title, location, needed, description] = [...text];

      const response = await Axios.post("http://localhost:4000/post_CRUD/Add", {
        imgUrl: imgUrl,
        title: title.toUpperCase(),
        location: location.toUpperCase(),
        needed: needed.toUpperCase(),
        description: description,
      })
        .then((data) => cancelAddModel())
        .catch((err) => console.log("Error POST request."));
    } catch (err) {
      console.log(err);
    }
  }

  function cancelAddModel() {
    props.setCurrentPage("0");
  }

  /* CONTROLLED COMPONENT */

  const reducer = (prevState, action) => {
    if (action.type === "TITLE") {
      const arr = [...prevState];
      arr[0] = action.value;
      return arr;
    } else if (action.type === "LOCATION") {
      const arr = [...prevState];
      arr[1] = action.value;
      return arr;
    } else if (action.type === "NEEDED") {
      const arr = [...prevState];
      arr[2] = action.value;
      return arr;
    } else if (action.type === "DESCRIPTION") {
      const arr = [...prevState];
      arr[3] = action.value;
      return arr;
    }

    return prevState;
  };

  const [text, dispatch] = useReducer(reducer, ["", "", "", ""]);

  function dispatchHelper(event) {
    const value = event.target.value;
    const type = event.target.id;
    dispatch({ type: type, value: value });
  }
  /* IMAGE HANDLER */

  const [imgUrl, setImgUrl] = useState("");
  const [isImg, setIsImg] = useState(false);

  function imageChangeHandler(event) {
    setImgUrl(event.target.value);
  }

  function isValidUrl(event) {
    try {
      if (new URL(event)) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async function isValidImg(event) {
    try {
      const response = await Axios.get(event);
      let contentType = ["image/jpg", "image/png", "image/jpeg"];
      contentType = contentType.some(
        (element) => response.headers["content-type"] === element
      );
      if (contentType) {
        setIsImg(true);
      }
    } catch (err) {
      return false;
    }
  }

  function imageBlurHandler(event) {
    isValidUrl(event.target.value) && isValidImg(event.target.value);
  }

  /* END IMAGE HANDLER */

  /* END CONTROLLED COMPONENT */

  return (
    <>
      {ReactDOM.createPortal(
        <div onClick={cancelAddModel} className={classes.backGround}></div>,
        document.getElementById("backGround")
      )}
      <section className={classes.AddModelContainer}>
        <div className={classes.AddModelContainer_div}>
          <div className={classes.header}>
            <span></span>
            <h1 className={classes.header__title}>ADD NEW PROJECT</h1>
            <button className={classes.header__btn} onClick={cancelAddModel}>
              x
            </button>
          </div>
          <form
            method="POST"
            onSubmit={submitHandler}
            className={`${classes.form}`}
          >
            <aside className={classes.inputContainer}>
              <aside className={`${classes.aside}`}>
                <label htmlFor="TITLE" className={`${classes.label_title}`}>
                  Title
                </label>
                <input
                  id="TITLE"
                  name="title"
                  type="text"
                  value={text[0]}
                  onChange={dispatchHelper}
                  placeholder="EXAMPLE: MYMOVIE"
                  className={`${classes.form__title} ${classes.input__one}`}
                />
              </aside>
              <aside className={`${classes.aside}`}>
                <label
                  htmlFor="LOCATION"
                  className={`${classes.label__location}`}
                >
                  Location
                </label>
                <input
                  type="text"
                  id="LOCATION"
                  value={text[1]}
                  name="location"
                  onChange={dispatchHelper}
                  className={`${classes.form__location} ${classes.input__one}`}
                  placeholder="EXAMPLE: LOS SANTOS, SA"
                />
              </aside>
              <aside className={`${classes.aside}`}>
                <label htmlFor="NEEDED" className={`${classes.lable__needed}`}>
                  Needed
                </label>
                <input
                  id="NEEDED"
                  type="number"
                  name="needed"
                  value={text[2]}
                  onChange={dispatchHelper}
                  placeholder="Enter AMOUNT"
                  className={`${classes.form__needed} ${classes.input__one}`}
                />
              </aside>
              <aside className={`${classes.aside__description}`}>
                <label
                  htmlFor="DESCRIPTION"
                  className={`${classes.lable__description}`}
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  value={text[3]}
                  id="DESCRIPTION"
                  onChange={dispatchHelper}
                  placeholder="Enter Description"
                  className={`${classes.form__description}`}
                />
              </aside>
            </aside>
            <button type="submit" className={classes.form_btn}>
              Add Project
            </button>
            <figure className={classes.imgConatiner}>
              {(isImg && (
                <img
                  className={classes.imgTrue}
                  alt="Error loading image."
                  src={imgUrl}
                  width="200"
                />
              )) || (
                <input
                  type="text"
                  name="image"
                  value={imgUrl}
                  placeholder="http://example.com/image"
                  onBlur={imageBlurHandler}
                  onDrop={imageChangeHandler}
                  className={classes.imgFalse}
                  onChange={imageChangeHandler}
                />
              )}
            </figure>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddModel;
