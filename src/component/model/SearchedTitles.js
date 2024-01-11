import { useEffect, useState } from "react";

import classes from "./CRUD.module.css";

const SearchedTitles = (props) => {
  const [titlesAvailable, setTitlesAvailable] = useState([]);

  useEffect(() => {
    if (props.fetchedData) {
      const filteredTitles = props.fetchedData.filter((element) =>
        element.includes(props.search.toUpperCase())
      );
      setTitlesAvailable(filteredTitles);
    }
  }, [props.search, props.fetchedData]);

  const clickHandler = (element) => {
    props.selectedItem(element);
  };

  let displayTitles =
    props.search &&
    titlesAvailable.map((element) => (
      <p onClick={() => clickHandler(element)} key={element}>
        {element}
      </p>
    ));

  return titlesAvailable && displayTitles;
};

export default SearchedTitles;
