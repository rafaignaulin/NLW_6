
import {Button} from '../components/Button'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import '../styles/auth.scss'
import { Link } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

export function NewRoom() {
  const { user } = useAuth();


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
          <h2>Criar uma nova Sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala:"
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}