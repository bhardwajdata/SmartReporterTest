// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Playwright/);
  console.log("Verified Title");

  await page.getByRole('link', { name: 'Get started' }).click();

  console.log("Clicked verified");
});
