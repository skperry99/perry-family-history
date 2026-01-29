import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AncestorPage from "./pages/AncestorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LinesPage from "./pages/LinesPage.jsx";
import StoryPage from "./pages/StoryPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lines" element={<LinesPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ancestor/:id" element={<AncestorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;