const Phonetic = (props) => {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="noopener noreferrer" target="_blank">
        <i class="ph-play"></i>
      </a>
      {/* <br /> */}
      <p style={{ color: "grey" }}>{props.phonetic.text}</p>
    </div>
  );
};

export default Phonetic;
