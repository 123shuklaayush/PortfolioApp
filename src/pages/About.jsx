import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/About.css";
// import IconCloud from "../components/IconCloud";

function About() {
  return (
    <>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{"<html>"}</span>
              <br />
              <span className="span-tag body">{"<body>"}</span>
              <br />
              <span className="span-tag content">{"<h1>"}</span>
              <h1 className="title-about">Hello Hello,</h1>
              <span className="span-tag content">{"</h1>"}</span>
              <br />
              <span className="span-tag content">{"<p>"}</span>
              <p className="text-about">
                My name is <span className="span-highlight">Ayush Shukla</span>,
                and I have a background in Electronics and Communication
                Engineering. While I've already gained experience in
                development, I'm currently focused on advancing my skills in{" "}
                <span className="span-highlight">
                  Web Full Stack Development
                </span>
                . I enjoy tackling challenges through coding and am
                well-equipped to assist clients with their needs.
              </p>

              <p className="text-about">
                My passion lies in improving people's lives through the
                development of applications that prioritize both{" "}
                <span className="span-highlight">
                  accessibility and functionality
                </span>
                . I bring a strong foundation in troubleshooting and testing,
                along with the ability to collaborate effectively within team
                environments. Eager to contribute my skills and learn from new
                challenges in the dynamic field of software development.
              </p>

              
              <span className="span-tag content">{"</p>"}</span>
              <br />
              <span className="span-tag body">{"</body>"}</span>
              <br />
              <span className="span-tag html">{"</html>"}</span>
            </div>
            {/* <IconCloud /> */}
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </>
  );
}

export default About;
