import { test, expect } from '@playwright/test';

test.describe('Bonjwa Historie & Soundboard', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4321');
    const loginField = page.locator('#pw-input');
    await loginField.fill('2013'); 
    const submitBtn = page.locator('#pw-submit');
    await submitBtn.click();
  });

  test('sollte den Titel der Historie anzeigen', async ({ page }) => {
    const title = page.locator('h2:has-text("Die Geschichte von Bonjwa")');
    await expect(title).toBeVisible();
  });

  test('Filter-Funktionalität sollte Einträge filtern', async ({ page }) => {
    await page.goto('http://localhost:4321');

    // 1. Suche den Button, der den Text eines deiner Tags enthält (z.B. "Angestellter") und klicke darauf
    const filterBtn = page.locator('[data-tag="Angestellter"]');
    await filterBtn.click();

    // 2. Prüfen, ob der Button nun die 'active' Klasse hat
    await expect(filterBtn).toHaveClass(/active/);

    // 3. Prüfen, ob die sichtbaren und nicht sichtbaren Items im DOM
    const visibleItems = page.locator('[data-tags*="Angestellter"]').first();
    await expect(visibleItems).toHaveCSS('display', 'block');

    const notVisibleItems = page.locator('[data-tags*="Modemarke"]').first();
    await expect(notVisibleItems).toHaveCSS('display', 'none');
    
  });

  test('Soundboard-Button sollte Interaktion erlauben', async ({ page }) => {
    const soundBtn = page.locator('.sound-btn').first();
    await expect(soundBtn).toBeVisible();
    
    // Klick simulieren
    await soundBtn.click();
    
    // Prüfen, ob die Animations-Klasse hinzugefügt wurde
    await expect(soundBtn).toHaveClass(/animate-pulse/);
  });
});