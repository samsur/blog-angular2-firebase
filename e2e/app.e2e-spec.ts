import { BlogAngular2FirebasePage } from './app.po';

describe('blog-angular2-firebase App', function() {
  let page: BlogAngular2FirebasePage;

  beforeEach(() => {
    page = new BlogAngular2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
