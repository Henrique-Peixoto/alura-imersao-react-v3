import React from 'react';
import { useCommunitiesContext } from '../src/contexts/Communities';
import ShowListItems from '../src/components/Functional/ShowListItems';
import { ListItem } from '../src/components/Style/ListItem';

export default function CommunitiesPage() {
  const { communities } = useCommunitiesContext();

  return (
    <ShowListItems>
      {
        communities.map(community => {
          return (
            <ListItem>
              <a href={community.imageUrl} target="_blank">
                <img src={community.imageUrl} alt={community.title} />
                <span>{community.title}</span>
              </a>
            </ListItem>
          )
        })
      }
    </ShowListItems>
  )
}
