import { test, expect, chromium, Browser, Page } from '@playwright/test';

// declaring global variables
let browser:Browser;
let page:Page;

test.beforeAll( async () => {

  //launching setup or common setup
//launch the browser
browser=await chromium.launch({channel:'chrome',headless:false});
 //open the new tab
 page =await browser.newPage();
//naviagte with the url
await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/");
});


//remaining test cases
test('Verify the Login Page',async()=>{
//get the title of the web page
let Title_text:string=await page.title();

//verify the title of the web page
if(Title_text=="OrangeHRM - New Level of HR Management")
{
  console.log("Title Verification Passed");
}
else{
  console.log("Title Verification Failed");
}
 //identify the username element enter the valid user name.
 
 await page.locator("input[name='txtUserName']").fill("selenium");

 //8.identitfy the password element and enter the valid  password
await page.locator("input[name='txtPassword']").fill("selenium");

//9.click on login
await page.locator("input[name='Submit']").click();
//10.identify and get the welcome selenium text.
let text: string | null = await page.locator("xpath=/html/body/div[3]/ul/li[1]").textContent();

//print the "welcome selenium text".
console.log("Welcome text: " + text);

//veify welcome selenium text.
if(text === "Welcome selenium")
{
   console.log("Welcome Page Verification Passed");
}
else{
   console.log("Welcome page verification failed");
}

//logout click
await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();

});

test.afterAll(async()=>{
//closing setup
await browser.close();
});



