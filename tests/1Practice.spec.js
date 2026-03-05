 const { test, expect } = require('@playwright/test');

// test('Open new page', async ({ browser }) => {
//   // Create a new context
//   const context = await browser.newContext();
  
//   // Open a new page in that context
//   const page = await context.newPage();
  
//   // Navigate to a URL
//   await page.goto('https://Google.com');
  
//   // Verify page loaded
//   expect(page).toBeTruthy();
  
//   // Close the page
//   await page.close();
  
//   // Close the context
//   await context.close();
// });

test('My first test', async ({page}) => {
   await page.goto('https://Google.com');
  console.log(await page.title()); 
   await expect(page).toHaveTitle(/Google/);
}); 