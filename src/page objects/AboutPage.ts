import { BasePage } from "./BasePage";
import { By, WebDriver } from "selenium-webdriver";

export class AboutIkeaPage extends BasePage {
  driver: WebDriver;
  url: string;

  aboutAcceptCookies: By = By.css('button.btn.btn--filled.js-cookie-accept');
  navBar: By = By.css('div.navbar__main-bar-inner');
  
  constructor(driver) {
    super(driver);
    this.url = "https://www.ikea.com";
  }
}