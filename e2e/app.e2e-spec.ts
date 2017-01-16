import { EnVisualwordsPage } from './app.po';

describe('en-visualwords App', function() {
  let page: EnVisualwordsPage;

  beforeEach(() => {
    page = new EnVisualwordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
