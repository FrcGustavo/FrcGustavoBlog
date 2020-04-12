/* eslint-disable max-len */
import React from 'react';

import GithubIcon from '../components/icons/GithubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

import frcgustavo from '../assets/img/frcgustavo.jpg';

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
        <img src="" alt="" />
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
