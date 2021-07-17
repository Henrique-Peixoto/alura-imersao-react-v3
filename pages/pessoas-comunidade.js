import React from 'react';
import { usePeopleFromCommunityContext } from '../src/contexts/PeopleFromCommunity';
import ShowListItems from '../src/components/Functional/ShowListItems';
import { ListItem } from '../src/components/Style/ListItem';

export default function FollowersPage() {
  const communityPeople = usePeopleFromCommunityContext();

  return (
    <ShowListItems>
      {
        communityPeople.map(person => {
          return (
            <ListItem key={person.id}>                
              <a href={`https://github.com/${person.title}`} target="_blank">
                <img src={person.imageUrl} />
                <span>{person.title}</span>
              </a>
            </ListItem>
          )
        })
      }
    </ShowListItems>
  )
}
