import styles from "./Sidebar.module.css"

import {PencilLine} from 'phosphor-react'

import fotoPessoa from "../assets/foto.png"
import { Avatar } from "./Avatar"



export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1532190697714-bf86e72187e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            />

            <div className={styles.profire}>
                <Avatar src={fotoPessoa}/>

                <strong>Gabriel Medeiros</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    )
}