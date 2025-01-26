import React from "react";
import picture1 from "../../assets/picture1.jpg"
import picture2 from "../../assets/picture2.png"
import smilingman from "../../assets/smilingman.jpg"

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-pink-500 to-blue-800 text-white text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 mt-36">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Welcome to Hiresmart, where technology transforms hiring. We leverage machine learning to streamline resume screening, helping recruiters find top talent quickly and efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
          <div>
            <img
              src={picture1}
              alt="Team collaboration"
              className="rounded-lg shadow-md w-full h-80 object-cover"
            />
          </div>
          <div>
            <img
              src={picture2}
              alt="Mission"
              className="rounded-lg shadow-md w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg md:text-xl mb-8">
            To simplify recruitment by providing a seamless, data-driven resume screening solution that benefits both employers and job seekers.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gradient-to-b from-blue-800 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 items-center">
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-3xl font-semibold">Automated Screening</h3>
                <p className="text-lg">
                  Our system analyzes resumes and ranks candidates based on predefined job requirements.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Key Insights</h3>
                <p className="text-lg">
                  Extracts critical details like skills, education, and experience for deeper understanding.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Unbiased Selection</h3>
                <p className="text-lg">
                  Ensures a fair, objective, and data-driven approach to hiring.
                </p>
              </div>
            </div>
            <div>
              <img
                src={smilingman} 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
