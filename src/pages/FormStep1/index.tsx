import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const FormStep1 = () => {
  const history = useHistory();
  //aqui recebe os 2 carinhas que vem do reducer, o state e o dispatch.
  //state tem os dados, dispatch consegue utilizar os dados
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step2');
    } else {
      alert('Precisa preencher seu nome antes de avançar');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/5</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label>
          Seu nome Completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <C.footerContent>
          <span></span>
          <button onClick={handleNextStep}>Proximo</button>
        </C.footerContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <Link to="https://github.com/pablohga" className="backButton">
            Feito por Pablo Azevedo
          </Link>
        </div>
      </C.Container>
    </Theme>
  );
};
