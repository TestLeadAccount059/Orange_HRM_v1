Feature:OrangeHRM login

Background:
	Given Open the chrome browser
	And navigate the url
@Smoke
Scenario:Verify OrangeHrm valid Welcome page

	
	When enter the username "selenium"
	And enter the password "selenium"
	And click on login
	Then verify the welcome page
	When click on logout




