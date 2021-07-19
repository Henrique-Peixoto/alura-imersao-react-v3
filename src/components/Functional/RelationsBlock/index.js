import React from 'react';
import { useRouter } from 'next/router';
import { ProfileRelationsBoxWrapper } from '../../Style/ProfileRelations';
import { useThemeSwitcherContext } from '../../../contexts/ThemeSwitcher';

export default function RelationsBlock({ headerText, objectArray, goToPage }) {
  const { theme } = useThemeSwitcherContext();
  const router = useRouter();

  return (
    <ProfileRelationsBoxWrapper theme={theme}>
      <a onClick={() => router.push(goToPage)}>
        <h2 className="smallTitle">{`${headerText} (${objectArray.length})`}</h2>
      </a>
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
