import "../styles/header.css";

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
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Your Cart</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
