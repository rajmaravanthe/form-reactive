import { FormReactivePage } from './app.po';

describe('form-reactive App', function() {
  let page: FormReactivePage;

  beforeEach(() => {
    page = new FormReactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
