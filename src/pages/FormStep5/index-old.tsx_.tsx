import axios from 'axios';
import { /* ChangeEvent , */ useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Questionaire from '../../components/Questionaire';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const FormStep5 = () => {
  const history = useHistory();

  //aqui recebe os 2 carinhas que vem do reducer, o state e o dispatch.
  //state tem os dados, dispatch consegue utilizar os dados

  const { state, dispatch } = useForm();
  const API_URL = `https://opentdb.com/api.php?amount=${state.nQuizz}`;
  const [perguntas, setPerguntas] = useState<any[]>([]);

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        const questions = data.results.map((question: any) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random() - 0.5)
        }));
        setQuestions(questions);
      });
    /* (function (response) {
        //lidar com o sucesso da conexao
        console.log('response: ', response.data.results);
        const listaPerguntas = response.data.results;
        const listaRespostasErradas = response.data.results.category[0];
        const listaRespostasCerta = response.data.results.correct_answer;
        console.log('listaRespostasErradas: ', listaRespostasErradas);
        console.log('listaRespostasCerta: ', listaRespostasCerta);

        setPerguntas(listaPerguntas);
        /* console.log('Perguntas: ', setPerguntas); */
    /* })
      .catch(function (error) { */
    //lidar com caso de erro
    /* console.log(error); */
    /* }); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (answer: any) => {
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 5
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert('preencha os dados');
    }
  };

  console.log('teste perguntas: ', state.nQuizz);

  return questions.length > 0 ? (
    <Theme>
      <C.Container>
        {currentIndex >= questions.length ? (
          <h1>
            Fim do Quizz! Sua pontuação é <strong>{score}</strong>{' '}
          </h1>
        ) : (
          <>
            <p>Passo 5/5</p>
            <h1>Você escolheu responder {state.nQuizz} perguntas.</h1>
            <h1>Está preparado, {state.name}? Aqui estão suas perguntas!</h1>
            <p>Vamos começar?</p>

            <hr />
            <Questionaire
              handleAnswer={handleAnswer}
              data={questions[currentIndex]}
            />
            <hr />
            {/* <br />
        <label>
          Pergunta 1!
          {perguntas.map((pergunta, key) => {
            return (
              <div>
                <h2>
                  {' '}
                  <strong>{pergunta.question}</strong>
                </h2>{' '}
                - Categoria: {pergunta.category}
                <p>
                  <hr />
                  {pergunta.incorrects?.map((incorrect: any) => (
                    <div>
                      {console.log(
                        'incorrect.correct_answer',
                        incorrect.correct_answer
                      )}
                      <p>{incorrect.correct_answer}</p>
                    </div>
                  ))}
                </p>
              </div>
            );
          })}
        </label> */}
          </>
        )}

        <Link to="/step4" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Quizz</button>
      </C.Container>
    </Theme>
  ) : (
    <Theme>
      <C.Container>
        <h1>Loading</h1>
      </C.Container>
    </Theme>
  );
};
