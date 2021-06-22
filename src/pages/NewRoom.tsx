import { Button } from '../components/button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'


export function NewRoom(){
    const{user} = useAuth()

    return(
        <div id ='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A Ao vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeASk" />
                    <h2>Criar uma nova Sala</h2>            
                    <form>
                        <input type="text" 
                        placeholder="Nome da Sala"
                        />
                        <Button type="submit">Criar Sala</Button>
                        
                    </form>
                    <p>quer entrar em uma sala existente 
                        <Link to="/">Clique Aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}