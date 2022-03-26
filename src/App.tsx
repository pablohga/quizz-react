import { FormProvider } from './contexts/FormContext';
import { Router } from './router';

/* import './components/Questionaire/style.scss'; */

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
};

export default App;
