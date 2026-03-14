import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { Outlet } from "react-router";

function App() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const value = await fetchProducts();
                setItems(value);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    console.log(items);

    return (
        <>
            <Header></Header>
            <Outlet context={{ items, loading, cart, setCart }}></Outlet>
        </>
    );
}

async function fetchProducts() {
    try {
        // Fetch all products
        const response = await fetch("https://fakestoreapi.com/products");

        // Convert response to JSON
        const products = await response.json();

        // Do something with the data
        console.log(products);

        // Optionally return the list
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

export default App;
