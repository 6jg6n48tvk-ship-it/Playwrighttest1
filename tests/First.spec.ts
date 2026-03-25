import { test, expect } from '@playwright/test';

test('intro to the page title', async ({ page }) => {
  // 1. Navigate to the Playwright website
  await page.goto('https://playwright.dev/');
    
  // 2. Click the 'Get started' link (commonly used for 'Docs')
  await page.getByRole('link', { name: 'Docs' }).click();

  // 3. Locate the main heading
  // The 'name' in getByRole should match the visible text precisely
  const heading = page.getByRole('heading', { name: 'Introduction' });

  // 4. Assert the heading text
  // Matchers like toHaveText are case-sensitive by default
  //await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Introduction'); 
})