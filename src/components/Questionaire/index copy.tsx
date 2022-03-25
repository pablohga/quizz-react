import React from 'react';

interface IQuest {
  question: string;
  correct_answer: string;
  incorrect_answers: string;
  data: any;
}

export default function Questionaire(props: IQuest): JSX.Element {
  const { question, correct_answer, incorrect_answers, data } = props;

  return (
    <>
      <div className="Questionaire-Container">
        <h1>{question}</h1>
      </div>
      {data}
      <div className="buttons-container">
        <button className="normal-quizz">{correct_answer}</button>
        <button className="normal-quizz">{incorrect_answers[0]}</button>
        <button className="normal-quizz">{incorrect_answers[1]}</button>
        <button className="normal-quizz">{incorrect_answers[2]}</button>
      </div>
    </>
  );
}
