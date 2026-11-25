Feature:OrangeHRM login.

Scenario:Verify Orange Hrm Welcome page.

	Given Open the chrome browser
	Given navigate the url
	When enter the username
		|username| 
		|selenium|
	When enter the password
		|password|
		|selenium|
	When click on login
	Then verify the welcome page
	When click on logout
