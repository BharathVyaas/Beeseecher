import { useState } from "react";

import Head from "./component/Head";
import Body from "./component/Body";
import Foot from "./component/Foot";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [itemDetails, setItemDetails] = useState(0); // Id of the card that is being shown.

  const pageHandler = (pageName, itemId) => {
    setCurrentPage(pageName);
    setItemDetails(itemId);
  };

  /* ON SELECTION FROM SEARCH TEXT *Searchhelper.js */

  const getItemId = (selectedItemId) => {
    setCurrentPage("details");
    setItemDetails(selectedItemId);
  };

  /* END ON SELECT */

  return (
    <div id="App" className="App">
      <Head currentPage={currentPage} />
      <div className="App_BF">
        <Body
          getItemId={getItemId}
          currentPage={currentPage}
          pageHandler={pageHandler}
          itemDetails={itemDetails}
          setItemDetails={setItemDetails}
        />
        <Foot />
      </div>
    </div>
  );
}

export default App;
