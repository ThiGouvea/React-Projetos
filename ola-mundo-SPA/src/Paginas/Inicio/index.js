import styles from "./Inicio.module.css";
import posts from "assets/json/posts.json"
import Post from "Componentes/PostCard";

const Inicio = () => {
    return (
        <ul className={styles.posts}>
            {posts.map(post => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}

        </ul>
    )
}

export default Inicio