import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #b8b8d4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }
  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;

      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;

      background-color: #02044a;
      width: 150px;
      height: 150px;
      font-size: 60px;
      text-align: center;
    }
  }

  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }
  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
    padding: 30px;
  }
`;

export const quantContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const footerContent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
