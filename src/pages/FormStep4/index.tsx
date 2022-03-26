import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const FormStep4 = () => {
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
        payload: 4
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      history.push('/step5');
    } else {
      alert('Precisa preencher as informações antes de avançar');
    }
  };

  const handleNumQuizz = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setNumQuizz,
      payload: e.target.value
    });
  };

  console.log('teste perguntas: ', state.nQuizz);

  return (
    <Theme>
      <C.Container>
        <p>Passo 4/5</p>
        <h1>Ok, {state.name}. Vamos começar?</h1>
        <p>Quantas perguntas deseja responder?</p>

        <hr />
        <C.quantContainer>
          <label>
            Quantidade de perguntas
            <input
              type="number"
              autoFocus
              value={state.nQuizz}
              onChange={handleNumQuizz}
            />
          </label>
        </C.quantContainer>
        <C.footerContent>
          <Link to="/step3" className="backButton">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Proximo</button>
        </C.footerContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <Link
            to={{ pathname: 'https://github.com/pablohga' }}
            target="_blank"
            className="backButton"
          >
            Feito por Pablo Azevedo
          </Link>
        </div>
      </C.Container>
    </Theme>
  );
};
