import React from 'react';
import { useGithubUsersContext } from '../src/contexts/GithubUsersContext';
import ShowListItems from '../src/components/Functional/ShowListItems';
import { ListItem } from '../src/components/Style/ListItem';

export default function FollowersPage() {
  const followers = useGithubUsersContext();

  return (
    <ShowListItems>
      {
        followers.map(follower => {
          return (
            <ListItem key={follower.id}>                
              <a href={`https://github.com/${follower.title}`} target="_blank">
                <img src={follower.imageUrl} />
                <span>{follower.title}</span>
              </a>
            </ListItem>
          )
        })
      }
    </ShowListItems>
  )
}
