import React from "react";
import "./Photos.css";

const Photos = (props) => {
  console.log(props.photos);
  console.log(`${props.alt}`);

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
                  <img src={photo.src.landscape} className="img-fluid" />
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
