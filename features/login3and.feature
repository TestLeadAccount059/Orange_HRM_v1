Feature:OrangeHRM login



Scenario:Verify OrangeHrm valid Welcome page

	
	When enter the username "selenium"
	And enter the password "selenium"
	And click on login
	Then verify the welcome page
