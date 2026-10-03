import { test, expect} from '@playwright/test'
test("should have a title", async ({page}) => {

// 1 goto the page
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
// 2 title of the page
    await expect(page).toHaveTitle("CURA Healthcare Service")
// 3 header of the page
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
    
    page.getByRole('heading', { name: 'We Care About Your Health' })
})