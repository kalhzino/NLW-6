import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type QuestionType = {
    id:string;
    author:{
        name:string;
        avatar: string;
    }
    content: string;
    isAnswered:boolean;
    isHighlited: boolean;
    likeCount: number;
    hasLike: string | undefined;
}

type FirebaseQuestions = Record<string, {
    author:{
        name:string;
        avatar: string;
    }
    content: string;
    isAnswered:boolean;
    isHighlited: boolean;
    likes: Record<string, {authorId:string}>
}>

export function useRoom(roomId: string){
    const[questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('');
    const {user} = useAuth();

    useEffect(()=>{
        const roomRef = database.ref(`rooms/${roomId}`);
        roomRef.on('value', room =>{
            
            const databaseRoom = room.val();

            const firebaseQuestions:FirebaseQuestions = databaseRoom.questions  ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) =>{
                return{
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlited: value.isHighlited,
                    isAnswered: value.isAnswered,
                    likeCount: Object.values(value.likes ?? {}).length,
                    hasLike: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
                }
            })
            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
        return () =>{
            roomRef.off('value');
        }
    },[roomId, user?.id]);

    return{questions,title}
}