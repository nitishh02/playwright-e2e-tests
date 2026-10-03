import { test, expect } from '@playwright/test';

test.describe('Login Test', () => {

  test.beforeEach(async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await expect(page.locator('h1')).toBeVisible();
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.locator('#login')).toContainText('Please login to make appointment.');
  await expect(page.getByLabel('Username')).toBeVisible();

  });

  test('successful login', async ({ page }) => {
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');
});

test('unsuccessful login', async ({ page }) => {
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

  // await expect(page.locator('h2')).toContainText('Make Appointment');
});
});