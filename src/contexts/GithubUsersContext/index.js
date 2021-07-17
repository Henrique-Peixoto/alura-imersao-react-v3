import React, { useState, useEffect, createContext, useContext } from 'react';

export const GithubUsersContext = createContext();

export function useGithubUsersContext() {
  return useContext(GithubUsersContext);
}

export function GithubUsersProvider({ children }) {
  const [followers, setFollowers] = useState([]);

  async function fetchGithubFollowers() {
    try{
      const response = await fetch('https://api.github.com/users/Henrique-Peixoto/followers');
      const data = await response.json();

      const followersFormatted = data.map(follower => {
        return (
          {
            id: follower.id,
            title: follower.login,
            imageUrl: `https://github.com/${follower.login}.png`
          }
        )
      })

      setFollowers(followersFormatted);
    }catch (error){
      throw new Error('fetchGithubUsers in GithubUsersContextProvider: ')
    }
  }

  useEffect(() => {
    fetchGithubFollowers();
  }, [])

  return (
    <GithubUsersContext.Provider value={ followers }>
      { children }
    </GithubUsersContext.Provider>
  )
}