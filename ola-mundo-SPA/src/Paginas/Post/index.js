import { useParams } from "react-router-dom"
import "./Post.css"
import posts from "assets/json/posts.json"
import PostModelo from "Componentes/PostModelo";
import ReactMarkdown from "react-markdown"


const Post = () => {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

        </PostModelo>
    )
}

export default Post