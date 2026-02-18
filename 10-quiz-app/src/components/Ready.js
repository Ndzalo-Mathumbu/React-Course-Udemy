function Ready({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To React Quiz 🤩</h2>
      <h3>{numOfQuestions} questions to test your React skills ⚛️</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let‘s Go!
      </button>
    </div>
  );
}

export default Ready;
