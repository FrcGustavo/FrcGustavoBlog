/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import config from '../config';

const { api } = config;

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
            <img src={post.cover} alt="" />
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

Post.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default Post;
