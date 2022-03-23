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
              title="Quizz"
              description="Teste seus conhecimentos"
              icon="mail"
              path="/step4"
              active={state.currentStep === 4}
            />
            <SiderbarItem
              title="Quizz"
              description="Teste seus conhecimentos"
              icon="mail"
              path="/step5"
              active={state.currentStep === 4}
            />
          </C.Siderbar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
