// documentation: https://dictionaryapi.dev/

import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";

import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);

  function displayWord(response) {
    setDefinition(response.data[0]);
  }

  function displayImages(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    // dictionary
    event.preventDefault();
    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(API_URL).then(displayWord);

    // images
    const PEXELS_API_KEY = `563492ad6f9170000100000136503a7aeb214c5a9a0b7d0869c85fdd`;
    const PEXELS_API_URL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    // authentication
    let headers = { Authorization: `Bearer ${PEXELS_API_KEY}` };
    axios
      .get(PEXELS_API_URL, {
        headers: headers,
      })
      .then(displayImages);
  }

  function searchKeyword(event) {
    let updateValue = event.target.value;
    setKeyword(updateValue);
    console.log(updateValue);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <i className="ph-magnifying-glass"></i>
        <input
          type="search"
          placeholder="Search for a definition..."
          onChange={searchKeyword}
        />
      </form>
      <Definition definition={definition} />
      <Photos photos={photos} />
    </div>
  );
}
