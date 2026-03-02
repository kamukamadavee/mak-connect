import { Link } from "react-router-dom"
const Post = ({ post }) => {
    return(
        <div>
        
            <Link to={`./post/${post.id}`}>
                 <h3>{post.title}</h3>
            </Link>
             <p>
                {(post.body).length <= 25
                ? post.body
                : `${(post.body).slice(0, 25)}...`}
            </p>
           
        </div>
    )
}

export default Post