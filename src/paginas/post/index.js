import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "components/postModelo";
import Markdown from "react-markdown";
import './post.css'
import NaoEncontrada from "paginas/naoEncontrada";
import PaginaPadrao from "components/paginaPadrao";
import PostCard from "components/postCard";

export default function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id == parametros.id;
    })

    if(!post) {
        return <NaoEncontrada />
    }

    console.log(post);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo 
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <Markdown>
                                {post.texto}
                            </Markdown>
                        </div>

                        <div>
                            <h2 className="tituloOutrosPosts">Outros posts que você pode gostar:</h2>
                            <div className="postsRecomendados">
                                {posts.map(recomendados => {
                                    if(recomendados.id == post.id){
                                        return ''
                                    }else{
                                        return (
                                            <PostCard post={recomendados} />
                                        )
                                    }
                                })}
                                
                            </div>
                        </div>
                </PostModelo>
                } />
            </Route>
        </Routes>
    )
}