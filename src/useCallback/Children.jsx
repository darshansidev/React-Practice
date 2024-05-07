

const ChildComponent = (props) => {
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={() => props.onItemClick(1)}>Simulate Click Item 1 from Child</button>
        </div>
    );
};

export default ChildComponent;
