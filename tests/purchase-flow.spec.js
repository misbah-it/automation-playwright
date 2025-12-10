import { test, expect } from '@playwright/test';

test('Complete purchase flow on SauceDemo', async ({ page }) => {

  // Navigate to SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // Enter username
  const usernameInput = page.locator('[data-test="username"]');
  await usernameInput.fill('standard_user');

  // Enter password
  const passwordInput = page.locator('[data-test="password"]');
  await passwordInput.fill('secret_sauce');

  // Click login button
  const loginButton = page.locator('[data-test="login-button"]');
  await loginButton.click();

  // Verify products page is displayed
  const pageTitle = page.locator('.title');
  await expect(pageTitle).toHaveText('Products');

  // Add Sauce Labs Backpack to the cart
  const backpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await backpackButton.click();

  // Apply filter Name (Z to A)
  const filterDropdown = page.locator('.product_sort_container');
  await filterDropdown.selectOption('za');

  // Add T-Shirt (Red) to the cart
  const tShirtButton = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  await tShirtButton.click();

  // Navigate to the shopping cart
  const cartIcon = page.locator('.shopping_cart_link');
  await cartIcon.click();
  await expect(pageTitle).toHaveText('Your Cart');

  // Click checkout button
  const checkoutButton = page.locator('[data-test="checkout"]');
  await checkoutButton.click();

  // Enter checkout information
  const firstNameInput = page.locator('[data-test="firstName"]');
  await firstNameInput.fill('Misbah');

  const lastNameInput = page.locator('[data-test="lastName"]');
  await lastNameInput.fill('Waseem');

  const postalCodeInput = page.locator('[data-test="postalCode"]');
  await postalCodeInput.fill('12345');

  // Continue to overview
  const continueButton = page.locator('[data-test="continue"]');
  await continueButton.click();
  await expect(pageTitle).toHaveText('Checkout: Overview');

  // Finish the order
  const finishButton = page.locator('[data-test="finish"]');
  await finishButton.click();

  // Verify order completion message
  const completeMessage = page.locator('.complete-header');
  await expect(completeMessage).toHaveText('Thank you for your order!');

  // Return to products page
  const backHomeButton = page.locator('[data-test="back-to-products"]');
  await backHomeButton.click();
  await expect(pageTitle).toHaveText('Products');

});
