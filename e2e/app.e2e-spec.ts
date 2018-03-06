import { AppPage } from './app.po';

describe('test1 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display tree component with data', () => {
    page.navigateTo();
    expect(page.getTreeItems().count()).toBe(20);
  });

  it('should be tree items with childs', () => {
    expect(page.getTreeItemsWithChilds().count()).toBe(3);
  });

  it('search should be working', () => {
    page.getSearchInput().sendKeys('Рас')
    expect(page.getTreeItems().count()).toBe(20);
  });
});
