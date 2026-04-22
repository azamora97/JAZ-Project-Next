// ✅ Client Component — usa hooks
'use client';
import { debounce } from "..//utils/debounce";
import React from "react";

export const useDebounce = <A extends unknown[], R>(
    callback: (...args: A) => R,
    delay = 300,
) => {
    const debouncedFunction = React.useMemo(() => {
        return debounce(callback, delay);
    }, [callback, delay]);
    return debouncedFunction;
};