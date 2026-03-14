import "../styles/items.css";
import "../styles/cart.css";

export function Cart({ items }) {
    return (
        <>
            <div id="left-layout">
                <h2></h2>
                <div id="cart-items"></div>
            </div>
            <div id="right-layout">
                <h2>Checkout</h2>
            </div>
        </>
    );
}
