import { test, expect } from "@playwright/test";

/**
 * 全ページが正常に表示されるかをチェック
 */
const pages = [
  { path: "/", title: /Crowd Power Partners/, heading: /AIが動き/ },
  { path: "/about", title: /私たちについて/, heading: /私たちについて/ },
  { path: "/business", title: /事業紹介/, heading: /事業紹介/ },
  { path: "/contact", title: /お問い合わせ/, heading: /お問い合わせ/ },
  { path: "/privacy", title: /プライバシーポリシー/, heading: /プライバシーポリシー/ },
];

for (const p of pages) {
  test(`${p.path} が表示される`, async ({ page }) => {
    await page.goto(p.path);
    await expect(page).toHaveTitle(p.title);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
}

test("404 ページが表示される", async ({ page }) => {
  const response = await page.goto("/this-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("404")).toBeVisible();
});
