const ProductItem = ({ product, onQuantityChange }) => {
    const { id, name, price, quantity } = product;

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        onQuantityChange(id, newQuantity);
    };

    return (
        <div>
            <p>{name} - ${price}</p>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
            />
        </div>
    );
};

export default ProductItem;
