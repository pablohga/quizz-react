import * as C from './styles';
import avatar from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <C.Container>
        <h1>
          Quizz PHGA - ReactJS, <br /> Typescript, <br /> Styled Component
        </h1>
        <p>Insira seus dados para realizar o Quizz PHGA</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Link
            to={{
              pathname:
                'https://www.linkedin.com/in/pablo-herivelton-g-azevedo-2a321320/'
            }}
            target="_blank"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            className="backButton"
          >
            <img style={{ textDecoration: 'none' }} src={avatar} alt="" />
            <div>Desenvolvido</div> <div>por Pablo Azevedo</div>
          </Link>
        </div>
      </C.Container>
    </>
  );
};
