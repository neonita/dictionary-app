import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <small style={{ color: "pink" }}>from synonym component</small>
        <strong>{props.synonyms}</strong>
      </div>
    );
  } else {
    return null;
  }
};

export default Synonyms;
