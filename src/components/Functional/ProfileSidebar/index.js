import React from 'react';
import Box from '../../Style/Box';
import { AlurakutProfileSidebarMenuDefault } from '../../../lib/AlurakutCommons';

export default function ProfileSidebar({ githubUser }) {
  return (
    <Box as="aside">
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
