package QualityKioskTraining.OrangeHRMTestWithCucumber.Pages;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import junit.framework.Assert;

public class LoginTestStepDefinations {
	LoginPage loginPage;

@Given("^User is on Login screen$")
public void User_is_on_Login_screen() {
	loginPage =new LoginPage("CHROME");
}

@When("^User enters \"([^\"]*)\" in UserName field$")
public void enterUsername(String username) {
	loginPage.enterUserName(username);
}

@When("^User enters \"([^\"]*)\" in Password field$")
public void enterPassword(String password) {
	loginPage.enterPassword(password);
}

@When("^User clicks on Login button$")
public void clickLoginButton() {
	loginPage.clickLoginButton();
}

@Then("^User should enter into an application$")
public void User_should_enter_into_an_application() {
}

@When("^User enters ([^\"]*) in UserName field$")
public void User_enters_in_UserName_field(String username) {
	loginPage.enterUserName(username);

}

@When("^User enters ([^\"]*) in Password field$")
public void User_enters_in_Password_field(String password) {
	loginPage.enterPassword(password);

}
@Then("^Login Error:([^\"]*) should appear$")
public void Login_Error_appear(String error) {
	 String LoginError=loginPage.getLoginError();
	  Assert.assertEquals(error, LoginError);
	
}
}
