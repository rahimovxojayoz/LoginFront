import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {
  return (
    <main className="container mx-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
