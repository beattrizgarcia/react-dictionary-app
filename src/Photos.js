import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((images) => (
            <div className="col-4">
              <a href={images.src.original} target="_blank" rel="noreferrer">
                <img
                  src={images.src.landscape}
                  className="img-fluid"
                  alt="Searched word"
                ></img>
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
