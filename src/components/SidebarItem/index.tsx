import { Link } from 'react-router-dom';
import * as C from './styles';
import FaceIcon from '@mui/icons-material/Face';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SiderbarItem = ({
  title,
  description,
  icon,
  path,
  active
}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === 'profile' && (
            <FaceIcon fill="white" width={40} height={40} />
          )}
          {icon === 'book' && (
            <MenuBookIcon fill="white" width={24} height={24} />
          )}
          {icon === 'mail' && (
            <MailOutlineIcon fill="white" width={24} height={24} />
          )}
          {icon === 'quizz1' && (
            <QuestionAnswerIcon fill="white" width={24} height={24} />
          )}
          {icon === 'quizz2' && (
            <QuestionAnswerIcon fill="white" width={24} height={24} />
          )}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
