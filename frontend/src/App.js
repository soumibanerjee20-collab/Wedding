import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AudioProvider } from "./context/AudioContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OurStoryPage from "./pages/OurStoryPage";
import TimelinePage from "./pages/TimelinePage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import FamiliesPage from "./pages/FamiliesPage";
import TravelPage from "./pages/TravelPage";
import RSVPPage from "./pages/RSVPPage";
import GuestbookPage from "./pages/GuestbookPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");

  const password = "AdamsBanerjee2026";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === password) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password 🤍");
    }
  };

  // 🔐 PASSWORD SCREEN
  if (!authenticated) {
  return (
    <div className="password-screen">
      <div className="password-card animate-fadeIn">
        <h1>Soumi & James</h1>
        <p>
          You Are Cordially Invited
          <br />
          Kindly enter the password to continue
        </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>
    );
  }

  // 💍 FULL WEBSITE (UNCHANGED STRUCTURE)
  return (
    <div className="App">
      <AudioProvider>
        <Toaster position="top-center" richColors />
        <BrowserRouter>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/our-story" element={<OurStoryPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/families" element={<FamiliesPage />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/rsvp" element={<RSVPPage />} />
              <Route path="/guestbook" element={<GuestbookPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AudioProvider>
    </div>
  );
}

export default App;
