import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 1110px;
`
export const Ul = styled.ul`
  background: #fff;
  border-radius: 8px;
  padding: 8px 0;
`

export const ListItem = styled.li`
  list-style: none;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 16px;
    text-decoration: none;
    flex-shrink: 1;
  }

  img {
    max-width: 150px;
    flex-basis: 150px;
    flex-shrink: 1;
    height: auto;
    border-radius: 8px;
  }

  a span {
    display: block;
    color: black;
    font-size: 20px;
  }

  a span:hover {
    text-decoration: underline;
  }

  @media (max-width: 460px){
    img {
      width: 70px;
    }

    a span {
      font-size: 16px;
    }
  }
`
