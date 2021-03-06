import axios from 'axios';
import { /* ChangeEvent , */ useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Questionaire from '../../components/Questionaire';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

/* import './styles.css'; */

export const FormStep5 = () => {
  const history = useHistory();

  //aqui recebe os 2 carinhas que vem do reducer, o state e o dispatch.
  //state tem os dados, dispatch consegue utilizar os dados

  const { state, dispatch } = useForm();
  const API_URL = `https://opentdb.com/api.php?amount=${state.nQuizz}`;
  /* const [perguntas, setPerguntas] = useState<any[]>([]); */
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreFail, setScoreFail] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (answer: any) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      } else {
        setScoreFail(scoreFail + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
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
            Fim do Quizz! Sua pontua????o ?? <strong>{score}</strong>{' '}
          </h1>
        ) : (
          <>
            <p>Passo 5/5</p>
            <h1>Voc?? escolheu responder {state.nQuizz} perguntas.</h1>
            <h1>
              Est?? preparado, {state.name}? <br /> Aqui est??o suas perguntas!
            </h1>
            <p>Vamos come??ar?</p>

            <hr />
            <div className="placar">
              <h2>
                Sua Pontua????o: Acertos:{' '}
                <span className="quizz-scrore-acertos">{score}</span> | Erros:{' '}
                <span className="quizz-scrore-erros">{scoreFail}</span>
              </h2>
            </div>
            <h1>Pergunta:</h1>
            <Questionaire
              handleAnswer={handleAnswer}
              showAnswers={showAnswers}
              handleNextQuestion={handleNextQuestion}
              data={questions[currentIndex]}
            />
            <hr />
          </>
        )}
        <C.footerContent>
          <Link to="/step4" className="backButton">
            Cancelar
          </Link>
          <button onClick={handleNextStep}>Finalizar Quizz</button>
        </C.footerContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: '30px'
          }}
        >
          <strong>
            <Link
              to={{ pathname: 'https://github.com/pablohga' }}
              target="_blank"
              className="backButton"
            >
              GITHUB
            </Link>{' '}
            &nbsp;|&nbsp;
            <Link
              to={{ pathname: 'mailto:pablohga@gmail.com' }}
              target="_blank"
              className="backButton"
            >
              PABLOHGA@GMAIL.COM
            </Link>{' '}
            &nbsp;|&nbsp;
            <Link
              to={{
                pathname:
                  'https://www.linkedin.com/in/pablo-herivelton-g-azevedo-2a321320/'
              }}
              target="_blank"
              className="backButton"
            >
              LINKEDIN
            </Link>
          </strong>
          {/* <Link
            to={{ pathname: 'https://github.com/pablohga' }}
            target="_blank"
            className="backButton"
          >
            Feito por Pablo Azevedo
          </Link> */}
        </div>
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
