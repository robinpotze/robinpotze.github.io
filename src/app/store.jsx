import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const [workItems, setWorkItems] = useState([]);

    const value = {
        theme,
        setTheme,
        workItems,
        setWorkItems,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useApp must be used within AppProvider');
    return ctx;
}

export default AppProvider;
