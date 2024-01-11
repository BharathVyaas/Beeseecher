import { useCallback, useEffect, useState } from "react";
import Axios from "axios";

import SearchedTitles from "./SearchedTitles";

import classes from "./CRUD.module.css";

const Search = (props) => {
  /* FETCH DATA HANDLER */

  const [fetchedData, setFetchData] = useState(false);

  const fetchDataHandler = useCallback(async () => {
    try {
      const response = await Axios.get("http://localhost:4000/get_CRUD/titles");
      setFetchData([...response.data].map((element) => element.title));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  /* END FETCH DATA */

  /* CONTROLLED COMPONENT */

  const [search, setSearch] = useState("");

  function keyUpHandler(event) {
    setSearch(event.target.value);
  }

  /* END CONTROLLED COMPONENT */

  /* ON SELECTION FROM SEARCH TEXT *Searchhelper.js */

  const selectedItem = (itemName) => {
    props.getItemId(fetchedData.indexOf(itemName));
  };

  /* END ON SELECT */

  return (
    <div className={classes.SearchContainer}>
      <input
        type="text"
        value={search}
        onChange={keyUpHandler}
        placeholder="Searchbyname..."
        className={`${classes.SearchContainer_input}`}
      />
      <div
        className={`${classes.SearchContainer_serchedTitles} ${classes.custom_scrollbar}`}
      >
        <SearchedTitles
          search={search}
          fetchedData={fetchedData}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
};

export default Search;
