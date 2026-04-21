import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: [path.resolve(__dirname, "test/setup.ts")],

        exclude: [
            "node_modules",
            "dist",
            "playwright",
            "e2e",
            "test/e2e/**"
        ],

        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            reportsDirectory: "./coverage",
            exclude: [
                "**/index.ts"
            ],
        }
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});