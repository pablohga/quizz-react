import React from 'react';

function Questionaire({
  handleAnswer,
  data: { question, correct_answer, answers }
}) {
  return (
    <>
      <div className="Questionaire-Container">
        <h1 dangerouslySetInnerHTML={{ __html: question }} />
      </div>

      <div className="buttons-container">
        {answers.map((answer, idx) => {
          return (
            <button
              className="normal-quizz"
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Questionaire;
