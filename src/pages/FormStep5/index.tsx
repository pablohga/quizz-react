import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const FormStep5 = () => {
  const history = useHistory();
  //aqui recebe os 2 carinhas que vem do reducer, o state e o dispatch.
  //state tem os dados, dispatch consegue utilizar os dados
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 5
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert('preencha os dados');
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 5/5</p>
        <h1>Você escolheu responder {state.nQuizz} perguntas.</h1>
        <h1>Está preparado, {state.name}? Aqui estão suas perguntas!</h1>
        <p>Vamos começar?</p>

        <hr />

        <label>
          Pergunta 1!
          <input type="text" autoFocus value={state.nQuizz} />
        </label>

        <Link to="/step4" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Quizz</button>
      </C.Container>
    </Theme>
  );
};
