import React, { createContext, useContext } from 'react';

export const PeopleFromCommunityContext = createContext();

export function usePeopleFromCommunityContext() {
  return useContext(PeopleFromCommunityContext);
}

export function PeopleFromCommunityProvider({ children }) {
  const communityPeople = [
    {
      id: 'juunegreiros', 
      title: 'juunegreiros', 
      imageUrl: 'https://github.com/juunegreiros.png'
    },
    {
      id: 'omariosouto',
      title: 'omariosouto',
      imageUrl: 'https://github.com/omariosouto.png'
    },
    {
      id: 'peas',
      title: 'peas',
      imageUrl: 'https://github.com/peas.png'
    },
    {
      id: 'rafaballerini',
      title: 'rafaballerini',
      imageUrl: 'https://github.com/rafaballerini.png'
    },
    {
      id: 'marcobrunodev',
      title: 'marcobrunodev',
      imageUrl: 'https://github.com/marcobrunodev.png'
    },
    {
      id: 'felipefialho',
      title: 'felipefialho',
      imageUrl: 'https://github.com/felipefialho.png'
    },
  ]

  return (
    <PeopleFromCommunityContext.Provider value={ communityPeople }>
      { children }
    </PeopleFromCommunityContext.Provider>
  )
}
