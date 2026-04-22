// ✅ Client Component — usa hooks
'use client';

import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used inside ThemeProvider");
    return context;
};