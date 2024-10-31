const Result = ({ onReset, score, totalQuestion }) => {
  return (
    <div className="result">
      <h2>
        Your Score: {score} / {totalQuestion}
      </h2>
      <button className="Btn try-again-btn" onClick={onReset}>
        Try Again
      </button>
    </div>
  );
};

export default Result;
