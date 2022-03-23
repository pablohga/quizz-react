import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const FormStep3 = () => {
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
        payload: 3
      });
    }
  }, []);

  /*   const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert('preencha os dados');
    }
  }; */

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step4');
    } else {
      alert('Precisa preencher seus dados antes de avançar');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/5</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para que conseguimos entrar em contato</p>

        <hr />

        <label>
          Qual seu email
          <input
            type="email"
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Qual seu GitHub
          <input
            type="url"
            autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};
