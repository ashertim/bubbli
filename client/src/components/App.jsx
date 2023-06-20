// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import '../css/App.css'

import Home from './Home';
// import Header from './Header';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    </Router>
  )
}

export default App