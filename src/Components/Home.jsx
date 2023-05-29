import React from "react";
import "../styles/Home.css";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main className="home-main">
          <h1>TechyStar</h1>
          <p>Solution to all your tech problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="homeimage" />
        <div className="home2-text">
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
            euismod sem, eget consequat quam. Proin maximus eros vel mi viverra
            congue. Nunc commodo tincidunt sapien, sit amet rutrum velit ornare
            et. Vestibulum in turpis at neque venenatis mollis. Fusce sit amet
            massa ac augue dapibus vestibulum. Fusce et lectus justo. Nullam
            luctus risus eu nibh vestibulum maximus. Vestibulum faucibus tempor
            iaculis. Cras faucibus, enim ac ornare gravida, orci tellus
            ullamcorper massa, bibendum blandit elit magna at nisi. Pellentesque
            quis lectus et ante ornare sagittis quis sed arcu. Etiam commodo
            odio a lacinia feugiat.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <article>
          <h1> Brands </h1>
          <div className="home4-icons-div">
            <div style={{animationDelay: "0.2s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.8s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{animationDelay: "1.1s"}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Home;
