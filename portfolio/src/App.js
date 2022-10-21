import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Main>
      <Header />
      <About />
      <Contact />
      <Projects />
    </Main>
  );
}

export default App;
