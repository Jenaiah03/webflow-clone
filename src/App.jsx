import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Enterprise from './pages/Enterprise/Enterprise'


function App() {
return (
<>
<Router>
<Routes>
<Route path="/" element={<Enterprise/>} />
{/* <Route path="/platform" element={<Platform />}
/>
<Route path="/solutions" element={<Solutions />}
/> */}
</Routes>
</Router>
</>
);
}

export default App
