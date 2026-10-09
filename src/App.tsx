
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/shared/Header.component";
import Footer from "./components/shared/Footer.component";

import Home from "./pages/Home";
import Gallery from "./pages/Photos";
import Videos from "./pages/Videos";
import AboutArchie from "./pages/AboutArchie";
import VisitorMessage from "./pages/VisitorMessage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about-archie" element={<AboutArchie />} />
          <Route path="/visitor-message" element={<VisitorMessage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
