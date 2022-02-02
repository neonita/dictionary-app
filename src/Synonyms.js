import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {/* 
                Loop through the synonyms object 
                doing this to list the synonyms with a space between each word
          */}
        <em style={{ color: "orange" }}>
          {props.synonyms.map((synonym, index) => {
            return <li key={index}>{synonym} </li>;
          })}
        </em>
      </ul>
    );
  } else {
    return null;
  }
};

export default Synonyms;
