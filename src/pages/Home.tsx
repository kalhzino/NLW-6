import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/button'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'




export function Home (){
   const {user ,signInWithGoogle} = useAuth()
    const history = useHistory();

    async function handleCreateRoom(){
        if(!user){
           await signInWithGoogle()
        }
        history.push('/rooms/new')        
    }
    return (
        <div id ='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A Ao vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeASk" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIcon} alt="Logo do Google" />
                        Crie sua Sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input type="text" 
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na Sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}