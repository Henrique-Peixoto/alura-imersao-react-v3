import React, { useState, useEffect, useContext, createContext } from 'react';

const CommunitiesContext = createContext();

export function useCommunitiesContext() {
  return useContext(CommunitiesContext);
}

export function CommunitiesProvider({ children }) {
  const [communities, setCommunities] = useState([]);

  async function fetchCommunities() {
    try{
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

      const data = await response.json();
      const communitiesFromDato = data.data.allCommunities;
      setCommunities(communitiesFromDato);
    }catch (error) {
      throw new Error('fetchCommunities in Communities/index.js', error)
    }
  }

  useEffect(() => {
    fetchCommunities();
  }, [])

  return (
    <CommunitiesContext.Provider value={{ communities, setCommunities }}>
      { children }
    </CommunitiesContext.Provider>
  )
}
