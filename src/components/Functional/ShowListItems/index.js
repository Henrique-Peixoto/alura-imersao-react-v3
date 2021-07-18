import React from 'react';
import { useThemeSwitcherContext } from '../../../contexts/ThemeSwitcher';
import { Main, Ul } from '../../Style/ListItem';

export default function ShowListItems({ children }) {
  const { theme } = useThemeSwitcherContext();

  return (
      <Main theme={theme}>
        <Ul>
          { children }
        </Ul>
      </Main>
  )
}
