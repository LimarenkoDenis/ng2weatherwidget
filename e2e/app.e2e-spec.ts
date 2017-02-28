import { Ng2weatherwidgetPage } from './app.po';

describe('ng2weatherwidget App', function() {
  let page: Ng2weatherwidgetPage;

  beforeEach(() => {
    page = new Ng2weatherwidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
