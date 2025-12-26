import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import OurStoryPage from "./pages/OurStoryPage";
import TimelinePage from "./pages/TimelinePage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import FamiliesPage from "./pages/FamiliesPage";
import TravelPage from "./pages/TravelPage";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/families" element={<FamiliesPage />} />
          <Route path="/travel" element={<TravelPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
