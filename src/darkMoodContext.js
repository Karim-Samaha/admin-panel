import { createContext, useState } from "react";

export const DarkMoodContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkMood, setDarkMood] = useState(false);
    const toggleDarkMood = () => {
        setDarkMood(!darkMood)
    }
    return <DarkMoodContext.Provider value={{
        darkMood,
        toggleDarkMood
    }}>
        {children}
    </DarkMoodContext.Provider>
}