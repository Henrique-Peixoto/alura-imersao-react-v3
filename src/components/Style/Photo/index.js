import styled from 'styled-components';

export const PostComment = styled.span`
  display: block;
  color: ${({ theme }) => theme === 'light' ? '#000' : '#FFF'};
  margin-top: 8px;
`
