import React from 'react';
import Box from '../../Style/Box';
import { ProfileRelationsBoxWrapper } from '../../Style/ProfileRelations';

export default function RelationsBlock({ headerText, objectArray }) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">{`${headerText} (${objectArray.length})`}</h2>
      <ul>
        { 
          objectArray.map((obj) => {
            return (
              <li key={obj.id}>
                <a href={obj.html_url} target="_blank">
                  <img src={obj.avatar_url} />
                  <span>{obj.login}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}
