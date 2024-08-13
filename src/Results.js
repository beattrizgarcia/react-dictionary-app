import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div>
          <h2>{props.results.word}</h2>
          {props.results.meanings &&
            props.results.meanings.map((el) => (
              <div>
                <h3> {el.partOfSpeech}</h3>
                <strong>Definition:</strong>
                <p> {el.definition} </p>
                {el.example && (
                  <div>
                    <strong>Example:</strong>
                    <p>{el.example}</p>
                  </div>
                )}

                {el.synonyms && (
                  <div>
                    <strong>Synonyms:</strong>
                    <p>
                      <Synonyms synonyms={el.synonyms} />
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
