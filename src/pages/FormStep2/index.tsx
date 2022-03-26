import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const FormStep2 = () => {
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
        payload: 2
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3');
    } else {
      alert('Precisa preencher seu nome antes de avançar');
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/5</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opçao que melho condiz com o seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo a 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <C.footerContent>
          <Link to="/" className="backButton">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Proximo</button>
        </C.footerContent>
      </C.Container>
    </Theme>
  );
};
