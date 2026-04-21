import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useAddProjetForm } from "@/features/projects/hooks/useFormProject";

describe("useAddProjetForm", () => {
    it("inicia con valores vacíos", () => {
        const { result } = renderHook(() => useAddProjetForm());

        expect(result.current.values).toEqual({
            name: "",
            description: "",
        });

        expect(result.current.errors).toEqual({});
        expect(result.current.touched).toEqual({});
        expect(result.current.isSubmitting).toBe(false);
    });

    it("actualiza valores con handleChange", () => {
        const { result } = renderHook(() => useAddProjetForm());

        act(() => {
            result.current.handleChange({
                target: { name: "name", value: "Proyecto X" },
            } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.values.name).toBe("Proyecto X");
    });

    it("marca campo como touched con handleBlur", () => {
        const { result } = renderHook(() => useAddProjetForm());

        act(() => {
            result.current.handleBlur({
                target: { name: "name" },
            } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.touched.name).toBe(true);
    });

    it("valida campos vacíos y genera errores", async () => {
        const { result } = renderHook(() => useAddProjetForm());

        await act(async () => {
            await result.current.handleSubmit(() => { });
        });

        expect(result.current.errors).toEqual({
            name: "El nombre es requerido",
            description: "La descripcion es requerida",
        });
    });

    it("ejecuta callback si el formulario es válido", async () => {
        const { result } = renderHook(() => useAddProjetForm());

        const callback = vi.fn();

        act(() => {
            result.current.handleChange({
                target: { name: "name", value: "Proyecto" },
            } as React.ChangeEvent<HTMLInputElement>);

            result.current.handleChange({
                target: { name: "description", value: "Desc" },
            } as React.ChangeEvent<HTMLInputElement>);
        });

        await act(async () => {
            await result.current.handleSubmit(callback);
        });

        expect(callback).toHaveBeenCalled();
    });
});