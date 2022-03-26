import * as C from './styles';
import avatar from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <C.Container>
        <h1>Quizz WA Projectr</h1>
        <p>Insira seus dados para realizar o Quizz WA Project</p>
        <div>
          <Link
            to="https://github.com/pablohga"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            className="backButton"
          >
            <img src={avatar} alt="" />
            Feito por Pablo Azevedo
          </Link>
        </div>
      </C.Container>
    </>
  );
};
