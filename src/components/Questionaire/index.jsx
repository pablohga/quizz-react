import React from 'react';
import './style.scss';

function Questionaire({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  data: { question, correct_answer, answers }
}) {
  return (
    <>
      <div className="questionClass">
        <h1 dangerouslySetInnerHTML={{ __html: question }} />
      </div>

      <div className="button-overall">
        {answers.map((answer, idx) => {
          const specialClassName = showAnswers
            ? answer === correct_answer
              ? 'green-button'
              : 'red-button'
            : '';
          return (
            <button
              className={`normal-button ${specialClassName}`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      <div className="next-question-container">
        {showAnswers && (
          <button onClick={handleNextQuestion} className="next-question">
            Proxima Pergunta
          </button>
        )}
      </div>
    </>
  );
}

export default Questionaire;
