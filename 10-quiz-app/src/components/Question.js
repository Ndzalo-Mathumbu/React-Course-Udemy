function Question({ question, dispatch, answer }) {
  console.log(question);
  const hasAnswer = answer !== null;
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${hasAnswer ? (i === question.correctOption ? "correct" : "wrong") : ""}`}
            key={i}
            disabled={hasAnswer}
            onClick={() => dispatch({ type: "newAnswer", payLoad: i })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
