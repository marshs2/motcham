import { SteAppPage } from './app.po';

describe('ste-app App', function() {
  let page: SteAppPage;

  beforeEach(() => {
    page = new SteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
