import { createContext, useState } from 'react';

export const store = createContext();

export function StoreProvider({ children }) {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('');

    return (
        <store.Provider value={{ data, setData, category, setCategory }}>
            {children}
        </store.Provider>
    );
}
