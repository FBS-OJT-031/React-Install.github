import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./components/pages/NotFound"
import Home from "./components/pages/developer/ui/home/Home"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* FOR NOT FOUND 404 PAGE */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>

    </>
  )
}
export default App
