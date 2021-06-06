package QualityKioskTraining.OrangeHRMTestWithCucumber.Pages;

import org.openqa.selenium.WebElement;

import QualityKioskTraining.AutomationFrameWorkAPI.WebTest;
import QualityKioskTraining.AutomationFrameWorkAPI.Utilities.Utils;
//changes are made
public class LoginPage {

	WebTest webTest;

	public LoginPage(String browserName) {
		webTest = new WebTest();
		Utils.initialiseEnvVariable();
		webTest.startTest(browserName);
		webTest.objectRepositories("LoginPage");
	}

	public void doLogin(String username, String password) {

		webTest.enterText(webTest.objectRepo.get("userNameField"), username);
		webTest.enterText(webTest.objectRepo.get("passwordField"), password);
		webTest.clickElement(webTest.objectRepo.get("loginButton"));

	}


	public void enterUserName(String userName)
	{
		webTest.enterText(webTest.objectRepo.get("userNameField"),userName);
	}
	
	public void enterPassword(String password)
	{
		webTest.enterText(webTest.objectRepo.get("passwordField"),password);
	}
	
	public void clickLoginButton()
	{
		webTest.clickElement(webTest.objectRepo.get("loginButton"));
	}
	

	public String getLoginError() {

		WebElement errorElement = webTest.findElementAndReturn("ByID", "spanMessage");
		String loginError = webTest.getElementText(errorElement);

		return loginError;
	}

}
