import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardPost from '../components/CardPost';
import Footer from '../components/Footer';

const Blog = () => {
  const [posts, setPosts] = useState(false);
  useEffect(() => {
    if (!posts) {
      fetch('http://localhost:8080/api/posts/')
        .then((res) => res.json())
        .then((json) => setPosts(json.data));
    }
  });

  if (!posts) return <div>Cargando</div>;
  const post = posts.shift();
  return (
    <>
      <div className="blog">
        <div className="card-principle">
          <div className="container">
            <img src={post.cover} alt="" />
            <div className="card-info">
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <Link className="btn btn-primary" to={post.slug}>Leer más</Link>
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
      <Footer />
    </>
  );
};

export default Blog;
