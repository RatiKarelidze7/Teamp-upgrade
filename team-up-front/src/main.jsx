import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import { FindDeveloper } from "./components/Pages/FindDeveloper/FindDeveloper.jsx";
import { Requests } from "./components/Pages/Request/Requests.jsx"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/find" element={<FindDeveloper />} />
            <Route path="/Requests" element={<Requests />} />
        </Routes>
    </BrowserRouter>
)
