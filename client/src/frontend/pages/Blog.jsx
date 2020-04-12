import React from 'react';
import { Link } from 'react-router-dom';

import post from '../assets/img/post.png';

const Blog = () => (
  <div className="blog">
    <div className="card-principle">
      <div className="container">
        <img src={post} alt="" />
        <div className="card-info">
          <h1>Titulo del post</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a fugiat soluta consequatur nisi sunt.</p>
          <Link className="btn btn-primary" to="/">Leer más</Link>
        </div>
      </div>
    </div>
    <section className="gird-cards">
      <div className="container">
        <article className="card-post">
          <img src={post} alt="" />
          <div className="card-info">
            <h1>Titulo del post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a fugiat soluta consequatur nisi sunt.</p>
            <Link className="btn btn-primary" to="/">Leer más</Link>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export default Blog;
