import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Contact.css";
import IconCloud from "../components/IconCloud";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import redux from "../assets/redux.png";
import mongodb from "../assets/mongodb.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import docker from "../assets/docker.png";
import firebase from "../assets/firebase.png";
import express from "../assets/express.png";
import postman from "../assets/postman.png";
import vscode from "../assets/vscode.png";
import "../styles/Recommendation.css"
function Recommendation() {
  return (
    <>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper contact">
            <div className="title-container">
              <h1 className="title-contact">
                Skills{" "}
                <span role="img" aria-label="call me">
                  🤙
                </span>
              </h1>
              <main className="message-contact">
                {/* Frontend  */}
                <section className="image-container">
                <img className="icon-image" src={html} alt="" />
                <img className="icon-image" src={css} alt="" />
                <img className="icon-image" src={javascript} alt="" />
                <img className="icon-image" src={typescript} alt="" />
                <img className="icon-image" src={reactjs} alt="" />
                <img className="icon-image" src={tailwind} alt="" />
                <img className="icon-image" src={redux} alt="" />
                <img className="icon-image" src={figma} alt="" />
                </section>

                {/* Backend  */}
                <section className="image-container">
                <img className="icon-image" src={nodejs} alt="" />
                <img className="icon-image" style={{width : "180px"}} src={express} alt="" />
                </section>

                {/* DataBases */}
                <section className="image-container">
                <img className="icon-image" src={firebase} alt="" />
                <img className="icon-image" src={mongodb} alt="" />
                </section>

                {/* Developer Tools */}
                <section className="image-container">
                <img className="icon-image" src={git} alt="" />
                <img className="icon-image" src={docker} alt="" />
                <img className="icon-image" src={postman} alt="" />
                <img className="icon-image" src={vscode} alt="" />
                </section>
              </main>
            </div>
            <div className="list-contact">
              <IconCloud/>
            </div>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </>
  );
}

export default Recommendation;
