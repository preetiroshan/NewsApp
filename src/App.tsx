import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/screens/HomePage";
import PublisherPage from "./components/screens/Publisher";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:publisher" element={<PublisherPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
