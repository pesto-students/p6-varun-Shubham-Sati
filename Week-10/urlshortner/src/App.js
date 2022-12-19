import "./App.css";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LinkPage from "./components/linkpage/LinkPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [links, setLinks] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            path="/"
            element={<Body setLinks={setLinks} links={links} />}
          />
          <Route path="/links" element={<LinkPage links={links} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
