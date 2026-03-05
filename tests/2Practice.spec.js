const {test,expect} = require('@playwright/test');

test('Login test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log( await page.title());

    await page.locator('#username').fill('rahulshettyacademy');

    await page.locator('#password').fill('Learning@830$3mK2');

await page.locator('[name="signin"]').click();
await page.waitForLoadState();

//await expect(page.locator("[style*='block']")).toContainText('Incorrect');
     console.log(await page.locator('.card-body a').nth(0).textContent());
});    