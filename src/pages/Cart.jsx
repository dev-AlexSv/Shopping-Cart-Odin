import "../styles/items.css";
import "../styles/cart.css";
import { useOutletContext } from "react-router";
import { Button } from "../components/Button.jsx";

export function Cart({}) {
    const { items, cart, setCart } = useOutletContext();

    return (
        <>
            <div className="cart-layout">
                <div id="left-layout">
                    <h2>Your Cart</h2>
                    <div id="cart-items">
                        {cart.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <p>${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="right-layout">
                    <h2>Checkout</h2>
                    <p>
                        Total:{" "}
                        {cart.reduce((price, item) => {
                            return price + item.price;
                        }, 0)}
                    </p>
                    <Button
                        label="Checkout"
                        type="button"
                        onClick={() => setCart([])}
                    ></Button>
                </div>
            </div>
        </>
    );
}
