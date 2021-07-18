import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useThemeSwitcherContext } from '../src/contexts/ThemeSwitcher'
import nookies from 'nookies';

export default function LoginScreen() {
  const [githubUser, setGithubUser] = useState('');
  const router = useRouter();
  const { theme } = useThemeSwitcherContext();

  async function goToHomePage(e) {
    try{
      e.preventDefault();
  
      if(githubUser.trim().length === 0){
        alert('O nome do usuário não pode ser vazio!');
        return;
      }

      const response = await fetch('https://alurakut.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ githubUser: githubUser })
      });

      const data = await response.json();

      nookies.set(null, 'USER_TOKEN', data.token, {
        path: '/',
        maxAge: 86400 * 7
      })

      router.push('/', {});
    }catch (error){
      throw new Error(error);
    }
  }

  return (
    <main 
      style={{ 
        display: 'flex', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: theme === 'light' ? '#D9E6F6' : '#333'
      }}
    >
      <div 
        className="loginScreen"
        sttyle={{
          backgroundColor: theme === 'light' ? '#D9E6F6' : '#333'
        }}
      >
        <section 
          className="logoArea"
          style={{
            backgroundColor: theme === 'light' ? '#FFF' : '#222'
          }}
        >
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p className={theme === 'light' ? '' : 'lightParagraph'}><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p className={theme === 'light' ? '' : 'lightParagraph'}><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p className={theme === 'light' ? '' : 'lightParagraph'}><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section 
          className="formArea"
          
        >
          <form 
            className="box" 
            onSubmit={(e) => goToHomePage(e)}
            style={{
              backgroundColor: theme === 'light' ? '#F1F9FE' : '#222'
            }}
          >
            <p
              className={theme === 'light' ? '' : 'lightParagraph'}
            >
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
            <input 
              placeholder="Usuário"
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
              style={{
                backgroundColor: theme === 'light' ? '#FFF' : '#333',
                border: 'none',
                color: theme === 'light' ? '#000' : '#FFF'
              }}
            />
            <button 
              type="submit"
              style={{
                backgroundColor: theme === 'light' ? '#2E7BB4' : '#333'
              }}
            >
              Login
            </button>
          </form>

          <footer 
            className="box"
            style={{
              backgroundColor: theme === 'light' ? '#F1F9FE' : '#222'
            }}
          >
            <p 
              className={theme === 'light' ? '' : 'lightParagraph'}
            >
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
                </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer 
          className="footerArea"
          style={{
            backgroundColor: theme === 'light' ? '' : '#222'
          }}
        >
          <p
            style={{ 
              color: theme === 'light' ? '' : '#FFF'
            }}
          >
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  )
} 
