import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
          impedit sed, distinctio est reprehenderit fugiat incidunt non libero
          perspiciatis et laborum facilis ipsam, deleniti dolorum quibusdam sunt
          asperiores error corporis! Perferendis incidunt quae deserunt
          perspiciatis aut esse rem, excepturi ratione ad porro nobis enim
          ducimus libero id doloribus! Repellat.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et quo
          quam odit optio obcaecati dolorum? Dolores, ex? Molestias nisi
          deleniti rerum iure distinctio esse dolore quo facere iste neque.
          Ullam qui cupiditate eos assumenda ratione adipisci omnis quam officia
          porro. Adipisci a nobis recusandae ipsa tempora exercitationem,
          blanditiis quam?
        </p>
      </div>
    </div>
  );
};

export default About;
