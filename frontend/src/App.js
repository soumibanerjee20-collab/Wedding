import { useState } from "react";
import "./App.css";

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

  if (!authenticated) {
    return (
      <div className="password-screen">
        <div className="password-card animate-fadeIn">
          <h1 className="font-display text-gold">Soumi & James</h1>
          <p className="font-cormorant text-sage">
            Please enter the password to view our wedding website
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

  return (
    <div className="App">
      {/* Your existing site content */}
    </div>
  );
}

export default App;
