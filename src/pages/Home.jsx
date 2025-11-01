// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import SideBar from "../sidebar/SideBar";

function Home() {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <SideBar/>
      {/* <Outlet/> */}
      {/* <Navbar /> */}
      {/* <Portfolio/> */}

      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default Home;
