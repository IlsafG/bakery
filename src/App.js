import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
      <div class="follow-cursor"></div>
    </div>
  );
}

export default App;
