import React from 'react';
import { AlurakutMenu } from '../../../lib/AlurakutCommons';
import { Main, Ul } from '../../Style/ListItem';

export default function ShowListItems({ children }) {
  return (
    <>
      <AlurakutMenu githubUser="Henrique-Peixoto" />
      <Main>
        <Ul>
          { children }
        </Ul>
      </Main>
    </>
  )
}
