import { useState, useCallback } from 'react';
import ChildComponent from './Children';



const ParentComponent = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]);

    // Memoized callback using useCallback
    const handleItemClick = useCallback((itemId) => {
        const updatedItems = items.map(item => {
            if (item.id === itemId) {
                // Simulating an update to the item (e.g., marking as clicked)
                return { ...item, clicked: true };
            }
            return item;
        });
        setItems(updatedItems);
    }, [items]); // Dependency array includes items to avoid unnecessary re-creation

    return (
        <div>
            <h2>Items List:</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        {!item.clicked && (
                            <button onClick={() => handleItemClick(item.id)}>Click me</button>
                        )}
                        {item.clicked && <span> - Clicked!</span>}
                    </li>
                ))}
            </ul>
            <hr />
            <ChildComponent onItemClick={handleItemClick} />
        </div>
    );
};

export default ParentComponent;




