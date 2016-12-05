import { IGasPage } from './app.po';

describe('i-gas App', function() {
  let page: IGasPage;

  beforeEach(() => {
    page = new IGasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
