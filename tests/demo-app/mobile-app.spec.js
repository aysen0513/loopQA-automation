import { test, expect } from "@playwright/test";

test.describe("Test Group @test4-5-6", () => {
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

    //await page.waitForTimeout(3000);

    // Click on the mobile application
    await page.locator("text='Mobile Application'").click();
    //await page.waitForTimeout(3000);
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Verify Push notification system is in the To Do column", async ({
    page,
  }) => {
    let toDoColumn = page.locator(
      "//div[@class='flex flex-col w-80 bg-gray-50 rounded-lg p-4'][1]"
    );
    expect(toDoColumn).toContainText("Push notification system");
  });

  test("Confirm tags: Feature", async ({ page }) => {
    let elements = await page
      .locator(
        "//div[@class='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow']"
      )
      .all();

    await page.waitForTimeout(3000);

    for (let element of elements) {
      let textContent = await element.innerText();

      if (
        textContent.includes("Push notification system") &&
        textContent.includes("Feature")
      ) {
        console.log(
          "Feature tag is present under Push notification system ticket and the test passes"
        );
      } else {
        console.log("This ticket is not accurate one");
      }
    }
  });

  test("Verify Offline mode is in the In Progress column", async ({ page }) => {
    let inProgressColumn = page.locator(
      "//div[@class='flex flex-col w-80 bg-gray-50 rounded-lg p-4'][2]"
    );
    expect(inProgressColumn).toContainText("Offline mode");

});


test("Confirm tags: Feature & High Priority", async ({ page }) => {
  let elements = await page.locator("//div[@class='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow']").all();

  await page.waitForTimeout(3000);

  for(let element of elements) {
    let textContent = await element.innerText();
    
    if(textContent.includes("Offline mode") && textContent.includes("Feature") && textContent.includes("High Priority")){
      console.log("Feature and High Priority tags are present under Offline mode ticket and the test passes");
    } else {
      console.log("This ticket is not accurate one");
    }
  }

});

test("Verify App icon design is in the Done column", async ({ page }) => {

  let doneColumn = page.locator("//div[@class='flex flex-col w-80 bg-gray-50 rounded-lg p-4'][4]");
  expect(doneColumn).toContainText("App icon design");

});

test("Confirm tags: Design", async ({ page }) => {

  let elements = await page.locator("//div[@class='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow']").all();

    await page.waitForTimeout(3000);

    for(let element of elements) {
      let textContent = await element.innerText();
      
      if(textContent.includes("App icon design") && textContent.includes("Design")){
        console.log("Design tag is present under App icon design ticket and the test passes");
      } else {
        console.log("This ticket is not accurate one");
      }
    }

})

})
