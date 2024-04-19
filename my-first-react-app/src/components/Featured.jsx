import { Nav1, Nav2, Contact, Footer, Return } from "../App";
import { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

export function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[categories[]._ref=='c763b87f-0d8e-4b36-be4a-0a71e064495d']{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        },
        body,
        "author": author->name


    }`
      )
      .then((data) => setPost(data, console.log(data)))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section className="container">
        <h1>Welcome to my Featured blogs</h1>
        <h2>Have a great read</h2>
        <div className="posts">
          {postData &&
            postData.map((post, index) => (
              <article className="article" key={index}>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <img
                      className="pic"
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                    <span>
                      <h3 className="title">{post.title}</h3>
                      <span className="info">
                        {post.body[0].children[0].text}
                      </span>
                      <p>By: {post.author}</p>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
export default function All() {
  return (
    <main>
      <Nav1></Nav1>
      <Nav2></Nav2>
      <p> Featured Articles </p>
      <Post />
      <Contact></Contact>
      <Footer></Footer>
      <Return></Return>
    </main>
  );
}
