const { test, expect } = require('@playwright/test');

test.describe('Blog app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Asegúrate de que esta sea la URL correcta de tu aplicación
  });

  test('Login form is shown', async ({ page }) => {
    await expect(page.locator('text=Login')).toBeVisible();
  });

  // Añade más pruebas de Playwright aquí
});
