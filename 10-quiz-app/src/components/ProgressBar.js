function ProgressBar({ index, numOfQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1}/{numOfQuestions}
        </strong>
      </p>
      <p>
        Points{" "}
        <strong>
          {points}/{totalPoints}
        </strong>
      </p>
    </header>
  );
}

export default ProgressBar;
