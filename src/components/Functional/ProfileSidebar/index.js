import React from 'react';
import Box from '../../Style/Box';
import { AlurakutProfileSidebarMenuDefault } from '../../../lib/AlurakutCommons';

export default function ProfileSidebar({ githubUser }) {
  return (
    <Box as="aside">
      <img 
        src={`https://github.com/${githubUser}.png`} 
        alt={`Foto de perfil do usuário ${githubUser}`} 
        style={{ borderRadius: '8px' }}
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
