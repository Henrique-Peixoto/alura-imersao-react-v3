import React, { useState } from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies';

export default function LoginScreen() {
  const router = useRouter();
  const [githubUser, setGithubUser] = useState('');

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
        justifyContent: 'center' 
      }}
    >
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={(e) => goToHomePage(e)}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
            <input 
              placeholder="Usuário"
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
            />
            <button type="submit">
              Login
            </button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
              </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  )
} 