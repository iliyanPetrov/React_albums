import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx/Navbar";
import Footer from "./components/Footer/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import TestHome from "./pages/TestHome";
import TestAlbum from "./pages/TestAlbum";

function App() {
    const client = new QueryClient();
    return (
        <div className="app">
            <QueryClientProvider client={client}>
                <Router>
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<TestHome />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route
                                path="/album/:id"
                                element={<TestAlbum />}
                                exact
                            />
                            <Route
                                path="*"
                                element={<h1>Error: 404 page not found..</h1>}
                            />
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </QueryClientProvider>
        </div>
    );
}

export default App;
