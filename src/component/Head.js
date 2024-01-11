import mainLogo from "../img/LogoBeeseecher.jpg";
import secondLogo from "../img/LogoBeeseecherDetails.jpg";

import classes from "./Head.module.css";

const Head = (props) => {
  return (
    <header className={classes.container}>
      {/* TRUE = CODE FOR ? MAIN PAGE : DETAILS*/}

      {props.currentPage === "main" ? (
        <img
          className={`${classes.no_grab}`}
          src={mainLogo}
          alt="titleL"
          width="1349px"
          height="430px"
        />
      ) : (
        <img
          className={`${classes.no_grab}`}
          src={secondLogo}
          alt="titleL"
          width="1349px"
          height="160px"
        />
      )}
    </header>
  );
};

export default Head;

/* 

import classes from "./Head.module.css";

const Head = (props) => {
  return (
    <header className={classes.container}>
      <h1>Beeseecher</h1>
      {props.currentPage === "main" && (
        <section>
          <p>
            <span>
              Beeseecheer is a way to raise funds for your floundering creative
              projects.&nbsp;
            </span>
            <span>
              Back in the old days you would pitch your idea to a small group of
              elitist entertainment executives. Now you can raise money from the
              internet from a much larger bunch of elitist nerds!&nbsp;
            </span>
            <span>
              That's progresss.It's also democracy, if we accept we don't really
              know what that means but it sounds good.&nbsp;
            </span>
          </p>
          <h2>
            {"("}SEE CURRENT PROJECTS{")"}
          </h2>
        </section>
      )}
    </header>
  );
};

export default Head;
 */
