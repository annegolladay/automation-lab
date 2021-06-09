import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('/Users/annegolladay/Desktop/devmtn/Week6/automation/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test('add movie to list', async () => {
    await driver.findElement(By.xpath('//*/input')).sendKeys('superman\n')

    //await driver.findElement(By.xpath('//*/button')).click()

    //cross movie off
    await (await driver.findElement(By.xpath(`//span[conatins(text(),="superman")]`))).click()

    //delete movie
    await (await driver.findElement(By.id("superman"))).click() 
    
    await driver.sleep(3000)
})



