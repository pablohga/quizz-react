import styled from 'styled-components';

export const Container = styled.div`
  background-color: #02044a;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Siderbar = styled.div`
  width: 250px;
  border-right: 1px solid #16185c;
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;

export const footerContent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
