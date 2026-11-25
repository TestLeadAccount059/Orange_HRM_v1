
import { test, expect, Page, Browser, chromium } from '@playwright/test';
// declaring global variables
let browser:Browser;
let page:Page;

test.beforeAll(async () => {
    //launch the browser
    browser=await chromium.launch({channel:'chrome',headless:false});
     //open the new tab
     page =await browser.newPage();
    //naviagte with the url
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/");
});

/*test("Verify the HRMS Login page loads", async ({ page }) => {
    await expect(page).toHaveTitle(
        "OrangeHRM - New Level of HR Management"
    );
});*/

test("Verify Page Title", async () => {
    await expect(page).toHaveTitle(
        "OrangeHRM - New Level of HR Management"
    );
let Title_text:string=await page.title();
let expected_res:string="OrangeHRM - New Level of HR Management";
await expect(Title_text).toBe(expected_res);
    console.log("Verified title");
});

test("Verify Login Button", async () => {
    await expect(
        page.locator("[name='Submit']")
    ).toBeVisible();
});
