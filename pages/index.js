import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { useGithubUsersContext } from '../src/contexts/GithubUsers';
import { usePeopleFromCommunityContext } from '../src/contexts/PeopleFromCommunity';
import { useThemeSwitcherContext } from '../src/contexts/ThemeSwitcher';
import { useCommunitiesContext } from '../src/contexts/Communities';
// import { useUserLoginContext } from '../src/contexts/UserLogin';
import RelationsBlock from '../src/components/Functional/RelationsBlock';
import ProfileSidebar from '../src/components/Functional/ProfileSidebar';
import MainGrid from '../src/components/Style/MainGrid';
import Box from '../src/components/Style/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

export default function Home(props) {
// export default function Home(){
  const githubUser = props.githubUser;
  const followers = useGithubUsersContext();
  const communityPeople = usePeopleFromCommunityContext();
  const { theme } = useThemeSwitcherContext();
  const { communities, setCommunities } = useCommunitiesContext();

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
      throw new Error('Erro na requisição à api/comunidades: ', error);
    }
  }

  return (
    <div 
      style={{ backgroundColor: theme === 'light' ? '#D9E6F6' : '#333'}}
    >
      <AlurakutMenu githubUser="Henrique-Peixoto" />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser="Henrique-Peixoto"/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
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
                  <label for="communityName" />
                  <input 
                    id="communityName"
                    placeholder="Qual vai ser o nome da sua comunidade?" 
                    name="title"  
                    aria-label="Qual vai ser o nome da sua comunidade?"
                    type="text"
                  />
                </div>
                <div>
                  <label for="imageUrl" />
                  <input 
                    id="imageUrl"
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
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <RelationsBlock headerText="Seguidores" objectArray={ followers } goToPage="/seguidores" githubUser={githubUser} /> 
          <RelationsBlock headerText="Comunidades" objectArray={ communities } goToPage="/comunidades" /> 
          <RelationsBlock headerText="Pessoas da comunidade" objectArray={ communityPeople } goToPage="/pessoas-comunidade" /> 
        </div>
      </MainGrid>
  </div>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  // const { setUserLogin } = u seUserLoginContext();
  
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
  .then(response => response.json())
  
  if(!isAuthenticated){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  
  const { githubUser } = jwt.decode(token);
  
  // setUserLogin(githubUser);

  return {
    props: {
      githubUser
    }
  }
}
