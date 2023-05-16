import React from "react";
import github from "../assets/github.svg";

const About = () => {
  return (
    <div className="home flex flex-row align-middle justify-between" id="about">
      <div className="left w-1/2">
        <h1 className="mt-48 font-fira font-extrabold text-[#ffffff] text-center text-[64px]">
          About
        </h1>
        <p className="mt-5 max-sm:m-5 text-[#2f9393] text-[24px] w-3/4 mx-auto">
          Project Sean is a collaborative initiatie that utilizes an Machine
          Learning model trained on the IMDB dataset to classify the sentiment
          of text, leveraging the power of TensorFlow and Keras. While
          continuously improving accuracy, we strive to provide valuable
          insights into the nature of comments and classify the sentiment of
          text, particularly focusing on movie reviews.
        </p>
        <div className="max-sm:mx-9 font-normal text-white absolute bottom-0 left-0 mb-8 ml-8 flex flex-row items-center">
          Follow us on Github:
          <a href="https://github.com/Nyx1on/project-sean-fs">
            <img src={github} alt="github icon" className="mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
