import React from "react";
import "./Photos.css";

const Photos = (props) => {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-3" key={index}>
                <a
                  href={photo.src.original}
                  rel="noopenner noreferrer"
                  target="_blank"
                >
                  <img
                    src={photo.src.landscape}
                    alt={photo.url}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Photos;
