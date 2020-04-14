/* eslint-disable max-len */
import React from 'react';

import GithubIcon from '../components/icons/GithubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

const frcgustavo = 'https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/frcgustavo.jpg?alt=media&token=2cb8e891-4281-47bd-9673-86ad56812204';
const Home = () => (
  <div className="home">
    <section className="home-info">
      <div className="home-img">
        <img src={frcgustavo} alt="FrcGustavo" />
      </div>
      <div className="home-info-container">
        <h1>Francisco Gustavo</h1>
        <h2>Desarrollador JavaScript Frontend | Backend</h2>
        <p>Hola yo soy Gustavo y me ecataria que me acompañes en esta aventura de constante aprendisaje</p>
        <div className="icons home-icons">
          <GithubIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      </div>
    </section>
    <section className="home-post">
      <article className="card-main-post">
        <img src="https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/post.png?alt=media&token=01feb409-2585-4ffd-a9d1-11d84524f96d" alt="" />
        <div className="card-post-info">
          <h3>Titulo del post</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam error ullam qui? Magnam, ipsa eos voluptates rem omnis quam ut incidunt exercitationem inventore, minima dolore soluta. Vel iste necessitatibus recusandae.</p>
          <button type="button" className="btn btn-primary">Leer más</button>
        </div>
      </article>
    </section>
  </div>
);

export default Home;
