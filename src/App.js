import { useState } from "react";

import Display from "./components/Display";
import Searchbar from "./components/Searchbar";

import "./App.css";

const App = () => {
  const [searchValue, setsearchValue] = useState("react");

  const onSearch = (e, value, setInputValue) => {
    e.preventDefault();
    if (value) {
      setsearchValue(value);
      setInputValue("");
    } else {
      alert("I need a value to perform a search!! :(");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub Topic Explorer</h1>
      </header>
      <Searchbar onSearch={onSearch} initSearchValue={"react"} />
      <h2>
        Topic: <span className="current-topic-title">{searchValue}</span>
      </h2>
      <hr />
      <Display searchValue={searchValue} setsearchValue={setsearchValue} />
    </div>
  );
};

export default App;
