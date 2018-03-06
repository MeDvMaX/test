import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSearchInput() {
    return element(by.css('.tree-search'));
  }

  getTreeItems() {
    return element.all(by.css('.tree-item'));
  }

  getTreeItemsWithChilds() {
    return element.all(by.css('.have-childs'));
  }
}
