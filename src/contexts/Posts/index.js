import React, { useState, useEffect, useContext, createContext } from 'react';

const PostsContext = createContext();

export function usePostsContext() {
  return useContext(PostsContext);
}

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try{
      const response = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Authorization': '8e421ef34582ae4475657f4d8053dd',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ "query": `query {
          allPosts {
            id
            commentary
            image {
              id
              url
            }
          }
        }`})
      })

      const data = await response.json();
      const postsFromDato = data.data.allPosts;
      setPosts(postsFromDato);
    }catch (error) {
      throw new Error('fetchPosts in Posts/index.js', error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      { children }
    </PostsContext.Provider>
  )
}