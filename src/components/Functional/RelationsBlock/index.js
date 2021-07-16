import React, { useState } from 'react';
import Box from '../../Style/Box';
import { ProfileRelationsBoxWrapper } from '../../Style/ProfileRelations';

export default function RelationsBlock({ headerText, objectArray }) {
  return (
    <ProfileRelationsBoxWrapper>
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
