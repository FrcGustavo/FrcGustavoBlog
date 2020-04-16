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
  const firstPost = posts.shift();
  return (
    <>
      <div className="blog">
        <div className="card-principle">
          <div className="container">
            <img src={firstPost.cover} alt="" />
            <div className="card-info">
              <h1>{firstPost.title}</h1>
              <p>{firstPost.description}</p>
              <Link className="btn btn-primary" to={firstPost.slug}>Leer más</Link>
            </div>
          </div>
        </div>
        <section className="gird-cards">
          <div className="container">
            {
              posts.map((post) => (<CardPost key={post.title} post={post} />))
            }
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
