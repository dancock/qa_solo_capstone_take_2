import { BasePage } from "./BasePage";
import { By, WebDriver } from "selenium-webdriver";

export class MuseumPage extends BasePage {
  driver: WebDriver;
  url: string;

  iAgreeBtn: By = By.css('button.btn.iagree');
  upperBar: By = By.css('a.brand');
  background: By = By.css('#hero-top > div > div > div > div > a');

  constructor(driver) {
    super(driver);
    this.url = "https://www.ikea.com";
  }
}