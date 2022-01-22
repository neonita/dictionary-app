import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        // definition and example
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            <p className="example">
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

// to analyze and deconstruct the page: 26:08
