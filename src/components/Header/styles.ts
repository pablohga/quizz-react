import styled from 'styled-components';
import avatarjpg from '../../assets/avatar.jpg';

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #16195c;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }
  p {
    font-size: 14px;
    color: #b8b8d4;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
  }
`;

export const Avatar = styled.div<{ avatarjpg: string }>`
  background: url(${avatarjpg});
`;
