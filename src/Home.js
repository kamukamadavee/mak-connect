import Feed from './Feed'

const Home = ({ posts}) =>{

    return(
        <main>
            
            <div>
                {posts.length ?
                    (<Feed posts={posts}/>):
                     (
                        <p style={{marginTop: "2erm"}}>
                            no posts to display
                        </p>
                    )}
            </div>
        </main>
    )
}

export default Home