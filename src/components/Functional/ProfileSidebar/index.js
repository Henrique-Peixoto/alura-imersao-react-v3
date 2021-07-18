import React from 'react';
import Box from '../../Style/Box';
import { AlurakutProfileSidebarMenuDefault } from '../../../lib/AlurakutCommons';
import { useThemeSwitcherContext } from '../../../contexts/ThemeSwitcher';

export default function ProfileSidebar({ githubUser }) {
  const { theme } = useThemeSwitcherContext();

  return (
    <Box as="aside" theme={theme}>
      <img
        style={{ borderRadius: '8px'}}
        src={`https://github.com/${githubUser}.png`} 
        alt={`Foto de perfil do usuário ${githubUser}`} 
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`} target="_blank">
          @{githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}
