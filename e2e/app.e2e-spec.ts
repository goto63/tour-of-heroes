import { TourOfHeroesPage } from './app.po';

describe('tour-of-heroes App', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it(`should display 'Tour of Heroes'`, done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Tour of Heroes'))
      .then(done, done.fail);
  });
});
