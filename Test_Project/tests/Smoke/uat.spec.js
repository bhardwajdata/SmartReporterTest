// @ts-check
import { test, expect } from '@playwright/test';

test('UAT title', async ({ page }) => {
    await page.goto('https://about.gitlab.com/', { waitUntil: 'domcontentloaded' });

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Finally, AI for the entire software lifecycle.');
    console.log("Gitlab Title Verified");

    await page.getByRole('link', { name: 'Talk to sales' }).click();
    expect(page).toHaveURL('https://about.gitlab.com/sales/');
    console.log("Gitlab Sign in page verified");
});
