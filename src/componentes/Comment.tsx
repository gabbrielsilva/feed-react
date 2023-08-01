import styles from "./Comment.module.css"

import fotoPessoa from "../assets/foto.png"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps{
    content: string;
    deleteComment: (comment: string) => void;
}

export function Comment({content, deleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        deleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
             <Avatar hasBorder={false} src={fotoPessoa}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Medeiros</strong>
                            <time title="27 de setembro às 02:54" dateTime="2022-09-11">Cerca de 1h Atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}