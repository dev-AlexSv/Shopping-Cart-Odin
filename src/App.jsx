import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";

function App() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header></Header>
            <Home></Home>
        </>
    );
}

export default App;
