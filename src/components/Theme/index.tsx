import { ReactNode } from 'react';
import { useForm } from '../../contexts/FormContext';
import { Header } from '../Header';
import { SiderbarItem } from '../SidebarItem';
import * as C from './styles';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Siderbar>
            <SiderbarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SiderbarItem
              title="Profissional"
              description="Seu nivel"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SiderbarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
            <SiderbarItem
              title="Quizz Passo 1"
              description="Quantas perguntas deseja responder?"
              icon="quizz1"
              path="/step4"
              active={state.currentStep === 4}
            />
            <SiderbarItem
              title="Quizz Passo 2"
              description="Hora do desafio! Vamos as perguntas!"
              icon="quizz2"
              path="/step5"
              active={state.currentStep === 5}
            />
          </C.Siderbar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
