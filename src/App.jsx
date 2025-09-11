import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import CategoryDetail from "./pages/CategoryDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/home" element={<Body />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<CategoryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
