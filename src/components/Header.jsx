import "../styles/header.css";
import { Link } from "react-router";

export function Header() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <a href="#" className="logo">
                        Los Costa
                    </a>
                    <ul class="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="products">Products</Link>
                        </li>
                        <li>
                            <Link to="cart">Cart</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
