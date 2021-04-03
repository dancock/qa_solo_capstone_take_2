# qa_solo_capstone_take_2
2nd attempt at the solo project since no one was able to figure out how to close that modal window on the last site. This time we are going with Ikea.com.

- [Summary](#summary)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [What Do We Test](#what-do-we-test)
- [How Do We Test](#how-do-we-test)
  - [Page Objects](#page-objects)
  - [Data Files](#data-files)
- [Lessons Learned](#lessons-learned)
- [Tools/technologies used](#tools-technologies-used)
- [Processes Followed](#processes-followed)

## Summary

This project was put together to test bonnieplants.com. For the automation, it uses Jest as a test
runner, and Selenium Webdriver to hook into the browser. Manual test cases are on Jira. 

Since the website was broken, I had to change websites to ikea.com.

## Setup

This is how to set up our project.

1. clone it!
1. `npm i`

## Running Tests

To run all the tests, use the command: `npm test`

To run a specific test, use the command: `npx jest test_name`

## What Did I Test

The functionality I tested for was mainly GUI functionality and dynamic elements. I didn't have much time after needing to start a second website.

## How Did I Test

I organized my tests using Jira and used a lot of tasks to keep track of what I needed to do.

### Page Objects

I created page objects for these pages because 

- BasePage
  - A base page for page objects.
- MenuShopPage
  - A page for the methods and variables that I used to test the Shop page.
- IntSalesPage
  - A page for the methods and variables that I used to test the International Sales page.
- MuseumPage
  - A page for the methods and variables that I used to test the Museum page.
- TodayPage
  - A page for the methods and variables that I used to test the Today page.
- AboutPage
  - A page for the methods and variables that I used to test the About page.

### Data Files

I only have placeholders for the data files right now because I didn't have enough time to create the tests after having to change websites.

### Lessons Learned
In this section I will add a few points from your retrospective, or new ideas that come up while putting this together.
Learned how to create a remote github repo.
Learned how to create group dm on discord.
Learned how to use xPath and css selectors better.
Learned how to resize the browser window using a webdriver.
Learned how to add/delete cookies using a webdriver.
Make sure to check the Dev Tools for errors on the page not related to my testing.


### Tools/technologies used
VS Code
Selenium
Jest
Chrome
Typescript
Browser Dev Tools
Github
Windows 10
OBS Studio
Postman
Discord
Git Bash
Selenium webdriver
Chromedriver
Jira
fs


### Processes followed
Agile Methodologies
Risk Analysis
Whitebox Testing
Analysis - Planning - Design - Execution -  Testing and Retesting
Unit Testing
Smoke Testing
Functional Testing
UX/UI Testing
Iterative Development
Usability Testing
