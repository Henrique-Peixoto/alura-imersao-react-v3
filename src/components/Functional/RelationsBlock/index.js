import React from 'react';
import { ProfileRelationsBoxWrapper } from '../../Style/ProfileRelations';

export default function RelationsBlock({ headerText, objectArray, goToPage }) {
  return (
    <ProfileRelationsBoxWrapper>
      <a href={ goToPage }>
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
