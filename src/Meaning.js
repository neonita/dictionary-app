import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        // definition and example
        return (
          <div key={index}>
            <u>Definition:</u>
            <br />
            <p className="definition">{definition.definition}</p>
            <br />

            <u>Example:</u>
            <p className="example">
              <em>{definition.example}</em>
            </p>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

// to analyze and deconstruct the page: 26:08
