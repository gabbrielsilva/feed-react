import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from "./Post.module.css"

import fotoPessoa from "../assets/foto.png"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { ChangeEvent, FormEvent, useState } from 'react'

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishAt: Date;
    content: Content[]
}



export function Post({ author, publishAt, content }:PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana'
    ])

    const [newCommentText, setNewCommentText] = useState('')


    const publishDateFormatted = format(publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const PublishDateRealativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handLeCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handLeCreateNewChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }


    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length == 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar hasBorder src={fotoPessoa} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishDateFormatted} dateTime={publishAt.toISOString()}>
                    {PublishDateRealativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handLeCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedbeck</strong>

                <textarea

                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handLeCreateNewChange}
              
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} deleteComment={deleteComment} />
                })}

            </div>
        </article>
    )
}