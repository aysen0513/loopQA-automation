import { test, expect } from "@playwright/test";

test.describe("Test Group @test1-2-3", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to your test URL here
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app");
    await page.waitForTimeout(3000);

    // Login to the application
    let username = page.locator("//input[@id='username']");
    await username.fill("admin");

    //await page.waitForTimeout(3000);

    let password = page.locator("//input[@id='password']");
    await password.fill("password123");
    await page.locator("//button[@type='submit']").click();
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Verify Implement user authentication is in the To Do column", async ({
    page,
  }) => {
    let toDoColumn = page.locator("//div[@class='flex flex-col w-80 bg-gray-50 rounded-lg p-4'][1]");

    expect(toDoColumn).toContainText("Implement user authentication");
  });

  test("Confirm tags: Feature & High Priority", async ({ page }) => {
    let elements = await page.locator("//div[@class='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow']").all();

    await page.waitForTimeout(3000);

    for(let element of elements) {
      let textContent = await element.innerText();
      
      if(textContent.includes("Implement user authentication") && textContent.includes("Feature") && textContent.includes("High Priority")){
        console.log("Feature and High Priority tags are present under Implement user auyhentication ticket and the test passes");
      } else {
        console.log("This ticket is not accurate one");
      }
    }

  })

  test("Verify Fix navigation bug is in the To Do column", async ({ page }) => {
    let toDoColumn = page.locator("//div[@class='flex flex-col w-80 bg-gray-50 rounded-lg p-4'][1]");
    expect(toDoColumn).toContainText("Fix navigation bug");


  });
   
  test("Confirm tags: Bug", async ({ page }) => {
   
    let elements = await page.locator("//div[@class='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow']").all();

    await page.waitForTimeout(3000);

    for(let element of elements) {
      let textContent = await element.innerText();
      
      if(textContent.includes("Fix navigation bug") && textContent.includes("Bug")){
        console.log("Bug tag is present under Fix navigation bug ticket and the test passes");
      } else {
        console.log("This ticket is not accurate one");
      }
    }

    
})

test("Verify Design system updates is in the In Progress column", async ({ page }) => {

    let inProgressColumn = page.locator("//div[@class='flex flex-col w-80 bg-gray-50 rounded-lg p-4'][2]");
    expect(inProgressColumn).toContainText("Design system updates");


})

test("Confirm tags: Design", async ({ page }) => {

  let elements = await page.locator("//div[@class='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow']").all();

    await page.waitForTimeout(3000);

    for(let element of elements) {
      let textContent = await element.innerText();
      
      if(textContent.includes("Design system updates") && textContent.includes("Design")){
        console.log("Design tag is present under Design system updates ticket and the test passes");
      } else {
        console.log("This ticket is not accurate one");
      }
    }

})


})
