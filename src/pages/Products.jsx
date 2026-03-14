import "../styles/items.css";
import "../styles/products.css";
import { useOutletContext } from "react-router";

export function Products({ loading }) {
    const { items, cart, setCart } = useOutletContext();

    return (
        <>
            <h1>Products</h1>
            <div id="shop-items">
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    items.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                            <button onClick={() => setCart([...cart, item])}>
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}
