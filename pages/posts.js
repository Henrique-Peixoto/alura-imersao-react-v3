import React from 'react';
import { SiteClient } from 'datocms-client';
import { usePostsContext } from '../src/contexts/Posts';
import { useThemeSwitcherContext } from '../src/contexts/ThemeSwitcher';
import MainGrid from '../src/components/Style/MainGrid';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import ProfileSidebar from '../src/components/Functional/ProfileSidebar';
import RelationsBlock from '../src/components/Functional/RelationsBlock';
import { useGithubUsersContext } from '../src/contexts/GithubUsers';
import { useCommunitiesContext } from '../src/contexts/Communities';
import { usePeopleFromCommunityContext } from '../src/contexts/PeopleFromCommunity';
import Box from '../src/components/Style/Box';
import { PostComment } from '../src/components/Style/Photo';

export default function PostsPage() {
  const { posts, setPosts } = usePostsContext();
  const { theme } = useThemeSwitcherContext();
  const followers = useGithubUsersContext();
  const { communities } = useCommunitiesContext() ;
  const communityPeople = usePeopleFromCommunityContext();

  async function handlePost(e) {
    // e.preventDefault();

    // const formData = new FormData(e.target);

    // const photoName = formData.get('photo')
    // console.log(photoName);

    // const TOKEN = 'bd1a03a01c46d816be68223bb15bb2';
    // const client = new SiteClient(TOKEN);
    // const photoObj = await client.createUploadPath(formData.get('photo'));
    
    // const upload = await client.uploads.create({
    //   photoObj
    // })
    // return upload;

    // console.log(upload);

    // const newPost = {
    //   commentary: formData.get('photoSubtitle'),
    //   image: {
    //     url:photoUrl
    //   }
    // }

    // try{
    //   const response = await fetch('/api/posts', {
    //     method: 'POST',
    //     header: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newPost)
    //   });

    //   const data = await response.json();
    //   setPosts([...posts, data.newRegister]);
    // }catch (error){
    //   throw new Error('Erro na requisição à api/posts: ', error);
    // }
  }

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
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
          <Box theme={theme}>
            <h1 className="title">
              Bem-vindo(a) 
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box theme={theme}>
            <h2 className="subTitle">O que você deseja compartilhar?</h2>
            <form onSubmit={(e) => handlePost(e)}>
              <div>
                <label for="photoSubtitle" />
                <input 
                  id="photoSubtitle"
                  placeholder="Qual vai ser a legenda da foto?" 
                  name="photoSubtitle"  
                  aria-label="Qual vai ser a legenda da foto?"
                  type="text"
                />
              </div>
              <div>
                <label 
                  for="photo" 
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '42px',
                    margin: '0 auto 12px',
                    border: `1px solid ${theme === 'light' ? '#2E7BB4' : '#FFF'}`,
                    borderRadius: '10000px',
                    cursor: 'pointer', 
                    textAlign: 'center',
                    color: theme === 'light' ? '#000' : '#FFF'
                  }}
                >
                  Escolha uma image
                </label>
                <input 
                  id="photo"
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="photo"  
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="file"
                  style={{
                    width: '0.1px',
                    height: '0.1px',
                    opacity: '0',
                    overflow: 'hidden',
                    position: 'absolute',
                    zIndex: '-1'
                  }}
                />
              </div>
              <button>
                Enviar post
              </button>
            </form>
          </Box>
          {
            posts.map(post => {
              return (
                <Box theme={theme} key={post.id}>
                  <img src={post.image.url} />
                  <hr />
                  <PostComment theme={theme}>
                    {post.commentary}
                  </PostComment>
                </Box>
              )
            })
          }
        </div>
        <div 
          className="profileRelationsArea" 
          style={{ 
            gridArea: 'profileRelationsArea' 
          }}
        > 
          <RelationsBlock headerText="Seguidores" objectArray={ followers } goToPage="/seguidores" /> 
          <RelationsBlock headerText="Comunidades" objectArray={ communities } goToPage="/comunidades" /> 
          <RelationsBlock headerText="Pessoas da comunidade" objectArray={ communityPeople } goToPage="/pessoas-comunidade" /> 
        </div>
      </MainGrid>
    </div>
  )
}
