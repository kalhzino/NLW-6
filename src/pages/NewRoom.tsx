import { FormEvent, useState } from 'react';
import { Button } from '../components/button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase';


export function NewRoom(){
   const{user} = useAuth()
   const history = useHistory();
   const [newRoom, setNewRoom] = useState('')
    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();
        if(newRoom.trim() === ''){
          return;  
        }
        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })        

            history.push(`/rooms/${firebaseRoom.key}`)
        }
        
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
                    <form onSubmit={handleCreateRoom}>
                        <input type="text" 
                        placeholder="Nome da Sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value ={newRoom}
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