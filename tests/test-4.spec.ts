import { test, expect } from '@playwright/test';

test('login to demo page with valid credentials', async ({ page }) => {

  // Step 1: Go to demo login page
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.locator('h2')).toBeVisible();

  // Step 2: Enter username
  await page.fill('input#username', 'tomsmith');

  // Step 3: Enter password
  await page.fill('input#password', 'SuperSecretPassword!');

  // Step 4: Click login button
  await page.click('button[type="submit"]');

  // Step 5: Verify successful login
  await expect(page.locator('.flash.success')).toBeVisible();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

  console.log('Demo login successful!');
});
