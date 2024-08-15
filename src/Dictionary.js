import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
   
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "f55d396ae54o7a80b1e5dfc1t9302b80";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    

    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div>
          <section>
            <h2>What word would you like to look up?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                autoFocus={true}
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              ></input>
            </form>
            <p className="hint">
              <strong>suggested words:</strong> sunset, book, beach...
            </p>
          </section>
          <Results results={results} />
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
