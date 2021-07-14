import React, { useState } from 'react';
import RelationsBlock from '../src/components/Functional/RelationsBlock';
import ProfileSidebar from '../src/components/Functional/ProfileSidebar';
import MainGrid from '../src/components/Style/MainGrid';
import Box from '../src/components/Style/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

export default function Home() {
  const githubUser = 'Henrique-Peixoto';
  const [comunities, setComunities] = useState([{
    id: '10923874',
    title: 'Eu odeia acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade.01.jpg'
  }]);
  const comunityPeople = [
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

  function handleCreateComunity(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const newComunity = {
      id: new Date().toISOString(),
      title: formData.get('title'),
      image: formData.get('image')
    }

    setComunities([...comunities, newComunity]);
  }

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
            <form onSubmit={(e) => handleCreateComunity(e)}>
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
          <RelationsBlock objectArray={comunities} />
          <RelationsBlock objectArray={comunityPeople} />
        </div>
      </MainGrid>
  </>
  )
}
