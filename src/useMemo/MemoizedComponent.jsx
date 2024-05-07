import { useState, useMemo } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Shoes', price: 50, quantity: 0 },
        { id: 2, name: 'T-Shirt', price: 20, quantity: 0 },
        { id: 3, name: 'Jeans', price: 70, quantity: 0 }
    ]);

    const handleQuantityChange = (productId, newQuantity) => {
        const updatedProducts = products.map(product =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
        );
        setProducts(updatedProducts);
    };

    // Memoize the totalPrice calculation
    const totalPrice = useMemo(() => {
        return calculateTotalPrice(products);
    }, [products]);

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onQuantityChange={handleQuantityChange}
                />
            ))}
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

// Function to calculate total price based on selected products
const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
};

export default ProductList;
