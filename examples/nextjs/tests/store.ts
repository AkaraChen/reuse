import { expect, test } from "@playwright/test";

const base = "http://localhost:7812";

test("should work", async ({ page }) => {
	await page.goto(base);
	const sync = page.getByTestId("sync");
	await expect(sync).toHaveText("Sync");
});
