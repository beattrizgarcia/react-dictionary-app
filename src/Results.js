import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div>
          <div>
            <h2>{props.results.word}</h2>
            <h3> {props.results.meanings[0].partOfSpeech}</h3>
            <p> {props.results.meanings[0].definition} </p>
          </div>
          {props.results.meanings[1] && (
            <div>
              <h3> {props.results.meanings[1].partOfSpeech}</h3>
              <p> {props.results.meanings[1].definition} </p>
            </div>
          )}
          {props.results.meanings[2] && (
            <div>
              <h3> {props.results.meanings[2].partOfSpeech}</h3>
              <p> {props.results.meanings[2].definition} </p>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
