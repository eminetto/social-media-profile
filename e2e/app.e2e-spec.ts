import { SocialMidiaProfilePage } from './app.po';

describe('social-midia-profile App', () => {
  let page: SocialMidiaProfilePage;

  beforeEach(() => {
    page = new SocialMidiaProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
