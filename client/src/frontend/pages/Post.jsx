import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { api } from '../config';

const Post = (props) => {
  const [post, setPost] = useState(false);
  useEffect(() => {
    if (!post) {
      fetch(`${api}/posts/${props.match.params.slug}`)
        .then((res) => res.json())
        .then((json) => setPost(json.data));
    }
  });
  if (!post) return <div>Cargando</div>;
  return (
    <>
      <div className="post">
        <div className="container">
          <section className="post-header">
            <img src="https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/post.png?alt=media&token=01feb409-2585-4ffd-a9d1-11d84524f96d" alt="" />
          </section>
          <section className="post-title">
            <h1>{post.title}</h1>
          </section>
          <section className="post-conent" dangerouslySetInnerHTML={{ __html: post.post }} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
