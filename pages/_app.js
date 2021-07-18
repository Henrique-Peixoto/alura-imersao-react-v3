import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GithubUsersProvider } from '../src/contexts/GithubUsers';
import { PeopleFromCommunityProvider } from '../src/contexts/PeopleFromCommunity';
import { CommunitiesProvider } from '../src/contexts/Communities';
import { ThemeSwitcherProvider } from '../src/contexts/ThemeSwitcher';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
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
      <ThemeSwitcherProvider>
        <GlobalStyle theme={'light'} />
        <ThemeProvider theme={theme}>
          <CommunitiesProvider>
            <GithubUsersProvider>
              <PeopleFromCommunityProvider>
                <Component {...pageProps} />
              </PeopleFromCommunityProvider>
            </GithubUsersProvider>
          </CommunitiesProvider>
        </ThemeProvider>
      </ThemeSwitcherProvider>
    </>
  )
}
