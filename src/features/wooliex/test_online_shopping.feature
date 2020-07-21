@wooliesx
Feature: Frontend Test

  Scenario: user adds two items to the cart and places an order
   	Given I open the url "http://automationpractice.com/index.php"	
# Wait for the first item Blouse image to show up then select it
	Then I expect that element "//ul[@id="homefeatured"]//img[@title='Blouse']" becomes visible
	When I click on the element "//ul[@id="homefeatured"]//img[@title='Blouse']"
#Add it to the shopping cart
	Then I expect that element "//*[@id="add_to_cart"]" becomes visible
	And I click on the element "//*[@id="add_to_cart"]"		
#Continue with shopping
	Then I expect that element "//span[@title="Continue shopping"]" becomes visible
	And I click on the element "//span[@title="Continue shopping"]"	
	And I click on the element "//*[@id="block_top_menu"]//a[@title='Women']"
# Wait for the second item Printed Chiffon Dress image to show up, open it and add to shopping cart
	Then I expect that element "//div[@id="center_column"]//img[@title='Printed Chiffon Dress']" becomes visible
	And I click on the element "//div[@id="center_column"]//img[@title='Printed Chiffon Dress']"
	Then I expect that element "//*[@id="add_to_cart"]" becomes visible
	And I click on the element "//*[@id="add_to_cart"]"	
# Proceed to checkout
	Then I expect that element "//a[@title='Proceed to checkout']" becomes visible
	When I click on the element "//a[@title='Proceed to checkout']"
# Verify amount and do real checkout	
	And I expect that element "//*[@id="total_product"]" matches the text "$43.40"
	And I expect that element "//*[@id="total_shipping"]" matches the text "$2.00"	
	And I click on the element "//a[@title='Continue shopping']/preceding-sibling::a[@title='Proceed to checkout']"	