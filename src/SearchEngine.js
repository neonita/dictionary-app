import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");

  function displayWord(response) {
    let definition = response.data[0];
    console.log(definition);
  }

  function search(event) {
    event.preventDefault();

    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(API_URL).then(displayWord);
  }

  function searchKeyword(event) {
    let updateValue = event.target.value;
    console.log(updateValue);
    setKeyword(updateValue);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a definition..."
          onChange={searchKeyword}
        />
      </form>
    </div>
  );
}
