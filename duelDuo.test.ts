import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test(`choices display when draw button is clicked`, async () => {
  await driver.findElement(By.id("draw")).click();

  const choicesDiv = await driver.findElement(By.id("choices"));
  expect(choicesDiv).not.toBeNull();
});

test("Selecting a bot displays in our new div", async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.sleep(300);
  await driver.findElement(By.xpath('(//*[text()="Add to Duo"])[1]')).click();

  const playerDuoDiv = await driver.findElement(By.id("player-duo"));
  const displayed = await playerDuoDiv.isDisplayed();

  expect(displayed).toBe(true);
});

test(`Clicking on Draw button displays the "choose 2" message`, async () => {
  const button = await driver.findElement(By.id("draw-button"));
  await button.click();
  await driver.sleep(1000);

  const chooseHeader = await driver.findElement(By.id("choose-header"));
  const displayed = await chooseHeader.isDisplayed();
  expect(displayed).toBe(true);
});
