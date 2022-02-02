import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {/* 
                Loop through the synonyms object 
                doing this to list the synonyms with a space between each word
          */}
        <ul>
          {props.synonyms.map((synonym, index) => {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Synonyms;
