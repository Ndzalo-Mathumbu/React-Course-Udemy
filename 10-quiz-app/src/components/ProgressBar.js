function ProgressBar({ index, numOfQuestions, points, totalPoints }) {
  return (
    <header className="progress">
      <p>
        Question{" "}
        <strong>
          {index}/{numOfQuestions}
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
