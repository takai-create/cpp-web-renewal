import { test, expect } from "@playwright/test";

test.describe("ヘッダーナビゲーション", () => {
  test("トップ → 私たちについて へ遷移", async ({ page }) => {
    await page.goto("/");
    await page.locator("header").getByRole("link", { name: "私たちについて" }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test("トップ → 事業紹介 へ遷移", async ({ page }) => {
    await page.goto("/");
    await page.locator("header").getByRole("link", { name: "事業紹介" }).click();
    await expect(page).toHaveURL(/\/business/);
  });

  test("ヘッダーロゴクリックでトップへ", async ({ page }) => {
    await page.goto("/about");
    await page.locator("header").locator("a.v2-header__logo").click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("フッターリンク", () => {
  test("プライバシーポリシーへ遷移", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").getByRole("link", { name: "プライバシーポリシー" }).click();
    await expect(page).toHaveURL(/\/privacy/);
  });

  test("会社概要・アクセスへ遷移", async ({ page }) => {
    await page.goto("/");
    await page
      .locator("footer")
      .getByRole("link", { name: "会社概要・アクセス" })
      .click();
    await expect(page).toHaveURL(/\/about/);
  });
});

test.describe("CTAリンク", () => {
  test("トップのお問い合わせCTA → /contact", async ({ page }) => {
    await page.goto("/");
    await page
      .locator("section#contact")
      .getByRole("link", { name: /事業について相談する/ })
      .click();
    await expect(page).toHaveURL(/\/contact/);
  });
});
