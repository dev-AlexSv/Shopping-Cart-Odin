import "../styles/button.css";

export function Button({ label, onClick, type = "button" }) {
    return (
        <button type={type} onClick={onClick}>
            {label}
        </button>
    );
}
