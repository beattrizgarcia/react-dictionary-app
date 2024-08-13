import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div>
          <div>
            <h2>{props.results.word}</h2>
            {props.results.meanings[0] && (
              <div>
                <h3> {props.results.meanings[0].partOfSpeech}</h3>
                <strong>Definition:</strong>
                <p> {props.results.meanings[0].definition} </p>
                <strong>Example:</strong>
                <p>{props.results.meanings[0].example}</p>

                {props.results.meanings[0].synonyms && (
                  <div>
                    <strong>Synonyms:</strong>
                    <p>{props.results.meanings[0].synonyms}</p>
                  </div>
                )}
              </div>
            )}
          </div>
          {props.results.meanings[1] && (
            <div>
              <h3> {props.results.meanings[1].partOfSpeech}</h3>
              <strong>Definition:</strong>
              <p> {props.results.meanings[1].definition} </p>
              <strong>Example:</strong>
              <p>{props.results.meanings[1].example}</p>

              {props.results.meanings[1].synonyms && (
                <div>
                  <strong>Synonyms:</strong>
                  <p>{props.results.meanings[1].synonyms}</p>
                </div>
              )}
            </div>
          )}
          {props.results.meanings[2] && (
            <div>
              <h3> {props.results.meanings[2].partOfSpeech}</h3>
              <strong>Definition:</strong>
              <p> {props.results.meanings[2].definition} </p>
              <strong>Example:</strong>
              <p>{props.results.meanings[2].example}</p>
              {props.results.meanings[2].synonyms && (
                <div>
                  <strong>Synonyms:</strong>
                  <p>{props.results.meanings[2].synonyms}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
