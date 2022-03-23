// 4 coisas que devemos criar
// Context, Reducer, Provider, hook(nao necessario, mas facilita o trabalho)

import { createContext, ReactNode, useContext, useReducer } from 'react';

//types

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
  nQuizz: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
  nQuizz: ''
};

// Context

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
  setNumQuizz
}
const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };

    case FormActions.setName:
      return { ...state, name: action.payload };

    case FormActions.setLevel:
      return { ...state, level: action.payload };

    case FormActions.setEmail:
      return { ...state, email: action.payload };

    case FormActions.setGithub:
      return { ...state, github: action.payload };

    case FormActions.setNumQuizz:
      return { ...state, nQuizz: action.payload };

    default:
      return state;
  }
};

// Provider

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// COntext Hook

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider');
  }
  return context;
};
