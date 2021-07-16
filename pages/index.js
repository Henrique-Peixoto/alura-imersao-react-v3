import React, { useState, useEffect } from 'react';
import RelationsBlock from '../src/components/Functional/RelationsBlock';
import ProfileSidebar from '../src/components/Functional/ProfileSidebar';
import MainGrid from '../src/components/Style/MainGrid';
import Box from '../src/components/Style/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

export default function Home() {
  const githubUser = 'Henrique-Peixoto';
  const [followers, setFollowers] = useState([]);
  const [communities, setCommunities] = useState([]);
  const communityPeople = [
    {
      id: 'juunegreiros', 
      title: 'juunegreiros', 
      image: 'https://github.com/juunegreiros.png'
    },
    {
      id: 'omariosouto',
      title: 'omariosouto',
      image: 'https://github.com/omariosouto.png'
    },
    {
      id: 'peas',
      title: 'peas',
      image: 'https://github.com/peas.png'
    },
    {
      id: 'rafaballerini',
      title: 'rafaballerini',
      image: 'https://github.com/rafaballerini.png'
    },
    {
      id: 'marcobrunodev',
      title: 'marcobrunodev',
      image: 'https://github.com/marcobrunodev.png'
    },
    {
      id: 'felipefialho',
      title: 'felipefialho',
      image: 'https://github.com/felipefialho.png'
    },
  ]

  async function handleCreateCommunity(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    const newCommunity = {
      title: formData.get('title'),
      imageUrl: formData.get('image'),
      creatorSlug: githubUser
    }
    
    try{
      const response = await fetch('/api/comunidade', {
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

  async function getGithubFollowers() {
    try{
      const response = await fetch('https://api.github.com/users/peas/followers');
      if(!response.ok){
        throw new Error('Erro na requisição: '+response.status);
      }
      const data = await response.json();
      setFollowers(data);
    }catch(error){
      console.error(error);
    }
  }

  async function fetchCommunities() {
    const response = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '8e421ef34582ae4475657f4d8053dd',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          title
          id
          imageUrl
          creatorSlug
        }
      }`})
    })

    if(!response.ok){
      throw new Error('Erro na requisição ao DatoCMS:'+response.status);
    }

    const data = await response.json();
    const communitiesFromDato = data.data.allCommunities;
    setCommunities(communitiesFromDato);
  }

  useEffect(() => {
    getGithubFollowers();
    fetchCommunities();
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
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
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          {/* <RelationsBlock headerText="Seguidores" objectArray={followers} /> */}
          <RelationsBlock headerText="Comunidades" objectArray={communities} />
          {/* <RelationsBlock headerText="Pessoas da comunidade" objectArray={communityPeople} /> */}
        </div>
      </MainGrid>
  </>
  )
}
