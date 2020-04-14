import React from 'react';

const Post = () => (
  <div className="post">
    <div className="container">
      <section className="post-header">
        <img src="https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/post.png?alt=media&token=01feb409-2585-4ffd-a9d1-11d84524f96d" alt="" />
      </section>
      <section className="post-title">
        <h1>Titulo del Post</h1>
      </section>
      <section className="post-conent">
        <h2 className="subtitle-1">Subtituo 1</h2>
        <h3 className="subtitle-2">Subtitulo 2</h3>
        <p className="pharagraph">Parrafo de texto</p>
      </section>
    </div>
  </div>
);

export default Post;
