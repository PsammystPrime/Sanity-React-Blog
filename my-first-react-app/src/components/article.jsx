import { Nav2, Footer, Return } from "../App";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";

export function SinglePosts() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
    title,
    'body': body[0].children[0].text,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },
    'author': author->name
}`
      )
      .then((data) => setSinglePost(data[0], console.log(data)))
      .catch(console.error());
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main>
      <article>
        <h1>{singlePost.title}</h1>
        <header>By: {singlePost.author}</header>
        <img src={singlePost.mainImage.asset.url} alt="" />
        <p>{singlePost.body}</p>
      </article>
    </main>
  );
}

export default function SinglePost() {
  return (
    <main>
      <Nav2></Nav2>
      <SinglePosts />
      <Footer></Footer>
      <Return></Return>
    </main>
  );
}
