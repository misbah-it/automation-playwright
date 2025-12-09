import { test, expect } from '@playwright/test';

test('login and add product to cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('.logo')).toBeVisible();

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByText('Login to your account')).toBeVisible();

  await page.fill('input[data-qa="login-email"]', 'testautomation1123@example.com');
  await page.fill('input[data-qa="login-password"]', 'TestPassword123');
  await page.click('button[data-qa="login-button"]');

  await expect(page.getByText('Logged in as')).toBeVisible();

  await page.getByRole('link', { name: 'Products' }).click();
  await expect(page.getByText('All Products')).toBeVisible();

  await page.hover('.product-image-wrapper >> nth=0');
  await page.click('a[data-product-id="1"]');

  await expect(page.getByText('Your product has been added to cart')).toBeVisible();
  await page.getByRole('link', { name: 'View Cart' }).click();

  await expect(page.locator('.cart_description')).toBeVisible();
});
