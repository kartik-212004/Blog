import Content from "./content"
import Footer from "./footer"
import Navbar from "./navbar"
import About from "./about"
import ContactPage from "./contact"
import Pages from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="font-new flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="px-20 flex-grow">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pages" element={<Pages />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
