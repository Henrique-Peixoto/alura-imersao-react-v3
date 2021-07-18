import React from 'react';
import { ProfileRelationsBoxWrapper } from '../../Style/ProfileRelations';
import { useThemeSwitcherContext } from '../../../contexts/ThemeSwitcher';

export default function RelationsBlock({ headerText, objectArray }) {
  const { theme } = useThemeSwitcherContext();

  return (
    <ProfileRelationsBoxWrapper theme={theme}>
      <h2 className="smallTitle">{`${headerText} (${objectArray.length})`}</h2>
      <ul>
        { 
          objectArray.slice(0,6).map(obj => {
            return (
              <li key={obj.id}>
                <a href={obj.imageUrl} target="_blank">
                  <img src={obj.imageUrl} />
                  <span>{obj.title}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}
