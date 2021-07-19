import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) => theme === 'light' ? '#FFF' : '#222'};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;

  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    color: ${({ theme }) => theme === 'light' ? '#000' : '#FFF'};
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .subTitle {
    color: ${({ theme }) => theme === 'light' ? '#000' : '#FFF'};
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme === 'light' ? '#F4F4F4' : '#333'};
    color: ${({ theme }) => theme === 'light' ? '#333' : '#FFF'};
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    
    ::placeholder {
      color: ${({ theme }) => theme === 'light' ? '#333' : '#FFF'};
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: #FFF;
    border-radius: 10000px;
    background-color: ${({ theme }) => theme === 'light' ? '#6F92BB' : '#333'};
  }
`

export default Box;
