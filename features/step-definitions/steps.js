import { Given, When, Then, Before } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import AddRemoveElementPage from '../pageobjects/add_remove_elemets.page';

const pages = {
    login: LoginPage,
    addElement: AddRemoveElementPage
}

Before('@skip',function() {return 'skipped'})

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying \"([^\"]*)\"$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I click add element button$/, () => {
    AddRemoveElementPage.addElement();
});

Then(/^I should see delete element$/,() => {
    AddRemoveElementPage.showDeleteButton();
});

When(/^I click button with text \"([^\"]*)\"$/, async (text) => {
    await AddRemoveElementPage.clickBtn(text);
});

Then(/^I see element with text \"([^\"]*)\"$/, async (text) => {
    await AddRemoveElementPage.seeBtnDisplayed(text);
});
