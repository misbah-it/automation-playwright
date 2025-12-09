import { test, expect } from '@playwright/test';
test('login and delete account', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect(page).toHaveURL('https://automationexercise.com/');

  await expect(page.locator('.logo')).toBeVisible();

await page.getByRole('link', { name: 'Login' }).click();
 

  await expect(page.getByText('Login to your account')).toBeVisible();

  await page.fill('input[data-qa="login-email"]', 'testautomation1123@example.com');

  await page.fill('input[data-qa="login-password"]', 'TestPassword123');

  await page.click('button[data-qa="login-button"]');

  await expect(page.getByText('Logged in as')).toBeVisible();

 await page.getByRole('link', { name: 'Delete Account' }).click();

  await expect(page.getByText('Account Deleted!')).toBeVisible();

});



