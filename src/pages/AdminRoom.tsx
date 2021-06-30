import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/button';
import { RoomCode } from '../components/RoomCode';
import { useParams } from 'react-router-dom'
import deleteImg from '../assets/images/delete.svg';
import '../styles/room.scss'
import { Question } from '../components/Question';
import {useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { useHistory } from 'react-router-dom'
type RoomParams = {
    id:string,
}

export function AdminRoom(){
     //const {user} = useAuth();
     const history = useHistory();
     const params = useParams<RoomParams>();
     const roomId = params.id;   
     const {title, questions} = useRoom(roomId)

    async function handleEndRoom(){
        database.ref(`rooms/${roomId}`).update({endedAt: new Date(),})
        history.push('/')
    }
     async function handleDeleteQuestion(questionId: string){
         if(window.confirm('Tem certeza que deseja excluir esta pergunta?')){
             await database.ref(`rooms/${roomId}/questions${questionId}`).remove();
         }
        
     }
     
    return (
        <div id="page-room">
            <header>
                <div className="content">
                <img src={logoImg} alt="Letmeask" />
                    <div>
                     <RoomCode code={roomId}/>
                     <Button onClick ={handleEndRoom} isOutlined type="submit">Encerrar Sala</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala{title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>
               
                   <div className = "question-list">
                {questions.map(question =>{
                    return(
                        <Question
                        key = {question.id}
                        content = {question.content}
                        author = { question.author}>

                        <button type="button"
                        onClick={() => handleDeleteQuestion(question.id)}>
                            <img src={deleteImg} alt="Remover Pergunta" />
                        </button>
                        </Question>
                    )
                })}
                </div> 
                                          
            </main>
        </div>
        
    )
}


// algoritmo de reconciliação;