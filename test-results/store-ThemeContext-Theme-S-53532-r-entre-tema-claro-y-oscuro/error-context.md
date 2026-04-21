# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: store\ThemeContext.spec.tsx >> Theme Switch >> puede cambiar entre tema claro y oscuro
- Location: test\e2e\store\ThemeContext.spec.tsx:4:7

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('.CustomHeader')
Expected pattern: /header dark/
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveClass" with timeout 5000ms
  - waiting for locator('.CustomHeader')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - img "Icon" [ref=e5]
        - heading "JAZ-DevBoard" [level=1] [ref=e6]
      - paragraph [ref=e7]: Proyectos Curso React Avanzado
      - generic [ref=e8]:
        - button [ref=e9]
        - button "Login" [ref=e12] [cursor=pointer]
    - main [ref=e13]:
      - generic [ref=e15]:
        - link "Proyectos" [ref=e16] [cursor=pointer]:
          - /url: /projects
        - link "Tiquetes" [ref=e17] [cursor=pointer]:
          - /url: /tickets
        - link "Acerca de" [ref=e18] [cursor=pointer]:
          - /url: /about
      - generic [ref=e19]: HomePage Proyecto Jose Andres Zamora Montoya
  - button "Open Next.js Dev Tools" [ref=e25] [cursor=pointer]:
    - img [ref=e26]
  - alert [ref=e29]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Theme Switch", () => {
  4  |   test("puede cambiar entre tema claro y oscuro", async ({ page }) => {
  5  |     await page.goto("http://localhost:3000");
  6  | 
  7  |     const themeButton = page.getByRole("button", { name: /oscuro|claro/i });
  8  | 
  9  |     // Estado inicial
> 10 |     await expect(page.locator(".CustomHeader")).toHaveClass(/header dark/);
     |                                                 ^ Error: expect(locator).toHaveClass(expected) failed
  11 | 
  12 |     // Cambiar a claro
  13 |     await themeButton.click();
  14 | 
  15 |     await expect(page.locator(".CustomHeader")).toHaveClass(/header light/);
  16 | 
  17 |     // Volver a oscuro
  18 |     await themeButton.click();
  19 | 
  20 |     await expect(page.locator(".CustomHeader")).toHaveClass(/header dark/);
  21 |   });
  22 | });
  23 | 
```