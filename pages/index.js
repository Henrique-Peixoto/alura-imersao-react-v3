import React, { useState, useEffect } from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { useGithubUsersContext } from '../src/contexts/GithubUsers';
import { usePeopleFromCommunityContext } from '../src/contexts/PeopleFromCommunity';
import { useCommunitiesContext } from '../src/contexts/Communities';
import { useThemeSwitcherContext } from '../src/contexts/ThemeSwitcher';
import RelationsBlock from '../src/components/Functional/RelationsBlock';
import ProfileSidebar from '../src/components/Functional/ProfileSidebar';
import MainGrid from '../src/components/Style/MainGrid';
import Box from '../src/components/Style/Box';
import ShowListItems from '../src/components/Functional/ShowListItems';
import { ListItem } from '../src/components/Style/ListItem';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

// export default function Home(props) {
export default function Home(){
  // const githubUser = props.githupbUser;
  const githubUser = 'Henrique-Peixoto';
  const followers = useGithubUsersContext();
  const communityPeople = usePeopleFromCommunityContext();
  const { theme } = useThemeSwitcherContext();
  const { communities, setCommunities } = useCommunitiesContext();
  const [showWelcomeAsMainContent, setShowWelcomeAsMainContent] = useState(true);
  const [showFollowersAsMainContent, setShowFollowersAsMainContent] = useState(false);
  const [showCommunitiesAsMainContent, setShowCommunitiesAsMainContent] = useState(false);
  const [showCommunityPeopleAsMainContent, setShowCommunityPeopleAsMainContent] = useState(false);

  async function handleCreateCommunity(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    const newCommunity = {
      title: formData.get('title'),
      imageUrl: formData.get('image'),
      creatorSlug: githubUser
    }
    
    try{
      const response = await fetch('/api/comunidades', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCommunity)
      });

      const data = await response.json();
      setCommunities([...communities, data.newRegister]);
    }catch (error){
      throw new Error('Erro na requisição à api/comunidades' + error);
    }
  }

  function UpdateMainContentToFollowers() {
    setShowFollowersAsMainContent(true);
    setShowCommunitiesAsMainContent(false);
    setShowCommunityPeopleAsMainContent(false);
    setShowWelcomeAsMainContent(false);
  }

  function UpdateMainContentToCommunities() {
    setShowFollowersAsMainContent(false);
    setShowCommunitiesAsMainContent(true);
    setShowCommunityPeopleAsMainContent(false);
    setShowWelcomeAsMainContent(false);
  }

  function UpdateMainContentToCommunityPeople() {
    setShowFollowersAsMainContent(false);
    setShowCommunitiesAsMainContent(false);
    setShowCommunityPeopleAsMainContent(true);
    setShowWelcomeAsMainContent(false);
  }

  function UpdateMainContentToWelcome() {
    setShowFollowersAsMainContent(false);
    setShowCommunitiesAsMainContent(false);
    setShowCommunityPeopleAsMainContent(false);
    setShowWelcomeAsMainContent(true);
  }

  return (
    <div 
      style={{ backgroundColor: theme === 'light' ? '#D9E6F6' : '#333'}}
    >
      <AlurakutMenu githubUser={githubUser} updateMainContentToWelcome={UpdateMainContentToWelcome} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          { showWelcomeAsMainContent &&
            <>
              <Box theme={theme}>
                <h1 className="title">
                  Bem-vindo(a)
                </h1>
                <OrkutNostalgicIconSet />
              </Box>

              <Box theme={theme}>
                <h2 className="subTitle">O que você deseja fazer?</h2>
                <form onSubmit={(e) => handleCreateCommunity(e)}>
                  <div>
                    <input 
                      placeholder="Qual vai ser o nome da sua comunidade?" 
                      name="title"  
                      aria-label="Qual vai ser o nome da sua comunidade?"
                      type="text"
                    />
                  </div>
                  <div>
                    <input 
                      placeholder="Coloque uma URL para usarmos de capa" 
                      name="image"  
                      aria-label="Coloque uma URL para usarmos de capa"
                      type="text"
                    />
                  </div>
                  <button>
                    Criar comunidade
                  </button>
                </form>
              </Box>
            </>
          }
          { showFollowersAsMainContent &&
            <ShowListItems>
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
          }
          { showCommunitiesAsMainContent &&
            <ShowListItems>
              {
                communities.map(community => {
                  return (
                    <ListItem key={community.id} theme={theme}>                
                      <a href={community.imageUrl} target="_blank">
                        <img src={community.imageUrl} />
                        <span>{community.title}</span>
                      </a>
                    </ListItem>
                  )
                })
              }
            </ShowListItems>
          }
          { showCommunityPeopleAsMainContent &&
            <ShowListItems>
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
          }
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          { !showFollowersAsMainContent && 
            <a onClick={UpdateMainContentToFollowers}>
              <RelationsBlock headerText="Seguidores" objectArray={ followers } /> 
            </a>
          }
          { !showCommunitiesAsMainContent && 
            <a onClick={UpdateMainContentToCommunities}>
              <RelationsBlock headerText="Comunidades" objectArray={ communities } /> 
            </a>
          }
          { !showCommunityPeopleAsMainContent && 
            <a onClick={UpdateMainContentToCommunityPeople}>
              <RelationsBlock headerText="Pessoas da comunidade" objectArray={ communityPeople } /> 
            </a>
          }
        </div>
      </MainGrid>
  </div>
  )
}

// export async function getServerSideProps(context) {
//   const cookies = nookies.get(context);
//   const token = cookies.USER_TOKEN;
  
//   const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
//     headers: {
//       Authorization: token
//     }
//   })
//   .then(response => response.json())
  
//   if(!isAuthenticated){
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }
  
//   const { githubUser } = jwt.decode(token);
  
//   return {
//     props: {
//       githubUser
//     }
//   }
// }
