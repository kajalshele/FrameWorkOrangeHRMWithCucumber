$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('QualityKioskTraining\OrangeHRMTestWithCucumber\Pages\LoginTestCases.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Login functionality of Orange HRM application",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing login functionality with valid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"Admin\" in UserName field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"admin123\" in Password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should enter into an application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 25594185700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "LoginTestStepDefinations.enterUsername(String)"
});
formatter.result({
  "duration": 223519700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 13
    }
  ],
  "location": "LoginTestStepDefinations.enterPassword(String)"
});
formatter.result({
  "duration": 254384600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinations.clickLoginButton()"
});
formatter.result({
  "duration": 5863066800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinations.User_should_enter_into_an_application()"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Testing login functionality with Invalid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters Kajal in UserName field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters Shele in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login Error:Invalid credentials should appear",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 13429172400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kajal",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.User_enters_in_UserName_field(String)"
});
formatter.result({
  "duration": 470681000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shele",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.User_enters_in_Password_field(String)"
});
formatter.result({
  "duration": 474760500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinations.clickLoginButton()"
});
formatter.result({
  "duration": 2037773900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.Login_Error_appear(String)"
});
formatter.result({
  "duration": 773015500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Testing login functionality with Invalid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters  in UserName field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters admin123 in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login Error:Username cannot be empty should appear",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 25950992000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.User_enters_in_UserName_field(String)"
});
formatter.result({
  "duration": 610653800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.User_enters_in_Password_field(String)"
});
formatter.result({
  "duration": 562743300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinations.clickLoginButton()"
});
formatter.result({
  "duration": 181753400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.Login_Error_appear(String)"
});
formatter.result({
  "duration": 96926500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Testing login functionality with Invalid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters kajal in UserName field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters  in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login Error:Password cannot be empty should appear",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 28604966100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kajal",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.User_enters_in_UserName_field(String)"
});
formatter.result({
  "duration": 354670000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.User_enters_in_Password_field(String)"
});
formatter.result({
  "duration": 897989800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinations.clickLoginButton()"
});
formatter.result({
  "duration": 284442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 12
    }
  ],
  "location": "LoginTestStepDefinations.Login_Error_appear(String)"
});
formatter.result({
  "duration": 125012400,
  "status": "passed"
});
});