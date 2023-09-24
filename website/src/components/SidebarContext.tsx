import { createContext, useContext, useState } from 'react';

export const SidebarContext = createContext<any>(null);

export const SidebarProvider = ({ children }: { children: JSX.Element }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};