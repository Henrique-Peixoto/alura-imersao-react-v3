import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img 
        src={`https://github.com/${githubUser}.png`} 
        alt={`Foto de perfil do usuário ${githubUser}`} 
        style={{ borderRadius: '8px' }}
      />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'Henrique-Peixoto';
  const comunityPeople = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
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
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({comunityPeople.length})
            </h2>

            <ul>
              { 
                comunityPeople.map((person) => {
                  return (
                    <li>
                      <a href={`/users/${person}`} key={person}>
                        <img src={`https://github.com/${person}.png`} alt={`Foto de perfil do usuário ${person}`} />
                        <span>{person}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
  </>
  )
}
