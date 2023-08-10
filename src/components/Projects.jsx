import React from "react";
import Card from "./Card";
const Projects = () => {
  return (
    <div>
      <div className="card-container">
        <Card
          colr={"#91C8E4"}
          slink={"https://ketan-verma.github.io/Crypto-Landing-page/"}
          headtxt={"Crypto Site"}
          img={"https://cdn-icons-png.flaticon.com/512/7047/7047060.png"}
          text={"This is a landing Page for a cryptosite."}
        />
        <Card
          colr={"#F4D160"}
          slink={"https://ketan-verma.github.io/rockpaperscissorsai/"}
          headtxt={"AI Game"}
          img={"https://cdn-icons-png.flaticon.com/512/826/826118.png"}
          text={"This is a simple game made using tensorflow.js library."}
        />
        <Card
          colr={"#AED8CC"}
          slink={"https://www.linkedin.com/in/ketan-verma-694174223/"}
          headtxt={"Linkedin Profile"}
          img={
            "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
          }
          text={"Most of my projects are on my linkedin profile."}
        />
        <Card
          colr={"#F31559"}
          slink={"https://github.com/Ketan-Verma/"}
          headtxt={"Github Profile"}
          img={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
          text={"You Can checkout my repositories here."}
        />
      </div>
    </div>
  );
};

export default Projects;
