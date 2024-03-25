import { Nav1, Nav2, Contact, Footer, Return } from "../App"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import sanityClient from '../client'

export function Post(){
    const[postData, setPost] = useState(null)

    useEffect(()=>{
        sanityClient.fetch( `*[_type == 'post' ]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            body,author
        }`)
        .then((data)=>setPost(data, console.log(data)))
        .catch(console.error)
    }, [])


return(
    <main>
        <section>
            <h1>Welcome to my blogs</h1>
            <h2>Have a great read</h2>
            <div>
                {postData && postData.map((post, index)=>(
                <article key={index}>
                    <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                    <span key ={index}>
                        <img 
                         src={post.mainImage.asset.url}
                         alt={post.mainImage.alt} 
                        />
                        <span>
                            <h3>{post.title}</h3>
                            <span>{post.body[index].children[index].text}</span>
                        </span>
                        
                    </span>
                    </Link>
                </article>
                ))}
            </div>
        
        </section>
    </main>
)
}

export default function All(){
    return (
        <main>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <Post/>
            <Contact></Contact>
            <Footer></Footer>
            <Return></Return>

        </main>
        )
}