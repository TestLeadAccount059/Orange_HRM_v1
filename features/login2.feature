Feature:OrangeHRM login

Background:
	Given Open the chrome browser
	Given navigate the url

Scenario:Verify OrangeHrm valid Welcome page

	
	When enter the username "selenium"
	When enter the password "selenium"
	When click on login
	Then verify the welcome page
	When click on logout

Scenario:Verify OrangeHrm invalid Welcome page

	
	When enter the username "admin"
	When enter the password "selenium"
	When click on login
	Then verify the welcome page
	When click on logout


