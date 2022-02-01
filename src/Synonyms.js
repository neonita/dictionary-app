import React from "react";

const Synonyms = (props) => {
  return (
    <div className="Synonyms">
      <small style={{ color: "pink" }}>from synonym component</small>
      <strong>{props.synonyms}</strong>
    </div>
  );
};

export default Synonyms;
