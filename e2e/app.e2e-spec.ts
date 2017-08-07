import { NgAuth0Page } from './app.po';

describe('ng-auth0 App', () => {
  let page: NgAuth0Page;

  beforeEach(() => {
    page = new NgAuth0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
