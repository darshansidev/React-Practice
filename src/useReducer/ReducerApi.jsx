import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react"

// Initial state for the reducer
const initialState = {
    loading: false,
    error: '',
    data: null
};

// Reducer function to manage state transitions
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload, error: '' };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const ReducerApi = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_START' });

            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching data' });
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {state.loading && <p>Loading....</p>}
            {
                state.data && (state.data).map((product, index) => <p key={index} >{product.title}</p>)
            }
            {state.error && <p>Error: {state.error}</p>}

        </>
    )
}

export default ReducerApi