import { useParams, Link } from "react-router-dom"

const Postpage = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)
    
    return(
        <main>
            <article>
              {post &&
               <>                  
                     <h3>{post.title}</h3>
                     <p>{post.body}</p>
                </>     
                }
            </article>
        </main>
    )
}

export default Postpage