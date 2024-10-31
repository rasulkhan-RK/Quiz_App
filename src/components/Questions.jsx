const Questions = ({ questions, options, selectedOption, onOptionSelect }) => {
  return (
    <div className="question-container">
      <h2>{questions}</h2>
      {options.map((option) => (
        <div className="option" key={option}>
          <button
            className={`option-btn ${
              selectedOption === option ? "selected" : ""
            } `}
            onClick={() => onOptionSelect(option)}
            disabled={selectedOption !== ""}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};
export default Questions;
