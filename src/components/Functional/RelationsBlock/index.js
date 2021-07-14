import React from 'react';
import { ProfileRelationsBoxWrapper } from '../../Style/ProfileRelations';

export default function RelationsBlock({ objectArray }) {
  return (
    <ProfileRelationsBoxWrapper>
      <ul>
        { 
          objectArray.map((obj) => {
            return (
              <li key={obj.id}>
                <a href={`/users/${obj.title}`}>
                  <img src={obj.image} />
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
