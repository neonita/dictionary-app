import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  // console.log(props.meaning);

  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        // checks if there's an example. shows example if it's available, shows nothing if there's no example.
        const meaningExample = () => {
          if (definition.example) {
            return <em>"{definition.example}"</em>;
          } else {
            return null;
          }
        };

        // definition and example
        return (
          <div key={index} style={{ marginLeft: "1.5em" }}>
            {/* <u>Definition:</u> */}
            <p className="definition">{definition.definition}</p>

            {/* <u>Example:</u> */}
            <p className="example">
              <em style={{ color: "grey" }}>{meaningExample()}</em>
            </p>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

// to analyze and deconstruct the page: 26:08
// pexels api key: 563492ad6f9170000100000136503a7aeb214c5a9a0b7d0869c85fdd
