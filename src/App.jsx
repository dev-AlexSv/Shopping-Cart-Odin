import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button.jsx";
import { Header } from "./components/Header.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header></Header>
            <Button label="Click" type="button"></Button>
        </>
    );
}

export default App;
