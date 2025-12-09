import { test, expect } from '@playwright/test';

test('create account ', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  await expect(page.locator('.logo')).toBeVisible();

  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await expect(page.getByText('New User Signup!')).toBeVisible();

  await page.fill('input[data-qa="signup-name"]', 'Automation User');
  await page.fill('input[data-qa="signup-email"]', 'testautomation1123@example.com');  
  await page.click('button[data-qa="signup-button"]');

  await expect(page.getByText('Enter Account Information')).toBeVisible();

  await page.check('#id_gender1');
  await page.fill('input#password', 'TestPassword123');

  await page.selectOption('#days', '10');
  await page.selectOption('#months', '5');
  await page.selectOption('#years', '1998');

  await page.fill('input#first_name', 'Automation');
  await page.fill('input#last_name', 'User');
  await page.fill('input#address1', '123 Test Street');
  await page.selectOption('#country', 'United States');
  await page.fill('input#state', 'CA');
  await page.fill('input#city', 'Los Angeles');
  await page.fill('input#zipcode', '90001');
  await page.fill('input#mobile_number', '5551234567');

  await page.click('button[data-qa="create-account"]');
  await expect(page.getByText('Account Created!')).toBeVisible();

  await page.click('a[data-qa="continue-button"]');
  await expect(page.getByText('Logged in as')).toBeVisible();
});
