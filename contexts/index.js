import React, { createContext, useContext, useState } from 'react';

const menuContext = createContext();

export const useMenuContext = () =>  useContext(menuContext);
export const _MenuContext = ({ children }) => {
    const [navState, setOpen] = useState(false);
    
    return <menuContext.Provider value={{
        navState,
        openMenu: () => setOpen(true),
        closeMenu: () => setOpen(false),
        collapseMenu: () => setOpen(prev => !prev)
    }}>
        { children }
    </menuContext.Provider>
}