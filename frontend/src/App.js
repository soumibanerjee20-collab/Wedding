import React from "react";
import "./App.css";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Families from "./components/Families";
import Travel from "./components/Travel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Timeline />
        <Events />
        <Gallery />
        <Families />
        <Travel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
