import imgAha from "../img/Aha.jpg";
import imgToofan from "../img/Toofan.jpg";
import imgLalithaaJewellery from "../img/LalithaaJewellery.jpg";

import classes from "./Foot.module.css";

const width = 250;
const height = 120;

const SPONSORS = [
  { TOOFAN: imgToofan },
  { AHA: imgAha },
  { LalithaaJewellery: imgLalithaaJewellery },
];

const DISPLAY_SPONSORS = [];
let numArray = [];

for (let i = 0; i < 3; i++) {
  let num = Math.floor(Math.random() * SPONSORS.length);

  while (numArray.includes(num)) {
    num = (num + 1) % SPONSORS.length;
  }

  numArray.push(num);
  DISPLAY_SPONSORS.push(SPONSORS[num]);
}

const [var1, var2, var3] = DISPLAY_SPONSORS;

const Foot = () => {
  return (
    <footer className={classes.foot}>
      <p className={classes.foot_paragraph}>SPONSORED ADVERTISEMENT</p>

      {/* 3 IMAGES */}
      <figure className={classes.foot_imgContainer}>
        <img
          className={`${classes.no_grab}`}
          src={Object.values(var1)}
          alt={Object.keys(var1)}
          width={width}
          height={height}
        />
        <img
          className={`${classes.no_grab}`}
          src={Object.values(var2)}
          alt={Object.keys(var2)}
          width={width}
          height={height}
        />
        <img
          className={`${classes.no_grab}`}
          src={Object.values(var3)}
          alt={Object.keys(var3)}
          width={width}
          height={height}
        />
      </figure>
    </footer>
  );
};

export default Foot;
