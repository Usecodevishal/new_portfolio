import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TopGridImage from "./components/TopGridImage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return (
    <>
      <Header />
      <TopGridImage/>
      <Home ratio={ratio}/>
      <Work/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
