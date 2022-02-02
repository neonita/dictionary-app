import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic.js";

export default function Definition(props) {
  //   console.log(props.definition);
  if (props.definition) {
    return (
      <div className="Definition">
        <h1>{props.definition.word}</h1> {/* word */}
        {props.result.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
