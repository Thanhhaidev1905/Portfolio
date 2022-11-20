import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I’m Hai! Call me Harry. I’m 25 years old. I was born and grew up in
          Vung Tau province, but I have been working in HCM City.
        </p>
        <br />
        <p className="text-xl">
          I’m active. I like work related to human beings and . I’m rather
          serious and sensitive, I can quickly catch up psychology of other
          people as an avid learner, there is always a spirit of progressive,
          sociable, enthusiastic, fun, .... I prefer to work in a smaller team
          where I can see the direct impact I have on a project, that’s the
          reason why I applied for this job to you today…
        </p>
      </div>
    </div>
  );
};

export default About;
