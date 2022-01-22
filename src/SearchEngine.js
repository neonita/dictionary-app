import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
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
