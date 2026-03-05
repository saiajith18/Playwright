const {test,except} = require ('@playwright/test');

test ('Dropdown', async ({page})  => {

await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
await page.locator('#username').fill('rahulshettyacademy');
await page.locator('#password').fill('Learning@830$3mK2');
await page.locator("select.form-control").selectOption('consult')
//await dropdown.selectOption.last().click();
 
await page.pause();
 
    

});
