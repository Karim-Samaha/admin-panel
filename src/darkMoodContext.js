import { createContext, useState } from "react";

export const DarkMoodContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkMood, setDarkMood] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const toggleDarkMood = () => {
        setDarkMood(!darkMood)
    }
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return <DarkMoodContext.Provider value={{
        darkMood,
        toggleDarkMood,
        sidebarOpen,
        toggleSidebar
    }}>
        {children}
    </DarkMoodContext.Provider>
}