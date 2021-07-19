import React from 'react';
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
            communityPeople.map(person => {
              return (
                <ListItem key={person.id} theme={theme}>                
                  <a href={`https://github.com/${person.title}`} target="_blank">
                    <img src={person.imageUrl} />
                    <span>{person.title}</span>
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
          <RelationsBlock headerText="Seguidores" objectArray={ followers } goToPage="/seguidores" /> 
          <RelationsBlock headerText="Comunidades" objectArray={ communities } goToPage="/comunidades" /> 
        </div>
      </MainGrid>
    </div>
  )
}
