Feature: Add remove element

    @skip
    Scenario: adding 1 element then delete 
        Given I am on the addElement page
        When I click add element button
        Then I should see delete element

    @skip
    Scenario: adding 1 element then delete with params
        Given I am on the addElement page
        When I click button with text "Add Element"
        Then I see element with text "Delete"