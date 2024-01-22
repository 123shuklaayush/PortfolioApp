import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import "../styles/Home.css";
import image from "../images/backpg.png";
import { FiDownload } from "react-icons/fi";
import MenuMobile from "../components/MenuMobile";
import Typical from "react-typical";

function Home() {
  return (
    <>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p>
                <span role="img" aria-label="Wave">
                  {"<"}
                </span>
                Hi 👋 I am
              </p>
              <h1>
                Ayush Shukla <span className="span">{"/>"}</span>{" "}
              </h1>
              <Typical
                steps={[
                  "MERN Stack Developer",
                  1000,
                  "Web Development Student",
                  1000,
                ]}
                loop={Infinity}
                wrapper="h2"
              />
              <a
                href="https://drive.google.com/drive/folders/1uQi1SHb6IQk_7CCr7sHVi0EhG6M2pZbw"
                target="_blank"
                className="btn-download"
                rel="noopener noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>
            <img
              src={image}
              alt="Ayush Shukla's profile"
              className="image-perfil"
            />
          </main>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Home;
