import Page from './page';
import {expect} from 'chai';

class AddRemoveElementsPage extends Page{
    open() {
        return super.open('add_remove_elements/');
    }

    get btnAddElement() { return $('button=Add Element'); } 
    get btnDeleteElement() { return $('button=Delete'); } 
    btn(text){
        return $(`//*[text()='${text}']`);
    }

    async addElement(){
        await this.btnAddElement.click();
        
    }

    async deleteElement(){
        await this.btnDeleteElement.click();
    }

    async clickBtn(text){
        await this.btn(text).click();
    }

    async showDeleteButton(){
        await expect(this.btnDeleteElement).toBeDisplayed();
    }

    async seeBtnDisplayed(text){
        let btn = await this.btn(text);
        let isDisplayed = await btn.isDisplayed();
        expect(isDisplayed).to.equal(true);
    }
}

export default new AddRemoveElementsPage();