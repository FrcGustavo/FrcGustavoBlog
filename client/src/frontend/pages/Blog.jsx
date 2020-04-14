import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardPost from '../components/CardPost';

const post = 'https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/post.png?alt=media&token=01feb409-2585-4ffd-a9d1-11d84524f96d';

const Blog = () => {
  const [posts, setPosts] = useState(false);
  useEffect(() => {
    if (!posts) {
      fetch('http://localhost:8080/api/posts/')
        .then((res) => res.json())
        .then((json) => setPosts(json.data));
    }
    console.log(posts);
  });
  console.log(posts);
  if (!posts) return <div>Cargando</div>;
  return (
    <div className="blog">
      <div className="card-principle">
        <div className="container">
          <img src={post} alt="" />
          <div className="card-info">
            <h1>Titulo del post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a fugiat soluta consequatur nisi sunt.</p>
            <Link className="btn btn-primary" to="/my-first-blog">Leer más</Link>
          </div>
        </div>
      </div>
      <section className="gird-cards">
        <div className="container">
          {
            posts.map((post, idx) => (<CardPost key={idx} post={post} />))
          }
        </div>
      </section>
    </div>
  );
};

export default Blog;
