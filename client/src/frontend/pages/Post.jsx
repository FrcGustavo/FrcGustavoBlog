import React, { useEffect, useState } from 'react';
import { api } from '../config';
const html = '<h2 className="subtitle-1">Subtituo 1</h2>\n<h3 className="subtitle-2">Subtitulo 2</h3>\n<p className="pharagraph">Parrafo de texto</p\n';
const Post = (props) => {  
  const [post, setPost] = useState(false);
  useEffect(() => {
    if(!post) {      
      fetch(`${api}/posts/${props.match.params.slug}`)
      .then(res => res.json())
      .then(json => setPost(json.data));
    }
  });
  if(!post) return <div>Cargando</div>;
  const content = post.post.split('\n');
  console.log();
  return (
    <div className="post">
      <div className="container">
        <section className="post-header">
          <img src="https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/post.png?alt=media&token=01feb409-2585-4ffd-a9d1-11d84524f96d" alt="" />
        </section>
        <section className="post-title">
          <h1>{post.title}</h1>
        </section>
        <section className="post-conent">
          {
            post.post
          }
          <h2 className="subtitle-1">Subtituo 1</h2>
          <h3 className="subtitle-2">Subtitulo 2</h3>
          <p className="pharagraph">Parrafo de texto</p>
        </section>
      </div>
    </div>
  );
};

export default Post;
