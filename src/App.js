import React from "react";
import Banner from "./components/navbar/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Features from "./components/navbar/experience/Features";
import Resume from "./components/resume/Resume";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2x1 mx-auto px-16">
          <Navbar/>
          <Banner/>
          <Features/>
          <Resume/>
      </div>
    </div>
  );
}

export default App;
