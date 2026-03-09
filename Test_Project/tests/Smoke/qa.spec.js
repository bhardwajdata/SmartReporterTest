// @ts-check
import { test, expect } from '@playwright/test';

test('QAtitle', async ({ page }) => {
    await page.goto('https://github.com/', { waitUntil: 'domcontentloaded' });

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('GitHub · Change is constant. GitHub keeps you ahead. · GitHub');
    console.log("Git Title Verified");

    await page.getByRole('link', { name: 'Sign in' }).click();
    expect(page).toHaveURL('https://github.com/login');

    console.log("Git Login Page verified");

});

