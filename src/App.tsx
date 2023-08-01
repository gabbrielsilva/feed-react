import { Header } from './componentes/Header'
import { Sidebar } from './componentes/Sidebar'
import { Post } from './componentes/Post'

import fotoPessoa from "./assets/foto.png"

import "./global.css"

import style from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: { fotoPessoa },
      name: 'Gabriel Medeiros',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: "👉{' '}jane.design/doctorcare< " }
    ],
    publishAt: new Date('2022-10-18')
  },
  {
    id: 2,
    author: {
      avatarUrl: { fotoPessoa },
      name: 'Gabriel Medeiros 2',
      role: 'Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: "👉 jane.design/doctorcare< " }
    ],
    publishAt: new Date('2022-10-17')
  }
]


export function App() {


  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}

              />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App
