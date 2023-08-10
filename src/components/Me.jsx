import React from "react";
import img from "../assets/mypic.jpg";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
const Me = () => {
  return (
    <main>
      <div className="hero">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="info">
          <h1>Ketan Verma</h1>
          <p>
            I am Full Stack Web Developer with <b> MERN</b>. I love to make
            projects for fun and love to learn new things.
          </p>
          <ul>
            <a href="https://www.linkedin.com/in/ketan-verma-694174223/">
              <li>
                <FaLinkedin />
              </li>
            </a>
            <a href="https://github.com/Ketan-Verma">
              <li>
                <FaGithub />
              </li>
            </a>
            <a href="https://www.youtube.com/@ketancodes5544">
              <li>
                <FaYoutube />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Me;
