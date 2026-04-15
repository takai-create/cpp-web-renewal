import { test, expect } from "@playwright/test";

test.describe("お問い合わせフォーム", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("必須項目が存在する", async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="type"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('input[name="privacy"]')).toBeVisible();
  });

  test("必須項目が空で送信ボタンを押すとバリデーションが効く", async ({ page }) => {
    const submit = page.getByRole("button", { name: "送信する" });
    await submit.click();
    // ブラウザ標準バリデーションで未入力の name input が invalid 状態になる
    const nameInput = page.locator('input[name="name"]');
    const isInvalid = await nameInput.evaluate(
      (el: HTMLInputElement) => !el.validity.valid
    );
    expect(isInvalid).toBeTruthy();
  });

  test("URLパラメータで種別が初期選択される", async ({ page }) => {
    await page.goto("/contact?type=business");
    const select = page.locator('select[name="type"]');
    await expect(select).toHaveValue("business");
  });

  test("プライバシーポリシーリンクが表示される", async ({ page }) => {
    const link = page.getByRole("link", { name: "プライバシーポリシー" }).first();
    await expect(link).toBeVisible();
  });
});
