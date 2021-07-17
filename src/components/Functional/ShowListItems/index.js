import React from 'react';
import { Main, Ul } from '../../Style/ListItem';

export default function ShowListItems({ children }) {
  return (
      <Main>
        <Ul>
          { children }
        </Ul>
      </Main>
  )
}
