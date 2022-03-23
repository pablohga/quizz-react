import { ChangeEvent, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const FormStep4 = () => {
  const history = useHistory();
  //aqui recebe os 2 carinhas que vem do reducer, o state e o dispatch.
  //state tem os dados, dispatch consegue utilizar os dados
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step5');
    } else {
      alert('Precisa preencher seu nome antes de avançar');
    }
  };

  const handleNumQuizz = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setNumQuizz,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 4/5</p>
        <h1>Ok, {state.name}. Vamos começar?</h1>
        <p>Quantas perguntas deseja responder?</p>

        <hr />

        <label>
          Quantidade de perguntas
          <input
            type="text"
            autoFocus
            value={state.nQuizz}
            onChange={handleNumQuizz}
          />
        </label>
        <Link to="/step3" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};
