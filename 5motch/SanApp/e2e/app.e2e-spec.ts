import { SanAppPage } from './app.po';

describe('san-app App', function() {
  let page: SanAppPage;

  beforeEach(() => {
    page = new SanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
