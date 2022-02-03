const Phonetic = (props) => {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="noopener noreferrer" target="_blank">
        <i className="ph-play"></i>
      </a>
      <p style={{ color: "grey" }}>{props.phonetic.text}</p>
    </div>
  );
};

export default Phonetic;
