import "./assets/css/style.min.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [actualPage, setActualPage] = useState("main");

  function handlePage(page) {
    setActualPage(page);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-darkgray">
                <Header callbackDetailPage={handlePage} />
                <Main />
                <Footer />
              </div>
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
