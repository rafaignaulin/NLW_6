
import { useHistory } from 'react-router-dom'

import {Button} from '../components/Button'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'
import '../styles/auth.scss'

import { useAuth } from '../hooks/useAuth'


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle} = useAuth()

  async function handleCreateRoom(){
    if(!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new');

  }


  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration"/>
        <strong>Crie salas de Q&amp;a ao-vivo</strong>
        <p>Tire as duvidas da  sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google"/>
            Crie sua sala com o Google
          </button>
          <div className='separator'>ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala:"
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}