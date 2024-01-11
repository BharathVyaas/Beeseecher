import classes from "./Item.module.css";

const Items = (props) => {
  const clickHandler = (event) => {
    props.pageHandler("details", event);
  };

  // CHANGED COLOR STYLE INLINE FOR MAP ICON */
  const content = props.items.map((item) => (
    <section
      className={classes.card}
      key={item.id}
      onClick={() => clickHandler(item.id)}
    >
      <figure className={`${classes.cursor_config} ${classes.card_figure}`}>
        <img
          className={`${classes.no_grab}  ${classes.card_figure__img}`}
          src={item.img}
          alt={item.title}
          width="150"
          height="150"
        />
        <figcaption
          className={`${classes.card_figure__figcaption} ${classes.custom_scrollbar}`}
        >
          <p className={`${classes.card_figure__figcaption__title}`}>
            {item.title}
          </p>

          <p className={`${classes.card_figure__figcaption__location}`}>
            {/* Map Icon &#xf3c5; css- content = "\f3c5" fas fa-map-marker-alt; */}
            <i
              className={`fas fa-map-marker-alt`}
              style={{ color: "rgb(149, 142, 142)" }}
            ></i>
            &nbsp;&nbsp;{item.location}
          </p>
        </figcaption>
      </figure>
      <section className={classes.rate}>
        <p>
          {item.funded}%<span>Funded</span>
        </p>
        <p>
          ${item.raised}
          <span>Raised</span>
        </p>
        <p>
          ${item.needed}
          <span>Needed</span>
        </p>
      </section>
    </section>
  ));

  return <>{content}</>;
};

export default Items;
