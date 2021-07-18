import React from 'react';
import { useRouter } from 'next/router';
import { useThemeSwitcherContext } from '../src/contexts/ThemeSwitcher';
import { useGithubUsersContext } from '../src/contexts/GithubUsers';
import { useCommunitiesContext } from '../src/contexts/Communities';
import { usePeopleFromCommunityContext } from '../src/contexts/PeopleFromCommunity';
import MainGrid from '../src/components/Style/MainGrid';
import { AlurakutMenu } from '../src/lib/AlurakutCommons';
import ProfileSidebar from '../src/components/Functional/ProfileSidebar';
import RelationsBlock from '../src/components/Functional/RelationsBlock';
import ShowListItems from '../src/components/Functional/ShowListItems';
import { ListItem } from '../src/components/Style/ListItem';

export default function FollowerPage() {
  const router = useRouter();
  const followers = useGithubUsersContext();
  const { communities } = useCommunitiesContext();
  const communityPeople = usePeopleFromCommunityContext();
  const { theme } = useThemeSwitcherContext();

  return (
    <div 
      style={{ backgroundColor: theme === 'light' ? '#D9E6F6' : '#333'}}
    >
      <AlurakutMenu githubUser="Henrique-Peixoto" />
      <MainGrid>
        <div 
          className="profileArea" 
          style={{ 
            gridArea: 'profileArea' 
          }}
        >
          <ProfileSidebar githubUser="Henrique-Peixoto" />
        </div>
          <ShowListItems 
            className="welcomeArea" 
            style={{ 
              gridArea: 'welcomeArea' 
            }}
          >
            {
              followers.map(follower => {
                return (
                  <ListItem key={follower.id} theme={theme}>                
                    <a href={`https://github.com/${follower.title}`} target="_blank">
                      <img src={follower.imageUrl} />
                      <span>{follower.title}</span>
                    </a>
                  </ListItem>
                )
              })
            }
        </ShowListItems>
        <div 
          className="profileRelationsArea" 
          style={{ 
            gridArea: 'profileRelationsArea' 
          }}
        > 
          <a onClick={() => router.push('/comunidades')}>
            <RelationsBlock headerText="Comunidades" objectArray={ communities } /> 
          </a>
          <a onClick={() => router.push('/pessoas-comunidade')}>
            <RelationsBlock headerText="Pessoas da comunidade" objectArray={ communityPeople } /> 
          </a>
        </div>
      </MainGrid>
    </div>
  )
}
