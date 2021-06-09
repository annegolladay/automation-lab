import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test('add movie to list', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('superman\n')

    await driver.sleep(3000)
    //await driver.findElement(By.xpath('//button')).click()

    //cross movie off
    await (await driver.findElement(By.xpath(`//span[contains(text(),"superman")]`))).click()

    await driver.sleep(3000)

    //delete movie
    await (await driver.findElement(By.id("superman"))).click() 
    
    await driver.sleep(3000)
})

//Advanced message


// test('reveal message', () => {
//     expect(deleteMovie(revealMessage())).toBeTruthy()
// })

