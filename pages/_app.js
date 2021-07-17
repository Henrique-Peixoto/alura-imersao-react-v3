import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GithubUsersProvider } from '../src/contexts/GithubUsersContext';
import { PeopleFromCommunityProvider } from '../src/contexts/PeopleFromCommunity';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-size: 62.5%; */
  }

  body {
    font-family: sans-serif;
    background-color: #d9e6f6;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GithubUsersProvider>
          <PeopleFromCommunityProvider>
            <Component {...pageProps} />
          </PeopleFromCommunityProvider>
        </GithubUsersProvider>
      </ThemeProvider>
    </>
  )
}
