const OperateBtns = ({
  onPrevious,
  onNext,
  onSubmit,
  onReset,
  isLastQuestion,
  isFirstQuestion,
  optionLocked,
  isNextQuestion,
}) => {
  return (
    <div className="btn-container">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="Btn previous-btn"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={optionLocked || isLastQuestion || isNextQuestion}
        className="Btn next-btn"
      >
        Next
      </button>

      <button onClick={onReset} className="Btn reset-btn">
        Reset
      </button>

      {isLastQuestion && (
        <button onClick={onSubmit} className="Btn submit-btn">
          Submit
        </button>
      )}
    </div>
  );
};

export default OperateBtns;
