// documentation: https://dictionaryapi.dev/

import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  function displayWord(response) {
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(API_URL).then(displayWord);
  }

  function searchKeyword(event) {
    let updateValue = event.target.value;
    setKeyword(updateValue);
    console.log(updateValue);
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
      <Definition definition={definition} />
    </div>
  );
}
