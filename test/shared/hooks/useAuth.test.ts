import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useAuth } from "@/shared/hooks/useAuth";

describe("useAuth hook", () => {
    it("lanza error si se usa fuera del Provider", () => {
        const consoleError = vi
            .spyOn(console, "error")
            .mockImplementation(() => { });

        expect(() => renderHook(() => useAuth())).toThrow(
            "useAuth must be used within an AuthProvider"
        );

        consoleError.mockRestore();
    });
});