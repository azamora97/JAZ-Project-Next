import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTheme } from "@/shared/hooks/useTheme";

describe("useTheme hook", () => {
    it("lanza error si se usa fuera del Provider", () => {
        const consoleError = vi
            .spyOn(console, "error")
            .mockImplementation(() => { });

        expect(() => renderHook(() => useTheme())).toThrow(
            "useTheme must be used inside ThemeProvider"
        );

        consoleError.mockRestore();
    });
});