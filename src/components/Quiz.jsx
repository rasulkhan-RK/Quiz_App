import { useState } from "react";
import Questions from "./Questions";
import Result from "./Result";
import OperateBtns from "./OprateBtns";
import data from "./data";

const QuizApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState("");
  const [optionLocked, setOptionLocked] = useState(false);

  const handleOptionLocked = (option) => {
    if (!optionLocked) {
      setSelectedOption(option);
      setOptionLocked(true);
    }
  };

  const handleNext = () => {
    if (selectedOption === data[currentIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");

    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setSelectedOption("");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === data[currentIndex].answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption("");
    setShowResult(false);
  };

  return (
    <div className="quiz-app">
      <h1>
        {showResult ? (
          <span>Thank You For Participate</span>
        ) : (
          `Question ${currentIndex + 1} of ${data.length} `
        )}
      </h1>
      {!showResult ? (
        <div className="quiz-app-container">
          <Questions
            questions={data[currentIndex].question}
            options={data[currentIndex].options}
            selectedOption={selectedOption}
            onOptionSelect={setSelectedOption}
            optionLock={handleOptionLocked}
          />

          <OperateBtns
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            onReset={handleReset}
            isLastQuestion={currentIndex === data.length - 1}
            isFirstQuestion={currentIndex === 0}
            isNextQuestion={selectedOption === ""}
            optionLocked={optionLocked}
          />
        </div>
      ) : (
        <Result
          onReset={handleReset}
          totalQuestion={data.length}
          score={score}
        />
      )}
    </div>
  );
};

export default QuizApp;
