import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <h4>{props.results.phonetic}</h4>
        </section>
        <section>
          {props.results.meanings &&
            props.results.meanings.map((el) => (
              <div>
                <h3> {el.partOfSpeech}</h3>

                
                <p className="definition"> {el.definition} </p>

                {el.example && (
                  <div>
                  
                    <p className="example">{el.example}</p>
                  </div>
                )}

                {el.synonyms && (
                  <div>
                    
                    <p>
                      <Synonyms synonyms={el.synonyms} />
                    </p>
                  </div>
                )}
              </div>
            ))}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
