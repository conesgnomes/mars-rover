import { MarsRoverPage } from './app.po';

describe('mars-rover App', () => {
  let page: MarsRoverPage;

  beforeEach(() => {
    page = new MarsRoverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
