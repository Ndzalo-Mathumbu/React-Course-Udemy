function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of{" "}
        <strong>{totalPoints}</strong> ({Math.round(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
