import { LearnerPage } from './app.po';

describe('learner App', function() {
  let page: LearnerPage;

  beforeEach(() => {
    page = new LearnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
