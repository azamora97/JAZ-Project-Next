import { describe, it, expect } from "vitest";
import { getNextStatus } from "@/features/tickets/utils/getNextStatus";
import { Ticketstatus } from "@/features/tickets/interface";

describe("getNextStatus", () => {
    it("pasa de TODO a IN-PROGRESS", () => {
        const result = getNextStatus("TODO");

        expect(result).toBe("IN-PROGRESS");
    });

    it("pasa de IN-PROGRESS a DONE", () => {
        const result = getNextStatus("IN-PROGRESS");

        expect(result).toBe("DONE");
    });

    it("retorna el mismo estado si no existe en la lista", () => {
        const result = getNextStatus("UNKNOWN" as Ticketstatus);

        expect(result).toBe("TODO");
    });
});